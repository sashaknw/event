const router = require("express").Router();

const {
  getAllArtists,
  getOneArtist,
  createArtist,
  updateArtist,
  deleteArtist,
  eagerArtistSearch,
  lazyArtistSearch,
} = require("../controllers/artist");

router.get("/", getAllArtists);
router.get("/:id", getOneArtist);
router.post("/", createArtist);
router.put("/:id", updateArtist);
router.delete("/:id", deleteArtist);
router.get("/:id/movies/eager", eagerArtistSearch);
router.get("/:id/movies/lazy", lazyArtistSearch);

module.exports = router;
