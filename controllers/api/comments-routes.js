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
    comment: req.body.commentContent,
    blog_id: req.body.id,
    user_id: req.session.user_id,
  })

    // .then(() => res.sendStatus(200))
    .then(() => res.redirect("comment"))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get comments
router.get('/:id',withAuth, (req,res)=>{
  Comments.findAll({
    where: {
      blog_id: req.params.id
    }
  })
})


module.exports = router;
