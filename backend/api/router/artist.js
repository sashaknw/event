const router = require("express").Router();

const {
  getAllArtists,
  getOneArtist,
  getArtistByName,
  addArtist,
  updateArtist,
  deleteArtist,
  
} = require("../controllers/artist");

const { checkAuth, checkAdmin } = require("../middleware/auth");
router.get("/search", getArtistByName);
router.get("/", getAllArtists);
router.get("/:id", getOneArtist);
router.put("/name/:name", checkAuth, updateArtist);
router.post("/", checkAuth, checkAdmin, addArtist);

router.delete("/:id", checkAuth, checkAdmin, deleteArtist);



module.exports = router;
