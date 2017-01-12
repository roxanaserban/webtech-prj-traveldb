//'use strict'

module.exports = function(sequelize, DataTypes)
{

//definire entitate ca metaobiect, adica ca un wrapper 
var Orase=sequelize.define('Orase', {
    id_oras:{
      type:DataTypes.INTEGER,
      unique:true,
      required:true,
      field:'id_oras'
  },
  denumire_oras:{
      type:DataTypes.STRING,
      unique:false,
      required:true,
      field:'denumire_oras'
  },
  populatie_oras:{
      type:DataTypes.INTEGER,
      unique:false,
      required:true,
      field:'populatie_oras'
  },
  temperatura_medie:{
    type:DataTypes.FLOAT,
    unique:false,
    required:true,
    field:'temperatura_medie'
  },
  url: {
        type: DataTypes.STRING,
        field: 'url'
      }
    }, {
      timestamps: false,
      tableName: 'orase'
    }),
  //definire alta entitate
  Fotografii=sequelize.define('galerie_foto', {
  id_poza:{
      type:DataTypes.INTEGER,
      unique:true,
      required:true,
      field:'id_poza'
  },
  denumire_poza:{
      type:DataTypes.STRING,
      unique:false,
      required:true,
      field:'denumire_poza'
  },
}, {
      timestamps: false,
      tableName: 'galerie_foto'
    });
    Orase.hasMany(Fotografii);
  //  return Orase;
  //  return Fotografii;
  // Fotografii.belongsTo(Orase);
 
  
 }    //inchid model
   
  
