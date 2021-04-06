const router = require('express').Router();
const { Comment } = require('../../models');
const isAuth = require("../../utils/auth");

router.post("/", isAuth, (req, res) => {
    Comment.create({ ...req.body, userId: req.session.userId }).then(data => {
        res.json(data)
    })
}
)


module.exports = router;