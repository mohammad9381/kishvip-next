import { getAllServices } from "services/ristpanel";
import ServicesControllers from "../../src/backend/controllers/services.controllers";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  getAllServices()
    .then((response) => {
      const x = new ServicesControllers();
      x.insertDatabase(response.data)
        .then((res2) => {
          res.status(200).json({ data: res2 });
        })
        .catch((err) => {
          res.status(500).json({ status: "fail", error: err });
        });
    })
    .catch((err) => {
      console.log(err, "ee");
      res.status(500).json({ status: "fail", error: err });
    });
}
