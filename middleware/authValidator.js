const { body, validationResult } = require("express-validator");

const validateLogin = [
  body("email").trim().isEmail().withMessage("Please provide a valid email"),
  body("password").trim().notEmpty().withMessage("Password is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateLogin };
