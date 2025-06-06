// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllServices } from "services/ristpanel";
import ServicesControllers from "../../src/backend/controllers/services.controllers";

export default function handler(req, res) {
  try {
    getAllServices().then((response) => {
      const x = new ServicesControllers();
      x.getServiceByType(req.query.id)
        .then((rr) => {
          res.status(200).json({ data: rr });
        })
        .catch((ee) => {
          res.status(500).json({ error: ee });
        });
    });
  } catch (err) {}
}
