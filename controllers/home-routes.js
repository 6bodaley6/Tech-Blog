const router = require('express').Router();
const { Post, Comment, User } = require('../models');
router.get('/', (req, res) => {
    Post.findAll({ include: [User] }).then((data) => {
        const posts = data.map((p) => {
            return p.get({ plain: true })
        })
        res.render("home", { posts })
    })
    // // res.render('home');
});
router.get('/post/:id', (req, res) => {
    Post.findByPk(req.params.id, { include: [User] }).then((data) => {

        const post = data.get({ plain: true })
        res.render("post", post)
    })
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) { res.redirect('/'); return; }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) { res.redirect('/'); return; }
    res.render('signup');
});


module.exports = router;
