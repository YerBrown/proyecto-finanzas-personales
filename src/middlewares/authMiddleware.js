function isAuthenticated(req, res, next) {
    console.log(req.session);
    if (req.session.user) {
        
    } else {
        res.redirect("/login");
    }
    next();
}

function isAdmin(req, res, next) {
    if (req.session.user && req.session.user.role === "admin") {
        next();
    } else {
        res.redirect("/login");
    }
}

export { isAuthenticated, isAdmin };
