const router = require("express").Router();

const {
    getAllCities,
    getOneCity,
    createCity,
    updateCity,
    deleteCity,
    eagerCitySearch,
    lazyCitySearch,
} = require("../controllers/city");

router.get("/", getAllCities);
router.get("/:id", getOneCity);
router.post("/", createCity);
router.put("/:id", updateCity);
router.delete("/:id", deleteCity);
router.get("/:id/movies/eager", eagerCitySearch);//!!
router.get("/:id/movies/lazy", lazyCitySearch);//!!

module.exports = router;