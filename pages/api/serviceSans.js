import { getSansService } from "services/ristpanel";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  getSansService(req.query.id, req.query.licence)
    .then((response) => {
      res.status(200).json({ data: response.data });
    })
    .catch((err) => {
      console.log(err, "ee");
      res.status(500).json({ status: "fail", error: err });
    });
}
