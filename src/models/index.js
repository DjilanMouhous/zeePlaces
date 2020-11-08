const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/database.sqlite'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// ! Require models
// db.users = require("./user.model.js")(sequelize, Sequelize);
// db.events = require("./event.model.js")(sequelize, Sequelize);
// db.playlists = require("./playlist.model.js")(sequelize, Sequelize);

// ! Define relations

// ? Une playlist a un event
// ? Un event a des playlists
// db.playlists.belongsTo(db.events, {
//   foreignKey: 'fk_event_id',
//   as: 'event'
// });
// db.events.hasMany(db.playlists, {
//   foreignKey: 'fk_event_id',
//   as:'playlists'
// });

// ? Un event a un user
// ? Un user a des events
// db.events.belongsTo(db.users, {
//   foreignKey: 'fk_user_id',
//   as: 'user'
// });
// db.users.hasMany(db.events, {
//   foreignKey: 'fk_user_id',
//   as:'events'
// });

module.exports = db;