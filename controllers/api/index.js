const router = require("express").Router();

const userRoutes = require("./user-routes");
const updateBlogRoutes = require("./updateBlog-routes");

router.use("/users", userRoutes);
router.use("/blog", updateBlogRoutes);

module.exports = router;
