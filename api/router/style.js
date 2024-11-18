const router = require("express").Router();

const {
  getAllStyles,
  getOneStyle,
  addStyle,
  updateStyle,
  deleteStyle,
 
} = require("../controllers/style");

router.get("/", getAllStyles);
router.get("/:id/artists", eagerArtistSearchByEvent);
router.get("/:id", getOneStyle);
router.post("/", addStyle);
router.put("/:id", updateStyle);
router.delete("/:id", deleteStyle);
// router.get("/:id/movies/eager", eagerStyleSearch); //!!
// router.get("/:id/movies/lazy", lazyStyleSearch); //!!

module.exports = router;
