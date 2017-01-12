//module
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
//var models  = require('./models');

var app=express();
app.use(bodyParser.json());
app.use(cors());

app.use('/admin',express.static('admin'));
app.listen(process.env.PORT);

//configurez nodeadmin
var nodeadmin=require('nodeadmin');
app.use(nodeadmin(app));


//SEQUELIZE
var Sequelize = require("sequelize");
//init sequelize connexion
var sequelize = new Sequelize('traveldb', 'roxanaioana', '', {
   dialect: 'mysql',
host: '127.0.0.1',
   port: 3306
});

app.use('/admin',express.static('admin'));
app.get('/',function(req,res){
 res.redirect("/admin");
});

//definire entitati globale
var Orase = sequelize.define('orase', {
  id_oras: {
  type: Sequelize.INTEGER,
  unique:true,
  field:'id_oras'
  },
  denumire_oras:{
      type:Sequelize.STRING,
      unique:true,
      required:true,
      field:'denumire_oras'
  },
  populatie_oras:{
      type:Sequelize.INTEGER,
      unique:false,
      required:true,
      field:'populatie_oras'
  },
  temperatura_medie:{
    type:Sequelize.FLOAT,
    unique:false,
    required:true,
    field:'temperatura_medie'
  },
}, {
  timestamps: false
});


//verificare autentificare
sequelize.authenticate()
    .then(function () {
        console.log("Conectat");
    })
//    .catch(function (err) {
  //      console.log("Nu te-ai conectat");
///    })
    .done();
    
var data=[{id:1},{id:2},{id:3}];

//creaza noua resursa cu POST
app.post('/[resource_name]', function(request, response) {
response.status(201).send(request.body);
});

//citeste toate resursele cu GET
app.get('/[resource_name]', function(request, response) {
response.status(200).send(data);
});

//citeste dupa id
app.get('/[resource_name]/:id', function(request, response) {
response.status(200).send(data[0]);
});

//update cu PUT
app.put('/[resource_name]/:id', function(request, response) {
response.status(201).send(request.body);
});

//sterge dupa id
app.delete('/[resource_name]/:id', function(request, response) {
response.status(201).send('Deleted' + request.params.id);
});


//CREEAZA EFECTIV un oras
app.post('/orase', function(request,response) {
  Orase.create(request.body).then(function(orase) {
     Orase.findById(orase.id_oras).then(function(orase) {
          response.status(201).send(orase);
      });
  });
});
//citeste
app.get('/orase', function(request,response){
     /*global Orase*/
   Orase.findAll().then(function(orase){
        response.status(200).send(orase);
    });
});
//citeste dupa id
app.get('/orase/:id_oras', function(request,response){
   Orase.findById(request.params.id_oras).then(function(orase){
        if(orase) {
            response.status(200).send(orase);
        } else {
            response.status(404).send();
        }
    });
});
//update
app.put('/orase/:id_oras', function(request,response){
    Orase
        .findById(request.params.id)
        .then(function(orase){
            if(orase) {
               orase
                    .updateAttributes(request.body)
                    .then(function(){
                        response.status(200).send('updated');
                    })
                    .catch(function(error){
                        console.warn(error);
                        response.status(500).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});

// delete un oras dupa id
app.delete('/orase/:id_oras', function(req,res){
    Orase
        .findById(req.params.id)
        .then(function(orase){
            if(orase) {
                orase
                    .destroy()
                    .then(function(){
                        res.status(204).send();
                    })
                    .catch(function(error){
                        console.warn(error);
                        res.status(500).send('server error');
                    });
            } else {
                res.status(404).send();
            }
        });
});




