import InvoiceController from "../../../src/backend/controllers/invoice.controller";
import PaymentController from "../../../src/backend/controllers/payment.controller";

const Zibal = require("zibal");

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const { id } = req.query;

  const invController = new InvoiceController();
  const pyController = new PaymentController();

  invController
    .getInvoice(id)
    .then((invoice) => {
      pyController
        .addPayment(id, invoice.cellphone, invoice.total_price)
        .then((py) => {
          const z = new Zibal();

          z.init({
            merchant: process.env.REACT_APP_ZIBAL_MERCHENT,
            callbackUrl:
              process.env.REACT_APP_API_URL +
              "/payment/verify?id=" +
              py.uniq_code,
            logLevel: 2,
          });

          z.request({ amount: py.total_price, orderId: py.uniq_code })
            .then((result) => {
              console.log(result);
              pyController
                .addTrackId(py.id, result.trackId)
                .then((py2) => {
                  return res
                    .status(200)
                    .json({ status: "success", data: result, payment: py2 });
                })
                .catch((err) => {
                  return res.status(500).json({
                    status: "fail",
                    error: err,
                    type: "add track",
                  });
                });
            })
            .catch((err) => {
              console.error(err);
              return res
                .status(500)
                .json({ status: "fail", error: err, type: "zibal request" });
            });
        })
        .catch((err) => {
          return res.status(500).json({
            status: "fail",
            error: err,
            type: "add payment",
          });
        });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "fail",
        error: err,
        type: "get invoice",
      });
    });
}
