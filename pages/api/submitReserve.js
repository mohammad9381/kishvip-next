import InvoiceController from "../../src/backend/controllers/invoice.controller";
import { setTempBooking } from "services/ristpanel";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const {
    fullname,
    cellphone,
    licenseUniqueId,
    sansUniqueId,
    ticketTypeUniqueId,
    number,
    price,
    serviceUniqueId,
  } = req.body;

  const x = new InvoiceController();
  x.saveInvoice(
    fullname,
    cellphone,
    licenseUniqueId,
    sansUniqueId,
    ticketTypeUniqueId,
    number,
    price,
    serviceUniqueId
  )
    .then((id) => {
      setTempBooking(
        fullname,
        cellphone,
        id,
        licenseUniqueId,
        sansUniqueId,
        ticketTypeUniqueId,
        number
      )
        .then((resp) => {
          console.log("resp", resp);
          const invoice = x
            .setTempInvoice(id, resp.data)
            .then((resp2) => {
              return res.status(200).json({ status: "success", data: resp2 });
            })
            .catch((err) => {
              return res.status(500).json({ status: "fail", error: err });
            });
        })
        .catch((err) => {
          return res.status(500).json({ status: "fail", error: err });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ status: "fail", error: err });
    });
}
