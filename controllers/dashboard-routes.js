const router = require('express').Router();
const isAuth = require("../utils/auth");

// // router.put("/:id", isAuth, (req, res) => {
// //     Post.update({ ...req.body, }, { where: { id: req.params.id } }).then(data => {
// //         res.json(data)
// //     }
// //     )
// // }
// // )
module.exports = router;
