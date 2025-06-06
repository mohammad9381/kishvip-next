import UserPanelController from "../../../src/backend/controllers/userPanel.controller";

export default function handler(req, res) {
  try {
    const userPanellController = new UserPanelController();

    userPanellController
      .login(req.query.cellphone, req.query.password)
      .then((user) => {
        if (typeof user === "string") throw new Error(user);
        return res.status(200).json({
          status: "success",
          data: user,
        });
      })
      .catch((er) => {
        return res
          .status(500)
          .json({ status: "fail", error: { type: "login", data: er } });
      });
  } catch (err) {
    return res
      .status(500)
      .json({ status: "fail", error: { data: err, type: "controller fial" } });
  }
}
