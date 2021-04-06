const router = require('express').Router();

const userRoute = require('./user-routes.js');
router.use("/user", userRoute)

const postRoute = require('./post-routes.js');
router.use("/post", postRoute)

const commentRoute = require('./comment-routes.js');
router.use("/comment", commentRoute)


module.exports = router;


