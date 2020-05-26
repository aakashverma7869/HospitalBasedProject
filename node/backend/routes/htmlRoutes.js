const express = require("express");
const router = express.Router();
const controller = require("../controllers")
const getControllers = controller.get
const postControllers = controller.post


//Get Controller
router.route("/").get(getControllers.login);
router.route("/signup").get(getControllers.signup);
router.route("/phonenumber").get(getControllers.phonenumber);

//POST Controller
router.route("/indexPage").post(postControllers.indexPage);
router.route("/signUpUser").post(postControllers.signUpUser);
router.route("/otp").post(postControllers.otp);
router.route("/check").post(postControllers.check);

module.exports = router;