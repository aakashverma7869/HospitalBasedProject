let index = (req, res) => {
    res.render("index");
}
let login = (req, res) => {
    res.render("LoginPage");
}
let signup = (req, res) => {
    res.render("SignupPage");
}
let phonenumber = (req, res) => {
    res.render("PhoneNumber");
}
module.exports = {
    index:index,
    login:login,
    signup:signup,
    phonenumber:phonenumber
}