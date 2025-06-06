import PaymentController from "../../../src/backend/controllers/payment.controller";
import InvoiceController from "../../../src/backend/controllers/invoice.controller";
import ServicesControllers from "../../../src/backend/controllers/services.controllers";

export default function handler(req, res) {
  try {
    const { cellphone, code } = req.query;

    const pyController = new PaymentController();
    const invController = new InvoiceController();
    const serController = new ServicesControllers();

    pyController
      .getPaymentByUniqCode(code)
      .then((payement) => {
        invController
          .getInvoice(payement["invoice_id"])
          .then((invoice) => {
            serController
              .getServiceByServiceUniq(invoice["serviceUniqueId"])
              .then((service) => {
                return res.status(200).json({
                  status: "success",
                  data: {
                    payment: payement,
                    invoice: invoice,
                    service: service,
                  },
                });
              })
              .catch((err) => {
                return res
                  .status(500)
                  .json({ status: "fail", error: err, type: "fail service" });
              });
          })
          .catch((err) => {
            return res
              .status(500)
              .json({ status: "fail", error: err, type: "fail invoice" });
          });
      })
      .catch((err) => {
        return res
          .status(500)
          .json({ status: "fail", error: err, type: "fail payment " });
      });
  } catch (err) {
    console.log(err);
  }
}
