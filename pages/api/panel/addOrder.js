import OrderController from "../../../src/backend/controllers/order.controller";

export default function handler(req, res) {
  const orderController = new OrderController();
  console.log("1", req.body);
  orderController
    .createOrder(JSON.parse(req.body))
    .then((order) => {
      return res.status(200).json({ status: "success", data: order });
    })
    .catch((err) => {
      return res.status(500).json({ status: "fail", data: err });
    });
}
