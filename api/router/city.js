const router = require("express").Router();

const {
    getAllCities,
    getOneCity,
    getEventsByCity,
    addCity,
    updateCity,
    deleteCity,
   
} = require("../controllers/city");
const { checkAuth, checkAdmin } = require("../middleware/auth");

router.get("/", getAllCities);
router.get("/:id", getOneCity);
router.get("/:id/events", getEventsByCity);
router.post("/", checkAuth, checkAdmin, addCity);
router.put("/:id", checkAuth, checkAdmin,updateCity);
router.delete("/:id", checkAuth, checkAdmin,  deleteCity);


module.exports = router;