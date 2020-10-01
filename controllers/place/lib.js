const fs = require("fs")

async function listPlaces(req, res) {
    fs.readFile('places.json', (err, data) => {
        if (err) throw err;
        let places = JSON.parse(data);
        res.json(places)
    })
}

exports.listPlaces = listPlaces;