module.exports=function(sequelize,DataTypes)
{
var Tari=sequelize.define('tari',{
  id_tara:{
      type:DataTypes.INTEGER,
      unique:true,
      required:true
  },
  denumire_tara:{
      type:DataTypes.STRING,
      unique:false,
      required:true
  },
  populatie_tara:{
      type:DataTypes.INTEGER,
      unique:false,
      required:true
  },
  limba:{
    type:DataTypes.STRING,
    unique:false,
    required:true
  },
   url: {
        type: DataTypes.STRING,
        field: 'url'
      }
    },
    {
      timestamps: false,
      tableName: 'galerie_foto'
    });
  return Tari;
 }