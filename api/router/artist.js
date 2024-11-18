const router = require("express").Router();

const {
  getAllArtists,
  getOneArtist,
  addArtist,
  updateArtist,
  deleteArtist,
  
} = require("../controllers/artist");


router.get("/", getAllArtists);
router.get("/:id", getOneArtist);
router.post("/", addArtist);
router.put("/:id", updateArtist);
router.delete("/:id", deleteArtist);



module.exports = router;
