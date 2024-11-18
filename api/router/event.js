const router = require("express").Router();

const {
  getAllEvents,
  getOneEvent,
  addEvent,
  updateEvent,
  deleteEvent,
  eagerArtistSearch,
} = require("../controllers/event");

router.get("/", getAllEvents);
router.get("/artists/:id", eagerArtistSearch);
router.get("/:id", getOneEvent);
router.post("/", addEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);


module.exports = router;
