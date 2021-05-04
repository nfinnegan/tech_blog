const { Comments } = require("../models");

const commentData = [
  {
    user_id: 3,
    comment: "Insert your blog content here.",
    blog_id: 1,
  },
  {
    user_id: 2,
    comment: "Insert your blog content here.",
    blog_id: 2,
  },
  {
    user_id: 1,
    comment: "Insert your blog content here.",
    blog_id: 3,
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
