'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class User extends Model { }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : { msg: 'Name cannot be empty' },
        notNull : { msg: 'Name cannot be empty' }
      }
    }
  }, { sequelize });
  User.associate = function (models) {
    User.belongsTo(models.Room)
  };
  return User;
};