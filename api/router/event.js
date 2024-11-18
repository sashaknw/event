const router = require("express").Router();

const {
  getAllEvents,
  getOneEvnt,
  createEvnt,
  updateEvnt,
  deleteEvnt,
  eagerEvntSearch,
  lazyEvntSearch,
} = require("../controllers/event");

router.get("/", getAllEvents);
router.get("/:id", getOneEvent);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.get("/:id/movies/eager", eagerEventSearch); //!!
router.get("/:id/movies/lazy", lazyEventSearch); //!!

module.exports = router;
