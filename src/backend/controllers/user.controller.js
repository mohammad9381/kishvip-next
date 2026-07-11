const db = require("../model");
const Cellphone_code = db.cellphone_code;
const User_cellphone = db.user_cellphone;

class UserController {
  async getCode(cellphone) {
    const dataQuery1 = await Cellphone_code.findOne({
      where: { cellphone: cellphone, is_used: "0" },
      raw: true,
    });

    if (dataQuery1 === null) {
      let code1 = Math.floor(100000 + Math.random() * 900000);

      await Cellphone_code.create({
        cellphone: cellphone,
        code: code1,
      });
      return code1;
    } else {
      return dataQuery1["code"];
    }
  }

  async verifyCode(cellphone, code, name) {
    let dataQuery1 = await Cellphone_code.findOne({
      where: { cellphone: cellphone, code: code, is_used: "0" },
    });

    if (dataQuery1) {
      await Cellphone_code.destroy({
        where: {
          id: dataQuery1["id"],
        },
      });

      let userCheck = await User_cellphone.findOne({
        where: { cellphone: cellphone },
      });

      if (userCheck) {
        return userCheck;
      } else {
        let newUser = await User_cellphone.create({
          cellphone: cellphone,
          name: name,
        });
        return newUser;
      }
    } else {
      return false;
    }
  }
}
export default UserController;
