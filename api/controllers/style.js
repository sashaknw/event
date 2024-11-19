const Style = require("../models/style");
const Artist = require("../models/artist");

async function addStyle(req, res) {
  try {
    const style = await Style.create({
      name: req.body.name,
      description: req.body.description,
    });
    console.log("Style added:", style);
  } catch (error) {
    console.error("Error adding styles:", error);
  }
}

async function getAllStyles(req, res) {
  try {
    const styles = await Style.findAll({ paranoid: false });
    if (styles) {
      return res.status(200).json(styles);
    } else {
      return res.status(404).send("No styles found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}


async function getOneStyle(req, res) {
  try {
    const style = await Style.findByPk(req.params.id);
    if (style) {
      return res.status(200).json(style);
    } else {
      return res.status(404).send("Style not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateStyle(req, res) {
  try {
    const [styleExist, style] = await Style.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (styleExist !== 0) {
      return res.status(200).json({ message: "Style updated", style: style });
    } else {
      return res.status(404).send("Style not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteStyle(req, res) {
  try {
    const style = await Style.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (style) {
      return res.status(200).json("Style deleted");
    } else {
      return res.status(404).send("Style not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

//falta testear esta:
async function eagerArtistSearchByStyle(req, res) {
  try {
    const styleId = req.params.id;
    console.log("Fetching artists for Style ID:", styleId);

    if (!styleId) {
      return res.status(400).json({ message: "Style ID is required" });
    }

    const style = await Style.findByPk(styleId);
    if (!style) {
      return res.status(404).json({ message: "Style not found" });
    }

    const artists = await Artist.findAll({
      include: [
        {
          model: Style,
          where: { id: styleId },
          attributes: ["name"],
          through: { attributes: [] }, //para q no salgan los atributos de la tabla intermedia
        },
      ],
    });

    if (artists.length === 0) {
      return res
        .status(404)
        .json({ message: "No artists found for this style" });
    }

    return res.status(200).json({
      artists: artists,
    });
  } catch (error) {
    console.error("Error fetching artists for style:", error);
    return res.status(500).send(error.message);
  }
}


module.exports = {
  getAllStyles,
  getOneStyle,
  addStyle,
  updateStyle,
  deleteStyle,
  eagerArtistSearchByStyle,
};
