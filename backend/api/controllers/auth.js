const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const signup = async (req, res) => {
  try {
    const saltRounds = bcrypt.genSaltSync(10); 
    const hasedPassword = bcrypt.hashSync(req.body.password, parseInt(saltRounds));
    req.body.password = hasedPassword;

    const user = await User.create(req.body);
    const payload = { email: req.body.email };
    const token = jwt.sign(payload, "isasecret", { expiresIn: "1h" });
    res.status(200).json({ token, role: user.role, user: user.email });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (!user) return res.status(400).send("Error: user not found");

    const comparePass = bcrypt.compareSync(req.body.password, user.password);

    if (comparePass) {
      const payload = { email: user.email, role: user.role };
      const token = jwt.sign(payload, "isasecret", { expiresIn: "24h" });
      return res.status(200).json({ token, role: user.role });
    } else {
      return res.status(404).send("Error: Alguno de los datos no es correcto");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

const logout = async (req, res) => {
  try {
    res.locals.user = "";
    jwt.destroy(req.headers.authorization);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { signup, login, logout };
