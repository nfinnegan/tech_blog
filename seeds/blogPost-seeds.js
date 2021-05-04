const { BlogPosts } = require("../models");

const blogData = [
  {
    title: "Cookies",
    content:
      "Insert your blog content here.Insert your blog content here.Insert your blog content here.",
    user_id: 1,
  },
  {
    title: "ORM",
    content:
      "Insert your blog content here.Insert your blog content here.Insert your blog content here.",
    user_id: 2,
  },
  {
    title: "MVC",
    content:
      "Insert your blog content here.Insert your blog content here.Insert your blog content here.",
    user_id: 3,
  },
];

const seedBlogs = () => BlogPosts.bulkCreate(blogData);

module.exports = seedBlogs;
