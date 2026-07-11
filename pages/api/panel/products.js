import ProductController from "../../../src/backend/controllers/product.controller";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  try {
    const productController = new ProductController();

    productController
      .getAll()
      .then((products) => {
        return res.status(200).json({ status: "success", data: products });
      })
      .catch((err) => {
        return res.status(500).json({ status: "fail", data: err });
      });
  } catch (er) {
    return res.status(500).json({ status: "fail", data: er });
  }
}
