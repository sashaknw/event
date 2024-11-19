const router = require("express").Router();

const {
  getAllVenues,
  getOneVenue,
  addVenue,
  updateVenue,
  deleteVenue,
 
} = require("../controllers/venue");
const { checkAuth, checkAdmin } = require("../middleware/auth");
router.get("/", getAllVenues);
router.get("/:id", getOneVenue);
router.post("/", checkAuth, checkAdmin, addVenue);
router.put("/:id", checkAuth, checkAdmin, updateVenue);
router.delete("/:id", checkAuth, checkAdmin, deleteVenue);

module.exports = router;
