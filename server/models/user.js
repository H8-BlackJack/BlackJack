'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class User extends Model { }

  User.init({
    name: DataTypes.STRING
  }, { sequelize });
  User.associate = function (models) {
    User.belongsTo(models.Room)
  };
  return User;
};