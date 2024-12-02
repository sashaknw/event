const router = require("express").Router();

const {
  getAllArtists,
  getOneArtist,
  addArtist,
  updateArtist,
  deleteArtist,
  
} = require("../controllers/artist");

const { checkAuth, checkAdmin } = require("../middleware/auth");
router.get("/", getAllArtists);
router.get("/:id", getOneArtist);
router.post("/", checkAuth, checkAdmin, addArtist);
router.put("/:id", checkAuth, checkAdmin, updateArtist);
router.delete("/:id", checkAuth, checkAdmin, deleteArtist);



module.exports = router;
