const router = require("express").Router();
const { BlogPosts } = require("../models");
const withAuth = require("../utils/auth");

// GET blog posts for dashboard when user is signed in
router.get("/", withAuth, async (req, res) => {
  try {
    const dbBlogPostData = await BlogPosts.findAll({
      where: {
        username: req.session.username,
      },
    });
    // res.status(200).json(dbBlogPostData);
    const allBlogs = dbBlogPostData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      allBlogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
