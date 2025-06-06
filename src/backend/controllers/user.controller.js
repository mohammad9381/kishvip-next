const db = require("../model");
const Cellphone_code = db.cellphone_code;
const User_cellphone = db.user_cellphone;

const dotenv = require("dotenv");
dotenv.config();

class UserController {
  async getCode(cellphone) {
    const dataQuery1 = await Cellphone_code.findOne(
      {
        cellphone: cellphone,
        is_used: "0",
      },
      { raw: true }
    );
    console.log(dataQuery1);
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
      cellphone: cellphone,
      code: code,
      is_used: "0",
    });

    if (dataQuery1) {
      await Cellphone_code.destroy({
        where: {
          id: dataQuery1["id"],
        },
      });

      let userCHeck = await User_cellphone.findOne({
        cellphone: cellphone,
      });

      if (userCHeck) {
        return userCHeck;
      } else {
        let userCHeck = await User_cellphone.create({
          cellphone: cellphone,
          name: name,
        });
        return userCHeck;
      }
    } else {
      return false;
    }
  }
}
export default UserController;
