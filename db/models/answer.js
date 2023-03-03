// 'use strict'
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({ Question }) {
      Answer.Questions = Answer.belongsTo(Question, {
        foreignKey: 'questionId',
      });
    }
  }
  Answer.init(
    {
      questionId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Questions',
          key: 'id',
        },
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Answer',
    }
  );
  return Answer;
};
