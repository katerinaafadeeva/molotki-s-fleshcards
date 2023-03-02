'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({ Question }) {
      Answer.Question = Answer.belongsTo(Question, {
        model: 'questionId',
      });
    }
  }
  Answer.init(
    {
      questionsId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Questions',
          key: 'id',
        },
      },
      answers: {
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
