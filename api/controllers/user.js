
const User = require("../models/user");
const bcrypt = require("bcrypt");

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
async function updateProfile(req, res) {
  try {
   // This comes from the authentication middleware

    if (loggedInUserId !== parseInt(req.params.id) && !req.user.isAdmin) {
      return res.status(403).json({ message: "You are not authorized to update this profile" });
    }
    if(req.body.password){
      const saltRounds = bcrypt.genSaltSync(10);
    const hasedPassword = bcrypt.hashSync(
      req.body.password,
      parseInt(saltRounds)
    );
    req.body.password = hasedPassword;
    }
 
    const loggedInUserId = req.user.id; 
    const [profileExist, profile] = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });

    if (profileExist !== 0) {
      return res.status(200).json({ message: "Profile updated", profile: profile[0] }); // profile[0] because returning gives an array
    } else {
      return res.status(404).send("Profile not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
async function deleteProfile(req, res) {
  try {
    const loggedInUserId = req.user.id; // This comes from the authentication middleware

    if (loggedInUserId !== parseInt(req.params.id) && !req.user.isAdmin) {
      return res.status(403).json({ message: "You are not authorized to delete this profile" });
    }

    const profileExist = await User.destroy( {
      where: {
        id: req.params.id,
      },
    });

    if (profileExist !== 0) {
      return res.status(200).json({ message: "Profile deleted"}); 
    } else {
      return res.status(404).send("Profile not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


async function updateUser(req, res) {
  try {
        if (req.body.password) {
          const saltRounds = bcrypt.genSaltSync(10);
          const hasedPassword = bcrypt.hashSync(
            req.body.password,
            parseInt(saltRounds)
          );
          req.body.password = hasedPassword;
        }
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
};

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
  getProfile,
  getAllUsers,
  getOneUser,
  updateUser,
  updateProfile,
  deleteProfile,
  deleteUser,
  addUser,
};
