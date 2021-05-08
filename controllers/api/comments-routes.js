const router = require("express").Router();
const { Comments, BlogPosts } = require("../../models");
const withAuth = require("../../utils/auth");

//get selected blog post to display once clicked from homepage
router.get("/:id", withAuth, async (req, res) => {
  const blogSelected = await BlogPosts.findOne({
    where: {
      id: req.params.id,
    },
  });

  res.render("comment", {
    title: blogSelected.title,
    content: blogSelected.content,
    date: blogSelected.createdAt,
    user: blogSelected.user_id,
  });
});

//Create new comment entry
router.post("/", withAuth, (req, res) => {
  Comments.create({
    content: req.body.commentContent,
    blog_id: req.body.id,
    user_id: req.session.user_id,
  })
    .then(() => res.status(200))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
