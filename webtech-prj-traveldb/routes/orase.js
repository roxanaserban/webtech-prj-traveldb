
var models  = require('../models');
var express = require('express');
var router  = express.Router();

var Orase = models.Orase;

// create un oras
router.post('/orase', function(request,response) {
  Orase.create(request.body).then(function(oras) {
      Orase.findById(oras.id_oras).then(function(oras) {
          response.status(201).send('created');
      });
  });
});

// returns toate orasele
router.get('/orase', function(request,response){
     /*global Orase*/
    Orase.findAll().then(function(orase){
        response.status(200).send(orase);
    });
});

// returns un oras by id
router.get('/orase/:id_oras', function(request,response){
    Orase.findById(request.params.id_oras).then(function(orase){
        if(orase) {
            response.status(200).send(orase);
        } else {
            response.status(404).send();
        }
    });
});

// update un oras by id
router.put('/orase/:id_oras', function(request,response){
    Orase
        .findById(request.params.id_oras)
        .then(function(orase){
            if(orase) {
                orase
                    .updateAttributes(request.body)
                    .then(function(){
                        response.status(202).send('updated');
                    })
                    .catch(function(error){
                        console.warn(error);
                        response.status(400).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});

// delete un oras by id
router.delete('/orase/:id_oras', function(req,res){
    Orase
        .findById(req.params.id_oras)
        .then(function(orase){
            if(orase) {
                orase
                    .destroy()
                    .then(function(){
                        res.status(204).send();
                    })
                    .catch(function(error){
                        console.warn(error);
                        res.status(400).send('server error');
                    });
            } else {
                res.status(404).send();
            }
        });
});




module.exports = router;

