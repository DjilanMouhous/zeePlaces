const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/database.sqlite'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// ! Require models
db.user = require("./user.model.js")(sequelize, Sequelize);
db.favourite = require("./favourite.model.js")(sequelize, Sequelize);
db.place = require("./place.model.js")(sequelize, Sequelize);
db.fixturePlace = require("./fixturePlace.model.js")(sequelize, Sequelize);
db.categorie = require("./categorie.model.js")(sequelize, Sequelize);
db.color = require("./color.model.js")(sequelize, Sequelize);
db.address = require("./address.model.js")(sequelize, Sequelize);
db.city = require("./city.model.js")(sequelize, Sequelize);


// ! Define relations
// ? favourite <-> user
db.favourite.belongsTo(db.user, {
  foreignKey: 'fk_user_id',
  as:'user'
});
db.user.hasMany(db.favourite, {
  foreignKey: 'fk_user_id',
  as:'favourites'
});

// ? favourite <-> place
db.favourite.belongsTo(db.place, {
  foreignKey: 'fk_place_id',
  as:'place'
});
db.place.hasMany(db.favourite, {
  foreignKey: 'fk_place_id',
  as:'favourites'
});

// ? fixturePlace <-> place
db.fixturePlace.belongsTo(db.place, {
  foreignKey: 'fk_place_id',
  as:'place'
});
db.place.hasMany(db.fixturePlace, {
  foreignKey: 'fk_place_id',
  as:'fixturePlaces'
});

// ? fixturePlace <-> categorie
db.fixturePlace.belongsTo(db.categorie, {
  foreignKey: 'fk_categorie_id',
  as:'categorie'
});
db.categorie.hasMany(db.fixturePlace, {
  foreignKey: 'fk_categorie_id',
  as:'fixturePlaces'
});

// ? categorie <-> categorie 
db.categorie.belongsTo(db.categorie, {
  foreignKey: 'fk_categorie_id',
  as:'categorie'
});
db.place.hasMany(db.categorie, {
  foreignKey: 'fk_categorie_id',
  as:'categories'
});

// ? categorie <-> color
db.categorie.belongsTo(db.color, {
  foreignKey: 'fk_color_id',
  as:'color'
});
db.color.hasMany(db.categorie, {
  foreignKey: 'fk_color_id',
  as:'categories'
});

// ? place <-> address
db.place.belongsTo(db.address, {
  foreignKey: 'fk_address_id',
  as: 'address'
});
db.address.hasOne(db.place, {
  foreignKey: 'fk_address_id',
  as:'places'
});

// ? address <-> city
db.address.belongsTo(db.city, {
  foreignKey: 'fk_city_id',
  as:'city'
});
db.city.hasMany(db.address, {
  foreignKey: 'fk_city_id',
  as:'addresses'
});

module.exports = db;