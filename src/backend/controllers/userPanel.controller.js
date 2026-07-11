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

      if (!user) throw new Error("کاربری با این شماره یافت نشد");

      const isMatch = await bcrypt.compare(pass, user.password);

      if (!isMatch) {
        throw new Error("رمز عبور اشتباه است");
      }

      const secretKey = process.env.SECRET_JWT || "";
      const token = jwt.sign({ user_id: user.id.toString() }, secretKey, {
        expiresIn: "24h",
      });

      const { password, ...userWithoutPassword } = user;

      return { ...userWithoutPassword, token };
    } catch (er) {
      console.log(er.message);
      throw er;
    }
  }

  async register({ user, cellphone, password }) {
    try {
      // بررسی تکراری نبودن شماره
      const existing = await User.findOne({
        where: { cellphone: cellphone },
      });
      if (existing) {
        throw new Error("این شماره موبایل قبلاً ثبت شده است");
      }

      const hashedPassword = await bcrypt.hash(password, 8);

      const newUser = await User.create({
        username: user || cellphone,
        cellphone: cellphone,
        password: hashedPassword,
        role: "SuperUser",
      });

      const secretKey = process.env.SECRET_JWT || "";
      const token = jwt.sign(
        { user_id: newUser.id.toString() },
        secretKey,
        { expiresIn: "24h" }
      );

      const userData = newUser.get({ plain: true });
      const { password: _, ...userWithoutPassword } = userData;

      return { ...userWithoutPassword, token };
    } catch (er) {
      console.log(er.message);
      throw er;
    }
  }

  hashPassword = async (password) => {
    if (password) {
      password = await bcrypt.hash(password, 8);
      return password;
    }
  };
}

export default UserPanelController;
