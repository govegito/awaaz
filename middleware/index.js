
var middleware={};

middleware.isLoggedIn = function isLoggedIn(req,res,next){
	req.session.returnTo = req.originalUrl; 
	if(req.isAuthenticated()){
		return next();
    }
	res.redirect("/login");
}

module.exports= middleware;