const Event = require("../models/event");
const Artist = require("../models/artist");
const { Sequelize } = require("sequelize"); // Make sure to require Sequelize for the iLike operator

// Function to add a new event
async function addEvent(req, res) {
  try {
    const event = await Event.create({
      name: req.body.name,
      description: req.body.description,
    });
    console.log("Event added:", event);
    res.status(201).json(event); // Send a response with the created event
  } catch (error) {
    console.error("Error adding events:", error);
    res.status(500).send(error.message);
  }
}

// Function to get all events
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

// Function to get one event by its ID
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

// Function to update an event by its ID
async function updateEvent(req, res) {
  try {
    const [eventExist, event] = await Event.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (eventExist !== 0) {
      return res.status(200).json({ message: "Event updated", event: event });
    } else {
      return res.status(404).send("Event not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// Function to delete an event by its ID
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

// Function to search events by name
async function searchEventByName(req, res) {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: "Search term is required" });
    }

    // Use the 'LIKE' operator for MySQL instead of 'ILIKE'
    const events = await Event.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${name}%`, // Use 'LIKE' for MySQL
        },
      },
    });

    if (events.length === 0) {
      return res
        .status(404)
        .json({ message: "No events found matching that name" });
    }

    return res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events by name:", error);
    return res.status(500).send(error.message);
  }
}

// Function to fetch artists associated with a specific event by event ID
async function eagerArtistSearchByEvent(req, res) {
  try {
    const eventId = req.params.id;
    console.log("Fetching artists for Event ID:", eventId);

    if (!eventId) {
      return res.status(400).json({ message: "Event ID is required" });
    }

    const event = await Event.findByPk(eventId); // Fetch the event by its ID
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Eagerly load the artists associated with this event
    const artists = await Artist.findAll({
      include: [
        {
          model: Event,
          where: { id: eventId }, // Ensure the artist is linked to this specific event
          attributes: ["name"], // Only include the event name
          through: { attributes: [] }, // Don't return attributes from the join table
        },
      ],
    });

    if (artists.length === 0) {
      return res
        .status(404)
        .json({ message: "No artists found for this event" });
    }

    return res.status(200).json({
      artists: artists,
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
  searchEventByName,
  eagerArtistSearchByEvent, // Export the new eager artist search function
};
