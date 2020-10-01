const place = require('./place/lib.js');

module.exports = function (app) {
    app.get('/listPlaces', place.listPlaces);
}