let index = (req, res) => {
    res.render("index");
}
let login = (req, res) => {
    console.log("Login page redirect")
    
    req.session.loginstatus = req.session.loginstatus || null
    res.render("LoginPage",{"status": req.session.loginstatus});
}
let signup = (req, res) => {
    res.render("SignupPage");
}
let phonenumber = (req, res) => {
    res.render("PhoneNumber");
}
const logout = (req,res) =>{
    req.session.destroy(function(err) {
      console.log("session is destroyed");
    })
  res.redirect("/");
  }
  let editProfile = (req, res) => {
    res.render("editProfile");
}
  
module.exports = {
    index:index,
    login:login,
    signup:signup,
    phonenumber:phonenumber,
    logout:logout,
    editProfile:editProfile
}