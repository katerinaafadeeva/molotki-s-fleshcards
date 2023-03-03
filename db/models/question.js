//usestrict

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Answer }) {
      Question.Answer = Question.hasOne(Answer, {
        foreignKey: 'questionId',
        as: 'answer',
      });
    }
  }
  Question.init(
    {
      themeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      points: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  return Question;
};
