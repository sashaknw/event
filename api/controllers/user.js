
const { User } = require("../models/user");

async function addUser(req, res) {
  try {
    const user = await User.create({
      name: req.body.name,
      description: req.body.description,
    });
    console.log("User added:", user);
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll({ paranoid: false });
    if (users) {
      return res.status(200).json(users);
    } else {
      return res.status(404).send("No users found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}
const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(res.locals.user.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(501).send(error);
  }
};
async function updateUser(req, res) {
  try {
    const [userExist, user] = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (userExist !== 0) {
      return res.status(200).json({ message: "User updated", user: user });
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      return res.status(200).json("User deleted");
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  addUser,
};
