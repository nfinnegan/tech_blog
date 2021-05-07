const router = require("express").Router();
const { BlogPosts } = require("../../models");
const withAuth = require("../../utils/auth");

//GET existing blog post

router.get("/:id", withAuth, async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  const selectedBlog = await BlogPosts.findOne({
    where: {
      id: req.params.id,
    },
  });

  res.render("edit-post", {
    title: selectedBlog.title,
    content: selectedBlog.content,
  });
});

//Update existing blog post
router.put("/:id", withAuth, async (req, res) => {
  console.log(req.body.updatedTitle, req.body.updatedContent);
  BlogPosts.update(
    {
      title: req.body.updatedTitle,
      content: req.body.updatedContent,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).json(err));
});

// Delete existing blog post
router.delete("/:id", withAuth, async (req, res) => {
  // delete a category by its `id` value
  console.log(req.params.id);
  try {
    BlogPosts.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Successfully deleted post!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
