const db = require("../model");
const User = db.user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UserPanelController {
  async login(cellphone, pass) {
    try {
      const user = await User.findOne({
        where: { cellphone: cellphone },
        raw: true,
      });

      if (!user) throw new Error("User Not Found");
      console.log(user);
      // const hashed = await this.hashPassword(pass);
      // console.log(hashed);
      // console.log(user.password, pass);

      const isMatch = await bcrypt.compare(pass, user.password);

      if (!isMatch) {
        throw new Error("Incorrect password!");
      }

      // user matched!
      const secretKey = process.env.SECRET_JWT || "";
      const token = jwt.sign({ user_id: user.id.toString() }, secretKey, {
        expiresIn: "24h",
      });

      const { password, ...userWithoutPassword } = user;

      return { ...userWithoutPassword, token };
    } catch (er) {
      console.log(er.message);
      return er.message;
    }
  }

  async register({ user, cellphone, password }) {}

  hashPassword = async (password) => {
    if (password) {
      password = await bcrypt.hash(password, 8);
      return password;
    }
  };
}

export default UserPanelController;
