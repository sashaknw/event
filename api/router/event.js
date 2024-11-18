const router = require("express").Router();

const {
  getAllEvents,
  getOneEvent,
  addEvent,
  updateEvent,
  deleteEvent,
  eagerArtistSearchByEvent, //http://localhost:3000/api/event/2/artists
} = require("../controllers/event");

router.get("/", getAllEvents);
router.get("/:id/artists", eagerArtistSearchByEvent);
router.get("/:id", getOneEvent);
router.post("/", addEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);


module.exports = router;
