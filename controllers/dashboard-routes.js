const router = require("express").Router();
const { BlogPosts } = require("../models");
const withAuth = require("../utils/auth");

// GET blog posts for dashboard when user is signed in
router.get("/", withAuth, async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  try {
    const dbBlogPostData = await BlogPosts.findAll({
      where: {
        user_id: req.session.user_id,
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

//Create new blog entry
router.post("/", withAuth, (req, res) => {
  BlogPosts.create({
    user_id: req.session.user_id,
    title: req.body.newTitle,
    content: req.body.newContent,
  })
    .then(() => res.redirect("/dashboard"))
    .catch((err) => res.status(500).json(err));
});

//creating route for new post button to serve up new blog post handlebars
router.get("/newpost", withAuth, (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("new-post");
});

module.exports = router;
