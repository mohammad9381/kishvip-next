import InvoiceController from "../../../src/backend/controllers/invoice.controller";

export default function handler(req, res) {
  const invController = new InvoiceController();

  invController
    .getInvoiceByTicket(req.query.code)
    .then((invoice) => {
      return res.status("200").json({
        status: "success",
        data: invoice,
      });
    })
    .catch((err) => {
      return res.status("500").json({
        status: "fail",
        error: err,
      });
    });
}
