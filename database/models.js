const Artist = require("../api/models/artist");
const User = require("../api/models/user");
const City = require("../api/models/city");
const Venue = require("../api/models/venue");
const Event = require("../api/models/event");
const Style = require("../api/models/style");

   function addRelationsToModels() {
    try {
     City.hasMany(Venue);
     Venue.belongsTo(City, {foreignKey: 'CityId'}) ;

     Venue.hasOne(Event);
     Event.belongsTo(Venue, {foreignKey: 'VenueId'});

      Artist.belongsToMany(Event, {
         through: "ArtistEvent",
         timestamps: false,
        });
      
      Artist.belongsToMany(Style, {
         through: "ArtistStyle",
         timestamps: false,
        });

    console.log("Relations added to all models");
  } catch (error) {
    throw error;
  }
}

module.exports = addRelationsToModels;

