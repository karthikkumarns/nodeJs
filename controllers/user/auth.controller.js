const { where, Op } = require("sequelize");
const db = require("../../models");

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
