const router = require("express").Router();

const userRoutes = require("./user-routes");
const updateBlogRoutes = require("./updateBlog-routes");
const commentPostRoutes = require("./comments-routes");

router.use("/users", userRoutes);
router.use("/blog", updateBlogRoutes);
router.use("/comments", commentPostRoutes);

module.exports = router;
