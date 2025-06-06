import PaymentController from "../../../src/backend/controllers/payment.controller";

const Zibal = require("zibal");

export default function handler(req, res) {
  const pyCOntroller = new PaymentController();
  const z = new Zibal();

  pyCOntroller
    .getPaymentByUniqCode(req.query.id)
    .then((py) => {
      // z.init({
      //   merchant: process.env.REACT_APP_ZIBAL_MERCHENT,
      //   callbackUrl:
      //     process.env.REACT_APP_API_URL + "/payment/verify?id=" + py.uniq_code,
      //   logLevel: 2,
      //   // 0: none (default in production)
      //   // 1: error
      //   // 2: error + info (default)
      // });
      console.log("112", py.track_id);
      z.verify({
        trackId: py.track_id,
        merchant: process.env.REACT_APP_ZIBAL_MERCHENT,
      })
        .then((result) => {
          // console.log(result);
          // { paidAt: '2018-03-25T23:43:01.053000', amount: 1600, result: 100, status: 1, message : 'success', statusMessage: 'با موفقیت تایید شد.' }
          pyCOntroller
            .updatePaymentZibal(py.id, result)
            .then(async (res33) => {
              var Kavenegar = require("kavenegar");
              var api = Kavenegar.KavenegarApi({
                apikey: process.env.REACT_APP_KAVE_API_KEY,
              });

              await api.VerifyLookup(
                {
                  receptor: res33.cellphone,
                  token: res33.tempBookingReference,
                  token2: res33.ticketsLink,
                  template: "kishvippayok",
                },
                function (response, status) {
                  console.log(response);
                  console.log(status);
                  return res.status(200).json({ status: "success" });
                }
              );

              return res.status(200).json({ status: "success", data: res33 });
            })
            .catch((err) => {
              console.log(err);
              res
                .status(404)
                .json({ status: "fail", error: err, type: "update pay" });
            });
        })
        .catch((err) => {
          console.error(err);
          res
            .status(404)
            .json({ status: "fail", error: err, type: "verify zibal" });

          // { result: 103, message: 'authentication error', statusMessage: '{merchant} غیرفعال' }
        });
    })
    .catch((err) => {
      res
        .status(404)
        .json({ status: "fail", error: err, type: "get payment uniq" });
    });
}
