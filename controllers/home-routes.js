const router = require('express').Router();
const { Post, Comment, User } = require('../models');
//!! change later to make acceptance criteria
router.get('/', (req, res) => {
    Post.findAll({ include: [User] }).then((data) => {
        const posts = data.map((p) => {
            return p.get({ plain: true })
        })
        res.render("home", { posts })
    })
    // // res.render('home');
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
