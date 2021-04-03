const router = require('express').Router();

const userRoute = require('./user-routes.js');
router.use("/user", userRoute)
module.exports = router;
