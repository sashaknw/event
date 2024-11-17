//ejemplo del LAB



// const Movie = require("../api/models/movie");
// const User = require("../api/models/user");
// const Actor = require("../api/models/actor");
// const Country = require("../api/models/country");
// const Address = require("../api/models/address");

// //const ContactInfo = require('../models/contactInfo.js')
// // const Student = require('../models/student.js')

// // Student.hasOne(ContactInfo)
// // ContactInfo.belongsTo(Student)

// function addRelationsToModels() {
//   try {
//     Country.hasMany(User, {
//       foreignKey: "countryId",
//     });
//     User.belongsTo(Country);

//     User.hasOne(Address);
//     Address.belongsTo(User);

//     Actor.belongsToMany(Movie, {
//       through: "ActorMovies",
//       timestamps: false,
//     });
//     Movie.belongsToMany(Actor, {
//       through: "ActorMovies",
//       timestamps: false,
//     });

//     console.log("Relations added to all models");
//   } catch (error) {
//     throw error;
//   }
// }

// module.exports = addRelationsToModels;
