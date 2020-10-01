module.exports = function (app) {
    /*
    C'est ici que l'ensemble des routes et des fonctions associées seront placées pour l'api /place
    */
   app.get('/places',function(req,res){
       console.log('test')
    fs.readFile('../places.json', (err, data) => {
      if (err) throw err;
      let places = JSON.parse(data);
      res.json(places)
    });
    
  })
    }