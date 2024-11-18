const City = require("../models/city");

async function addCity(req, res) {
  try {
    const city = await City.create({
      name: req.body.name,
      description: req.body.description,
    });
    console.log("City added:", cities);
  } catch (error) {
    console.error("Error adding city:", error);
  }
}

async function getAllCities(req, res) {
  try {
    const cities = await City.findAll({ paranoid: false });
    if (cities) {
      return res.status(200).json(cities);
    } else {
      return res.status(404).send("No cities found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//getAllCities();

async function getOneCity(req, res) {
  try {
    const city = await City.findByPk(req.params.id);
    if (city) {
      return res.status(200).json(city);
    } else {
      return res.status(404).send("Cities not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//getOneCity();

async function updateCity(req, res) {
  try {
    const [cityExist, city] = await City.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (cityExist !== 0) {
      return res.status(200).json({ message: "City updated", city: city });
    } else {
      return res.status(404).send("City not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

//updateCity();

async function deleteCity(req, res) {
  try {
    const city = await City.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (city) {
      return res.status(200).json("City deleted");
    } else {
      return res.status(404).send("City not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

//deleteArtist();

module.exports = {
  getAllCities,
  getOneCity,
  updateCity,
  deleteCity,
};
