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

//GET existing post
router.get("/:id", withAuth, async (req, res) => {
  console.log(req.params.id);
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  const selectedBlog = await BlogPosts.findOne(
    // {
    //   title: req.body.title,
    //   content: req.body.content,
    // },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  console.log({
    title: selectedBlog.title,
    content: selectedBlog.content,
  });
  res.render("edit-post", {
    title: selectedBlog.title,
    content: selectedBlog.content,
  });
});

module.exports = router;
