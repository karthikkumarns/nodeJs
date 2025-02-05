const { Op } = require("sequelize");
const db = require("../../models");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const emailExists = await db.User.findOne({
      where: { email: { [Op.iLike]: email } },
    });

    if (emailExists) {
      return res.status(400).json({ message: "email is exists" });
    } else {
      const user = await db.User.create({
        name,
        email,
        password,
      });

      return res.status(200).json({ message: "Done", data: user });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Somthing wnt wrong" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.User.findOne({
      where: { email: { [Op.iLike]: email } },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, "karthik", {
      expiresIn: "1h",
    });

    return res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
