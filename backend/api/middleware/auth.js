const jwt = require("jsonwebtoken");
const User = require("../models/user");

const checkAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(404).send("Token not found");
    }

    jwt.verify(req.headers.authorization, "isasecret", async (err, result) => {
      if (err) return res.status(401).send("Token not valid");
      const user = await User.findOne({
        where: { email: result.email },
      });
      if (!user) return res.status(404).send("User not found");
      res.locals.user = user;
      next();
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkAdmin = async (req, res, next) => {
  try {
    if (res.locals.user.role !== "Admin") {
      return res.status(401).send("You're not an admin");
    } else {
      next();
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { checkAuth, checkAdmin };
