const Venue = require("../models/venue");


async function addVenue(req, res) {
  try {
    const venue = await Venue.create({
      name: req.body.name,
      description: req.body.description,
    });
    console.log("Venue added:", venue);
  } catch (error) {
    console.error("Error adding venues:", error);
  }
}

async function getAllVenues(req, res) {
  try {
    const venues = await Venue.findAll({ paranoid: false });
    if (venues) {
      return res.status(200).json(venues);
    } else {
      return res.status(404).send("No venues found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}



async function getOneVenue(req, res) {
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (venue) {
      return res.status(200).json(venue);
    } else {
      return res.status(404).send("Venue not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function updateVenue(req, res) {
  try {
    const [venueExist, venue] = await Venue.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (venueExist !== 0) {
      return res.status(200).json({ message: "Venue updated", venue: venue });
    } else {
      return res.status(404).send("Venue not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteVenue(req, res) {
  try {
    const venue = await Venue.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (venue) {
      return res.status(200).json("Venue deleted");
    } else {
      return res.status(404).send("Venue not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
 
  getAllVenues,
  getOneVenue,
  updateVenue,
  deleteVenue,
  addVenue,
};
