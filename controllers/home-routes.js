const router = require("express").Router();
const { BlogPosts, User } = require("../models");

// GET all Blog Posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbBlogPostData = await BlogPosts.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    // res.status(200).json(dbBlogPostData);
    const allBlogs = dbBlogPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      allBlogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
