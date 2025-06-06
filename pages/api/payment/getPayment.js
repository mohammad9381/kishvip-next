import PaymentController from "../../../src/backend/controllers/payment.controller";

export default function handler(req, res) {
  const pyCOntroller = new PaymentController();

  pyCOntroller
    .getPayment(req.query.id)
    .then((py) => {
      return res.satus(200).json({ status: "success", data: py });
    })
    .catch((err) => {
      res.status(500).json({ status: "fail", error: err });
    });
}
