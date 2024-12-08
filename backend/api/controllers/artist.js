const { Op } = require("sequelize");
const Artist = require("../models/artist");

async function addArtist(req, res) {
    try {
        const artist = await Artist.create({
            name: req.body.name,
            description: req.body.description
        });
        console.log("Artist added:", artist);
    } catch (error) {
        console.error("Error adding artist:", error);
        }
    }

    // addArtist('Tanasoul', 'DJ y productor basado en Las Palmas de Gran Canaria. Fundador del sello SoulsenseRecords, evento VERTIGO y parte del duo Bangerlore');



async function getAllArtists(req, res) {
  try {
    const artists = await Artist.findAll({ paranoid: false });
    if (artists) {
      return res.status(200).json(artists);
    } else {
      return res.status(404).send("No artists found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

 //getAllArtists();


async function getOneArtist(req, res) {
  try {
    const artist = await Artist.findByPk(req.params.id);
    if (artist) {
      return res.status(200).json(artist);
    } else {
      return res.status(404).send("Artist not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}


async function updateArtist(req, res) {
  try {
    const [artistExist, artist] = await Artist.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (artistExist !== 0) {
      return res.status(200).json({ message: "Artist updated", artist: artist });
    } else {
      return res.status(404).send("Artist not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteArtist(req, res) {
  try {
    const artist = await Artist.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (artist) {
      return res.status(200).json("Artist deleted");
    } else {
      return res.status(404).send("Artist not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getArtistByName(req, res) {
  try {
    const artistName = req.query.name;
    const artist = await Artist.findAll({
      where: {
        name: {
          [Op.like]: `%${artistName}%`,
        },
      },
      attributes: ['name', 'description', 'image_path'],
    });
    if (artist.length > 0) {
      return res.status(200).json(artist);
    } else {
      return res.status(404).send("No artists found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}


module.exports = {
  getAllArtists,
  getOneArtist,
  getArtistByName,
  updateArtist,
  deleteArtist,
  addArtist,
  
  
};
