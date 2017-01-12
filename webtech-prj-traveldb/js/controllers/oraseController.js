'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodemessages', 'root', '')

let app = express()
app.use(express.static(__dirname + '/app'))
app.use(bodyParser.json())
app.locals.authors = []

let Orase = sequelize.define('orase', {
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
})

let Fotografii=sequelize.define('fotografii', {
  id_poza: {
  type: Sequelize.STRING,
  unique:true,
  field:'id_poza'
  },
  denumire_poza:{
     type: Sequelize.INTEGER,
  unique:true,
  field:'id_poza'
  } 
  });
    


Orase.hasMany(Fotografii, {
  foreignKey: 'id_oras'
})

Fotografii.belongsTo(Orase, {
  foreignKey: 'id_oras'
})

app.get('/create', (req, res) => {
  sequelize
    .sync({
      force: true
    })
    .then(() => {
      res.status(201).send('created')
    })
    .catch((error) => {
      console.warn(error)
      res.status(500).send('error')
    })
})

app.get('/orase', (req, res) => {
  Orase
    .findAll({
      attributes: ['id_oras', 'denumire_oras','populatie_oras' ,'temperatura_medie']
    })
    .then((orase) => {
      res.status(200).send(orase)
    })
    .catch((error) => {
      console.warn(error)
      res.status(500).send('error')
    })
})

app.get('/orase/:id', (req, res) => {
  Orase
    .find({
      attributes: ['id_oras', 'denumire_oras','populatie_oras' ,'temperatura_medie'],
      where: {
        id_oras: req.params.id
      }
    })
    .then((author) => {
      res.status(200).send(author)
    })
    .catch((error) => {
      console.warn(error)
      res.status(500).send('error')
    })
})

app.post('/orase', (req, res) => {
 Orase
    .create(req.body)
    .then(() => {
      res.status(201).send('created')
    })
    .catch((error) => {
      console.warn(error)
      res.status(500).send('error')
    })
})

app.put('/orase/:id', (req, res) => {
  Orase
    .find({
      where: {
        id: req.params.id
      }
    })
    .then((author) => {
      return author.updateAttributes(req.body)
    })
    .then(() => {
      res.status(201).send('modified')
    })
    .catch((error) => {
      console.warn(error)
      res.status(500).send('error')
    })
})

app.delete('/orase/:id', (req, res) => {
  Orase
    .find({
      where: {
        id_oras: req.params.id
      }
    })
    .then((orase) => {
      return orase.destroy()
    })
    .then(() => {
      res.status(201).send('removed')
    })
    .catch((error) => {
      console.warn(error)
      res.status(500).send('error')
    })
})

app.get('/orase/:id', (req, res) => {
 Orase
    .find({
      where: {
        id: req.params.id
      },
      
    })
    .then((orase) => {
      return orase.getMessages()
    })
    .then((messages) => {
      res.status(200).send(messages)
    })
    .catch((error) => {
      console.warn(error)
      res.status(500).send('error')
    })
})



app.post('/orase/:id', (req, res) => {
  console.warn(req.body)
  Orase
    .find({
      id: req.params.id
    })
    .then((or) => {
      let fotografii = req.body
      fotografii.id_oras = id_oras
      return Fotografii.create(fotografii)
    })
    .then(() => {
      res.status(201).send('created')
    })
    .catch((error) => {
      console.warn(error)
      res.status(500).send('error')
    })
})

/*
app.put('/authors/:id/messages/:mId', (req, res) => {
  Message
    .find({
      where: {
        id: req.params.mId
      }
    })
    .then((message) => {
      message.title = req.body.title
      message.content = req.body.content
      return message.save()
    })
    .then(() => {
      res.status(201).send('modified')
    })
    .catch((error) => {
      console.warn(error)
      res.status(500).send('error')
    })

})
*/
app.delete('/authors/:id/fotografii/:id_poza', (req, res) => {
  Fotografii
    .find({
      where: {
        id_oras: req.params.id_poza
      }
    })
    .then((message) => {
      return message.destroy()
    })
    .then(() => {
      res.status(201).send('removed')
    })
    .catch((error) => {
      console.warn(error)
      res.status(500).send('error')
    })
})

app.listen(process.env.PORT)
