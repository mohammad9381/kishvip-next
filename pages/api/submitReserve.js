import InvoiceController from "../../src/backend/controllers/invoice.controller";
import { setTempBooking } from "services/ristpanel";

export default function handler(req, res) {
  const {
    fullname,
    cellphone,
    licenseUniqueId,
    sansUniqueId,
    ticketTypeUniqueId,
    number,
    price,
    serviceUniqueId,
  } = req.query;

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
