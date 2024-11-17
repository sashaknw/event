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

module.exports = {
    addArtist
}