const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  addUser,
  updateUser,
  deleteUser
} = require("../controllers/user");

const { checkAuth, checkAdmin } = require("../middleware/auth");
router.get("/", checkAuth, checkAdmin, getAllUsers);
router.get("/:id", checkAuth, checkAdmin, getOneUser);

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


module.exports = router;
