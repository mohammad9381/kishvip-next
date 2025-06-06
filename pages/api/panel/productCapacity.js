import OrderController from "../../../src/backend/controllers/order.controller";

export default function handler(req, res) {
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
