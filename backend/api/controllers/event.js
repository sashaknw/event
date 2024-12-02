const Event = require("../models/event");
const Artist = require("../models/artist");


async function addEvent(req, res) {
  try {
    const event = await Event.create({
      name: req.body.name,
      description: req.body.description,
    });
    console.log("Event added:", event);
  } catch (error) {
    console.error("Error adding events:", error);
  }
}


async function getAllEvents(req, res) {
  try {
    const events = await Event.findAll({ paranoid: false });
    if (events) {
      return res.status(200).json(events);
    } else {
      return res.status(404).send("No events found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//getAllEvents();

async function getOneEvent(req, res) {
  try {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      return res.status(200).json(event);
    } else {
      return res.status(404).send("Event not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateEvent(req, res) {
  try {
    const [eventExist, event] = await Event.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (eventExist !== 0) {
      return res
        .status(200)
        .json({ message: "Event updated", event: event });
    } else {
      return res.status(404).send("Event not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteEvent(req, res) {
  try {
    const event = await Event.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (event) {
      return res.status(200).json("Event deleted");
    } else {
      return res.status(404).send("Event not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// async function eagerArtistSearch(req, res) {
//   try {
//     console.log("Fetching artist with ID:", req.params.id);
//     if (!req.params.id) {
//       return res.status(400).json({ message: "Artist ID is required" });
//     }
//     const artist = await Artist.findOne({
//       where: {
//         id: req.params.id,
//       },
//       include: [
//         { model: Event, attributes: ["name"], through: { attributes: [] } },
//       ],
//     });
//     if (!artist) {
//       return res.status(404).json({ message: "Artist not found" });
//     }

//     return res.status(200).json({ message: "Artist found", artist: artist });
//   } catch (error) {
//     console.error("Error fetching artist:", error);
//     return res.status(500).send(error.message);
//   }
// }


async function eagerArtistSearchByEvent(req, res) {
  try {
    const eventId = req.params.id; 
    console.log("Fetching artists for Event ID:", eventId);

    if (!eventId) {
      return res.status(400).json({ message: "Event ID is required" });
    }
    
    const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const artists = await Artist.findAll({
      include: [
        {
          model: Event,
          where: { id: eventId }, 
          attributes: ["name"], 
          through: { attributes: [] } //para q no salgan los atributos de la tabla intermedia
        }
      ]
    });

    if (artists.length === 0) {
      return res.status(404).json({ message: "No artists found for this event" });
    }

    return res.status(200).json({
      artists: artists
    });
  } catch (error) {
    console.error("Error fetching artists for event:", error);
    return res.status(500).send(error.message);
  }
}


module.exports = {
  getAllEvents,
  getOneEvent,
  updateEvent,
  deleteEvent,
  addEvent,
  eagerArtistSearchByEvent,
};
