
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Answer }) {
      Question.Answers = Question.hasOne(Answer, {
        foreignKey: 'questionId',
        as: 'answers',
      });
    }
  }
  Question.init(
    {
      themesId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
      },
      questions: {
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
    }
  );
  return Question;
};
