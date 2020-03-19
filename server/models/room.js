'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  
  class Room extends Model { }
  
  Room.init({
    name: DataTypes.STRING,
    UserId: DataTypes.STRING
  }, { sequelize })
    ;
  Room.associate = function(models) {
    // associations can be defined here
    Room.hasMany(models.User)
  };
  return Room;
};