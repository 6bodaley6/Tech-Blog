const isAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect("/login")
    } else {
        next(console.log())
    }
};

module.exports = isAuth;