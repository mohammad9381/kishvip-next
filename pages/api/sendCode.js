import UserController from "../../src/backend/controllers/user.controller";

export default function handler(req, res) {
  var Kavenegar = require("kavenegar");
  var api = Kavenegar.KavenegarApi({
    apikey: process.env.REACT_APP_KAVE_API_KEY,
  });

  let userC = new UserController();

  userC
    .getCode(req.query.cellphone)
    .then((resp) => {
      api.VerifyLookup(
        {
          receptor: req.query.cellphone,
          token: resp,
          template: "registerverifykishvio",
        },
        function (response, status) {
          console.log(response);
          console.log(status);
          return res.status(200).json({ status: "success" });
        }
      );
    })
    .catch((err) => {
      console.log("sendcode", err);
      return res.status(400).json({ status: "fail", error: err.message });
    });
}
