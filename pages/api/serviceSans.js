import { getSansService } from "services/ristpanel";

export default function handler(req, res) {
  getSansService(req.query.id, req.query.licence)
    .then((response) => {
      res.status(200).json({ data: response.data });
    })
    .catch((err) => {
      console.log(err, "ee");
      res.status(200).json({ error: err });
    });
}
