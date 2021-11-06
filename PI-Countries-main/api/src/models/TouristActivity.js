const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define('activity', {
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
      //RELACIONADA A QUE?
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      get(){
        return this.getDataValue('difficulty')
      },
      validate:{
        min:1,
        max:5,
        isEven(value){
          if(value % 2 !== 0){
            throw new Error('Only even values')
          }
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // MINUTOS? HORAS? DIAS?
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
    },

  });
};