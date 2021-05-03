//import Models
const User = require("./User");
const Comments = require("./Comments");
const BlogPosts = require("./Blogposts");

//blog posts belong to users
BlogPosts.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//users have many blog posts
User.hasMany(BlogPosts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//users have many comments
User.hasMany(Comments, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//comments belong to Users
Comments.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//comments belong to posts
Comments.belongsTo(BlogPosts, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

//blog posts have many comments (through Users)
BlogPosts.hasMany(Comments, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Comments,
  BlogPosts,
};
