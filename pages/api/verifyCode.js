import UserController from "../../src/backend/controllers/user.controller";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  var Kavenegar = require("kavenegar");
  var api = Kavenegar.KavenegarApi({
    apikey: process.env.REACT_APP_KAVE_API_KEY,
  });

  let userC = new UserController();

  userC
    .verifyCode(req.body.cellphone, req.body.code, req.body.name)
    .then((resp) => {
      console.log("resp", resp);
      if (!resp) {
        return res.status(200).json({ status: "fail" });
      } else {
        return res.status(200).json({ status: "success", user: resp });
      }
    })
    .catch((err) => {
      console.log("verifyCode", err);
      return res.status(500).json({ status: "fail", error: err.message });
    });
}
