const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comments extends Model {}

Comments.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  blog_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "blogposts",
      key: "id",
    },
  },
});

module.exports = Comments;
