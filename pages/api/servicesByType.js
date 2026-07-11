import ServicesControllers from "../../src/backend/controllers/services.controllers";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const x = new ServicesControllers();

  x.getServiceByType(req.query.id)
    .then((services) => {
      res.status(200).json({ data: services });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "fail", error: err });
    });
}
