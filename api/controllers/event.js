const Event = require("../models/event");

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

module.exports = {
  getAllEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  eagerEventSearch,
  lazyEventSearch,
  addEvent,
};
