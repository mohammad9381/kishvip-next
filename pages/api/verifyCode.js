import UserController from "../../src/backend/controllers/user.controller";

export default function handler(req, res) {
  var Kavenegar = require("kavenegar");
  var api = Kavenegar.KavenegarApi({
    apikey: "6B6443754C57643041657130494D307837737052583632766741377148753669",
  });

  let userC = new UserController();

  console.log(req.query);
  userC
    .verifyCode(req.query.cellphone, req.query.code, req.query.name)
    .then((resp) => {
      console.log("resp", resp);
      if (!resp) {
        return res.status(200).json({ status: "fail" });
      } else {
        return res.status(200).json({ status: "success", user: resp });
      }
    })
    .catch((err) => {
      console.log("sendcode", err);
    });
}
