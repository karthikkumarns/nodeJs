const db = require("../../models");

exports.getUsersList = async (req, res) => {
  try {
    const users = await db.User.findAll({
      attributes: ["id", "name", "email"], // Specify the attributes you want to return
    });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res
      .status(200)
      .json({ message: "Users list fetched successfully", data: users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
