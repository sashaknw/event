const router = require("express").Router();

const {
  getAllVenues,
  getOneVenue,
  addVenue,
  updateVenue,
  deleteVenue,
  // eagerVenueSearch,
  // lazyVenueSearch,
} = require("../controllers/venue");

router.get("/", getAllVenues);
router.get("/:id", getOneVenue);
router.post("/", addVenue);
router.put("/:id", updateVenue);
router.delete("/:id", deleteVenue);
//router.get("/:id/movies/eager", eagerVenuesearch);
//router.get("/:id/movies/lazy", lazyVenueSearch);

module.exports = router;
