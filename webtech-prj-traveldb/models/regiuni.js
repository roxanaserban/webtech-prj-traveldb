
module.exports = function(sequelize, DataTypes) {
   
//definire entitate ca un metaobiect(adica un fel de wrraper)
var Regiuni = sequelize.define('regiune', {
  id_regiune:{
      type:DataTypes.Int8Array,
      unique:true,
      required:true
  },
  denumire_regiune:{
      type:DataTypes.STRING,
      unique:false,
      required:true
  },
  clima_regiune:{
      type:DataTypes.STRING,
      unique:false,
      required:true
  },
  url: {
        type: DataTypes.STRING,
        field: 'url'
      }
    }, {
      timestamps: false,
      tableName: 'regiuni_europa'
    }); //cu ; daca nu mai definesc alte modele/entitati
   return Regiuni; 
}
  
    
   
   //  Tari.belongsToRegiuni();
   //  Orase.belongsToTari();
     //Fotografii.belongsToOrase();
  //   return Regiuni,Tari,Orase;
  
 // return Orase;
 // } //inchid modelul
/*
var Orase= sequelize.define('Orase', {
  id_oras:{
      type:DataTypes.INTEGER,
      unique:true,
      required:true
  },
  denumire_oras:{
      type:DataTypes.STRING,
      unique:false,
      required:true
  },
  populatie_oras:{
      type:DataTypes.INTEGER,
      unique:false,
      required:true
  },
  temperatura_medie:{
    type:DataTypes.FLOAT,
    unique:false,
    required:true
  },
  url: {
        type: DataTypes.STRING,
        field: 'url'
      }
    }, {
      timestamps: false,
      tableName: 'orase'
    });
    
    return Orase;
*/

 // } //inchid modelul

