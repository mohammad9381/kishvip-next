import InvoiceController from "../../../src/backend/controllers/invoice.controller";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const invController = new InvoiceController();

  invController
    .getInvoiceByTicket(req.query.code)
    .then((invoice) => {
      return res.status(200).json({
        status: "success",
        data: invoice,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "fail",
        error: err,
      });
    });
}
