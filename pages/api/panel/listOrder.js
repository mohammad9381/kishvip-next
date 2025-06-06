import OrderController from "../../../src/backend/controllers/order.controller";

export default function handler(req, res) {
  const orderController = new OrderController();

  orderController
    .getOrders(req.query.product_id, req.query.date_mehman)
    .then((orders) => {
      return res.status(200).json({ status: "success", data: orders });
    })
    .catch((err) => {
      return res.status(500).json({ status: "fail", data: err });
    });
}
