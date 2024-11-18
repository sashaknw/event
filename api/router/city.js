const router = require("express").Router();

const {
    getAllCities,
    getOneCity,
    addCity,
    updateCity,
    deleteCity,
   
} = require("../controllers/city");

router.get("/", getAllCities);
router.get("/:id", getOneCity);
router.post("/", addCity);
router.put("/:id", updateCity);
router.delete("/:id", deleteCity);


module.exports = router;