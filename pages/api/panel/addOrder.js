import OrderController from "../../../src/backend/controllers/order.controller";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const orderController = new OrderController();
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    orderController
      .createOrder(body)
      .then((order) => {
        return res.status(200).json({ status: "success", data: order });
      })
      .catch((err) => {
        return res.status(500).json({ status: "fail", data: err });
      });
  } catch (err) {
    return res.status(400).json({ status: "fail", error: "Invalid JSON body" });
  }
}
