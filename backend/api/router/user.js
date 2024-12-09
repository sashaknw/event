const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  addUser,
  addFavoriteStyle,
  updateUser,
  updateProfile,
  deleteUser,
  getProfile,
  deleteProfile
} = require("../controllers/user");

const { checkAuth, checkAdmin } = require("../middleware/auth");
router.get("/", checkAuth, checkAdmin, getAllUsers);
router.get("/:id", getOneUser);
router.get("/profile", checkAuth, getProfile);
router.post("/", addUser);
router.post("/profile/styles", checkAuth, addFavoriteStyle);
router.put("/:id", checkAuth, checkAdmin, updateUser);
router.put("/profile/:id", checkAuth, updateProfile);
router.delete("/:id", checkAuth, checkAdmin, deleteUser);
router.delete("/profile/:id", checkAuth, deleteProfile);


module.exports = router;
  