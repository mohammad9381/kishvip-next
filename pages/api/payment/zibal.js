import InvoiceController from "../../../src/backend/controllers/invoice.controller";
import PaymentController from "../../../src/backend/controllers/payment.controller";

const Zibal = require("zibal");

export default function handler(req, res) {
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

          // console.log(process.env.REACT_APP_ZIBAL_API_KEY);
          z.init({
            merchant: process.env.REACT_APP_ZIBAL_MERCHENT,
            callbackUrl:
              process.env.REACT_APP_API_URL +
              "/payment/verify?id=" +
              py.uniq_code,
            logLevel: 2,
            // 0: none (default in production)
            // 1: error
            // 2: error + info (default)
          });

          z.request({ amount: py.total_price, orderId: py.uniq_code })
            .then((result) => {
              console.log(result);
              // { trackId: 1533727744287, result: 100, message: 'success', statusMessage: 'با موفقیت تایید شد.' }
              pyController
                .addTrackId(py.id, result.trackId)
                .then((py2) => {
                  return res
                    .status(200)
                    .json({ status: "success", data: result, payment: py2 });
                })
                .catch((err) => {
                  return res.status(500).json({
                    status: "success",
                    error: err,
                    type: "add track ",
                  });
                });
              // const url = result.paymentUrl;
              // return res.redirect(307, url);
            })
            .catch((err) => {
              console.error(err);
              return res
                .status(500)
                .json({ status: "success", error: err, type: "zibal request" });

              // { result: 103, message: 'authentication error', statusMessage: '{merchant} غیرفعال' }
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

  // const url = z.(1533727744287);
  // console.log(url);
}
