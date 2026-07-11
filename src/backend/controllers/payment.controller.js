import { setFinalizeTemp } from "services/ristpanel";
import InvoiceController from "./invoice.controller";
import TicketController from "./ticket.controller";
const db = require("../model");
const Payment = db.payment;

class PaymentController {
  async addPayment(invoice_id, cellphone, total_price, gateway = "zibal") {
    try {
      const uniq_code = Math.floor(100000 + Math.random() * 900000);

      const payment = await Payment.create(
        {
          invoice_id: invoice_id,
          cellphone: cellphone,
          total_price: total_price,
          gateway: gateway,
          uniq_code: uniq_code,
        },
        { raw: true }
      );

      return payment;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async addTrackId(id, track_id) {
    await Payment.update({ track_id: track_id }, { where: { id: id } });

    const p = await this.getPayment(id);

    return p;
  }

  async getPayment(id) {
    try {
      const payment = await Payment.findByPk(id);

      return payment;
    } catch (err) {
      console.log("getPaymentById", err);
      return null;
    }
  }

  async getPaymentByUniqCode(uniq_code) {
    try {
      const payment = await Payment.findOne({
        where: { uniq_code: uniq_code },
        raw: true,
      });

      return payment;
    } catch (err) {
      console.log("getPaymentByUniqCode", err);
      return null;
    }
  }

  async updatePaymentZibal(id, resp) {
    try {
      if (!resp.status) {
        await Payment.update(
          {
            status: "fail",
          },
          { where: { id: id } }
        );
      } else {
        await Payment.update(
          {
            paidAt: resp.paidAt,
            amount: resp.amount,
            result: resp.result,
            status_zibal: resp.status,
            message: resp.message,
            statusMessage: resp.statusMessage,
            status: "success",
          },
          { where: { id: id } }
        );
      }

      const p = await this.getPayment(id);

      if (p["status"] === "success") {
        const invController = new InvoiceController();

        const invoice = await invController.getInvoice(p["invoice_id"]);
        const ress = await setFinalizeTemp(
          invoice["tempBookingReference"],
          0,
          false
        );
        const finalInvoice = await invController.setFinalInvoice(
          invoice["id"],
          ress.data
        );
        const ticketController = new TicketController();
        await Promise.all(
          ress.data.eventsTickets.map(async (tick) => {
            await ticketController.setTicket(
              invoice["id"],
              invoice["cellphone"],
              tick
            );
          })
        );
        return finalInvoice;
      } else {
        return p;
      }
    } catch (err) {
      console.log("update zibal", err);
      return null;
    }
  }
}

export default PaymentController;
