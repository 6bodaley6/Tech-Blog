const router = require('express').Router();
// const { } = require('../models');
//!! change later to make acceptance criteria
router.get('/', (req, res) => {
    res.render('home');
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
