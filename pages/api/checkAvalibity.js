import UserController from "../../src/backend/controllers/user.controller";
import { getCheckItemAvalibality } from "services/ristpanel";

export default function handler(req, res) {
  const { TicketTypeUniqueId, SansUniqueId, LicenseUniqueId, Number } =
    req.query;

  getCheckItemAvalibality(
    TicketTypeUniqueId,
    SansUniqueId,
    LicenseUniqueId,
    Number
  )
    .then((resp) => {
      console.log(resp);
      return res.status(200).json({ status: "success", data: resp.data });
    })
    .catch((err) => {
      return res.status(500).json({ status: "fail", error: err });
    });
}
