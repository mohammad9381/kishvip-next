import OrderController from "../../../src/backend/controllers/order.controller";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const orderController = new OrderController();

  orderController
    .checkCapacity(req.query.date_mehman, req.query.product_id)
    .then((data) => {
      return res.status(200).json({ status: "success", data: data });
    })
    .catch((er) => {
      return res.status(500).json({ status: "fail", data: er });
    });
}
