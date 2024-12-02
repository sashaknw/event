const router = require("express").Router();

const {
  getAllEvents,
  getOneEvent,
  addEvent,
  updateEvent,
  deleteEvent,
  eagerArtistSearchByEvent, //http://localhost:3000/api/event/2/artists
} = require("../controllers/event");

const { checkAuth, checkAdmin } = require("../middleware/auth");
router.get("/", getAllEvents);
router.get("/:id/artists", eagerArtistSearchByEvent);
router.get("/:id", getOneEvent);
router.post("/", checkAuth, checkAdmin, addEvent);
router.put("/:id", checkAuth, checkAdmin, updateEvent);
router.delete("/:id",checkAuth, checkAdmin,  deleteEvent);


module.exports = router;
