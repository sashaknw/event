const router = require("express").Router();

const {
  getAllStyles,
  getOneStyle,
  addStyle,
  updateStyle,
  deleteStyle,
  eagerArtistSearchByStyle
} = require("../controllers/style");

const { checkAuth, checkAdmin } = require("../middleware/auth");
router.get("/", getAllStyles);
router.get("/:id/artists", eagerArtistSearchByStyle); //http://localhost:3000/api/style/2/artists
router.get("/:id", getOneStyle);
router.post("/",  checkAuth, checkAdmin, addStyle,);
router.put("/:id", checkAuth, checkAdmin, updateStyle);
router.delete("/:id", checkAuth, checkAdmin,deleteStyle);


module.exports = router;
