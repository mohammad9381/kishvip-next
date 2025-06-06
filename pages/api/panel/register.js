import UserPanelController from "../../../src/backend/controllers/userPanel.controller";

export default function handler(req, res) {
  try {
    const userPanellController = new UserPanelController();

    userPanellController
      .login(req.query.cellphone, req.query.password)
      .then((user) => {
        return user.token;
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
