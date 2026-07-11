import PaymentController from "../../../src/backend/controllers/payment.controller";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const pyCOntroller = new PaymentController();

  pyCOntroller
    .getPayment(req.query.id)
    .then((py) => {
      return res.status(200).json({ status: "success", data: py });
    })
    .catch((err) => {
      res.status(500).json({ status: "fail", error: err });
    });
}
