export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  res.status(200).json({ name: "KishVIP API", version: "0.0.10" });
}
