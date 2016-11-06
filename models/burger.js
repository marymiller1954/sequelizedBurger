

'use strict';

module.exports = function(sequelize, DataTypes){
  var burgers = sequelize.define('burgers', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: DataTypes.TIME
  }, {
    classMethods: {
      associate: function(models){
        //associations can be defined here
      }
    }
  });
  return burgers;
};