const router = require("express").Router();

const {
  getAllStyles,
  getOneStyle,
  createStyle,
  updateStyle,
  deleteStyle,
  eagerStyleSearch,
  lazyStyleSearch,
} = require("../controllers/style");

router.get("/", getAllStyles);
router.get("/:id", getOneStyle);
router.post("/", createStyle);
router.put("/:id", updateStyle);
router.delete("/:id", deleteStyle);
router.get("/:id/movies/eager", eagerStyleSearch); //!!
router.get("/:id/movies/lazy", lazyStyleSearch); //!!

module.exports = router;
