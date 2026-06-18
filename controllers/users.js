const User = require("../Models/user.js");

// render signUp form
module.exports.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

//signup
module.exports.signUp = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registerUser = await User.register(newUser, password);
    req.login(registerUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Stayspot");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

//render login form
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

// login
module.exports.login = async (req, res) => {
  req.flash("success", "welcome to Stayspot you are Login");
  res.redirect(res.locals.redirectUrl || "/listings");
};

//logout
module.exports.logOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
};
