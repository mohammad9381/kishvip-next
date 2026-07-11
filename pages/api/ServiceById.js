import { getService } from "services/ristpanel";
import ServicesControllers from "../../src/backend/controllers/services.controllers";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const x = new ServicesControllers();
  x.getServiceByID(req.query.id)
    .then((rr) => {
      if (!rr) {
        return res.status(404).json({ status: "fail", error: "Service not found in database" });
      }
      getService(rr.serviceUniqueId)
        .then((response) => {
          res.status(200).json({ data: response.data });
        })
        .catch((err) => {
          res.status(500).json({ status: "fail", error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ status: "fail", error: err });
    });
}
