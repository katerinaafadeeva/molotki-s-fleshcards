const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User }) {
      Game.User = Game.belongsTo(User, {
        foreignKey: 'userID',
        as: 'sers',
      });
    }
  }
  Game.init(
    {
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Game',
    },
  );
  return Game;
};
