import { getAllServices } from "services/ristpanel";
import ServicesControllers from "../../src/backend/controllers/services.controllers";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  try {
    const x = new ServicesControllers();
    x.getServiceByType(req.query.id)
      .then((rr) => {
        res.status(200).json({ data: rr });
      })
      .catch((ee) => {
        res.status(500).json({ status: "fail", error: ee });
      });
  } catch (err) {
    res.status(500).json({ status: "fail", error: err });
  }
}
