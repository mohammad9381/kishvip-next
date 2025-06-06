import { getAllServices } from "services/ristpanel";
import ServicesControllers from "../../src/backend/controllers/services.controllers";

export default function handler(req, res) {
  getAllServices()
    .then((response) => {
      const x = new ServicesControllers();
      x.insertDatabase(response.data)
        .then((res2) => {
          res.status(200).json({ data: res2 });
        })
        .catch((err) => {});
    })
    .catch((err) => {
      console.log(err, "ee");
      res.status(200).json({ error: err });
    });
}
