import UserPanelController from "../../../src/backend/controllers/userPanel.controller";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  try {
    const userPanelController = new UserPanelController();

    userPanelController
      .login(req.body.cellphone, req.body.password)
      .then((user) => {
        if (typeof user === "string") {
          throw new Error(user);
        }
        return res.status(200).json({
          status: "success",
          data: user,
        });
      })
      .catch((er) => {
        return res
          .status(401)
          .json({ status: "fail", error: { type: "login", data: er.message || er } });
      });
  } catch (err) {
    return res
      .status(500)
      .json({ status: "fail", error: { data: err, type: "controller fail" } });
  }
}
