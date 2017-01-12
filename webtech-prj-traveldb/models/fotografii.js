 
 module.exports = function(sequelize, DataTypes)
 {
//definire entitate ca metaobiect, adica ca un wrapper 
var Fotografii=sequelize.define('Fotografii', {
  id_poza:{
      type:DataTypes.INTEGER,
      field:'id_poza'
  },
  denumire_poza:{
      type:DataTypes.STRING,
      field:'denumire_poza'
  },
}, {
      timestamps: false,
      tableName: 'galerie_foto'
    }),
 // return Fotografii;
//Fotografii.belongsToOrase();
Fotografii=sequelize.define('galerie_foto', {
  id_poza:{
      type:DataTypes.INTEGER,
      field:'id_poza'
  },
  denumire_poza:{
      type:DataTypes.STRING,
      field:'denumire_poza'
  },
}, {
      timestamps: false,
      tableName: 'galerie_foto'
    });

 }
 
    