import { getService } from "services/ristpanel";
import ServicesControllers from "../../src/backend/controllers/services.controllers";

export default function handler(req, res) {
  const x = new ServicesControllers();
  x.getServiceByID(req.query.id)
    .then((rr) => {
      getService(rr.serviceUniqueId)
        .then((response) => {
          res.status(200).json({ data: response.data });
        })
        .catch((err) => {
          res.status(200).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(200).json({ error: err });
    });
}
