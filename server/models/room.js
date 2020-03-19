'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Room extends Model { }

  Room.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Name cannot null.'
        },
        notEmpty: {
          args: true,
          msg: 'Name cannot empty.'
        }
      },
    }
  }, { sequelize })
    ;
  Room.associate = function (models) {
    // associations can be defined here
    Room.hasMany(models.User)
  };
  return Room;
};