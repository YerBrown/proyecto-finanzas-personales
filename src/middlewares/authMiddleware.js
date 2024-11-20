// Verifica si el usuario está autenticado
function isAuthenticated(req, res, next) {
    console.log(req.session);  
 
    if (req.session.user) {
        next();

    } else {
      
        res.redirect("/login");
    }
}

// Verifica si el usuario tiene el rol de administrador
function isAdmin(req, res, next) {
  
    if (req.session.user && req.session.user.role === "admin") {
   
        next();
    } else {
     
        res.redirect("/login");
    }
}


export { isAuthenticated, isAdmin };
