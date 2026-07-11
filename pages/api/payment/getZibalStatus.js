import PaymentController from "../../../src/backend/controllers/payment.controller";

const Zibal = require("zibal");

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const pyCOntroller = new PaymentController();
  const z = new Zibal();

  pyCOntroller
    .getPaymentByUniqCode(req.query.id)
    .then((py) => {
      z.verify({
        trackId: py.track_id,
        merchant: process.env.REACT_APP_ZIBAL_MERCHENT,
      })
        .then((result) => {
          pyCOntroller
            .updatePaymentZibal(py.id, result)
            .then((updatedPayment) => {
              // ارسال SMS با اطلاعات invoice (نه payment)
              const Kavenegar = require("kavenegar");
              const api = Kavenegar.KavenegarApi({
                apikey: process.env.REACT_APP_KAVE_API_KEY,
              });

              api.VerifyLookup(
                {
                  receptor: updatedPayment.cellphone,
                  token: updatedPayment.tempBookingReference,
                  token2: updatedPayment.ticketsLink,
                  template: "kishvippayok",
                },
                function (response, status) {
                  console.log("SMS response:", response);
                  console.log("SMS status:", status);
                }
              );

              return res.status(200).json({
                status: "success",
                data: updatedPayment,
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({
                status: "fail",
                error: err,
                type: "update pay",
              });
            });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({
            status: "fail",
            error: err,
            type: "verify zibal",
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        status: "fail",
        error: err,
        type: "get payment uniq",
      });
    });
}
