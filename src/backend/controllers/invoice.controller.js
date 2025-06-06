const db = require("../model");
const Invoice = db.invoice;

class InvoiceController {
  async getInvoiceByTicket(bookingReference) {
    const invoice = await Invoice.findOne({
      where: {
        bookingReference: bookingReference,
      },
    });

    return invoice;
  }

  async getInvoice(id) {
    const invoice = await Invoice.findByPk(id);
    return invoice;
  }

  async saveInvoice(
    fullName,
    cellphone,
    licenseUniqueId,
    sansUniqueId,
    ticketTypeUniqueId,
    number,
    price,
    serviceUniqueId
  ) {
    try {
      const invoice = await Invoice.create({
        fullname: fullName,
        cellphone: cellphone,
        licenseUniqueId: licenseUniqueId,
        sansUniqueId: sansUniqueId,
        ticketTypeUniqueId: ticketTypeUniqueId,
        number: number,
        price: price,
        total_price: parseInt(number) * parseInt(price),
        status: "reserve",
        serviceUniqueId: serviceUniqueId,
      });

      if (invoice) {
        return invoice.id;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  async setTempInvoice(id, resp) {
    await Invoice.update(
      {
        tempBookingReference: resp.tempBookingReference,
        expireDateTime: resp.expireDateTime,
        expireDateTimeUTC: resp.expireDateTimeUTC,
        tempShoppingCartUniqueId: resp.tempShoppingCartUniqueId,
      },
      { where: { id: id } }
    );

    const invoice = await this.getInvoice(id);
    return invoice;
  }

  async setFinalInvoice(id, resp) {
    await Invoice.update(
      {
        bookingReference: resp.bookingReference,
        ticketsLink: resp.ticketsLink,
      },
      { where: { id: id } }
    );
    const invoice = await this.getInvoice(id);
    return invoice;
  }
}

export default InvoiceController;
