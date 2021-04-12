const router = require('express').Router();
const { Post } = require('../../models');
const isAuth = require("../../utils/auth");

router.post("/", isAuth, (req, res) => {
    Post.create({ ...req.body, userId: req.session.userId }).then(data => {
        res.json(data)
    })
}
)

router.put("/:id", isAuth, (req, res) => {
    Post.update({ ...req.body, }, { where: { id: req.params.id } }).then(data => {
        res.json(data)
    }
    )
}
)

router.delete("/:id", isAuth, (req, res) => {
    Post.destroy({ where: { id: req.params.id } }).then(data => {
        res.json(data)
    }
    )
}
)


module.exports = router;
