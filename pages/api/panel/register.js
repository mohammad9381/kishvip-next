import UserPanelController from "../../../src/backend/controllers/userPanel.controller";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  try {
    const userPanelController = new UserPanelController();

    userPanelController
      .register({
        user: req.body.username,
        cellphone: req.body.cellphone,
        password: req.body.password,
      })
      .then((user) => {
        if (typeof user === "string" || !user) {
          return res.status(400).json({
            status: "fail",
            error: { type: "register", data: user || "خطا در ثبت‌نام" },
          });
        }
        return res.status(200).json({
          status: "success",
          data: user,
        });
      })
      .catch((er) => {
        return res.status(500).json({
          status: "fail",
          error: { type: "register", data: er },
        });
      });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      error: { data: err, type: "controller fail" },
    });
  }
}
