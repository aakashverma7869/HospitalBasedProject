
let _id = null

const User = require("../models/user")
const Nexmo = require('nexmo');
//for OTP generator
const nexmo = new Nexmo({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET
});
//check or emailid and password if correct render to index page

let indexPage = (req, res) => {
    const {email,password} = req.body
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
        res.render("LoginPage");
        }
        else if(user.password==password){
          //check of already session
          if(!req.session.userid)
          {
            //if session is not present make a session for the user
            req.session.userid = user._id;
            req.session.message = {type:String,msg:"Login Sucessfully index"}
            res.render("index",{msg:req.session.message});
          }
        }
    });
}


//for SignUp user
let  signUpUser = (req, res) => {
    const userss = new User(req.body);
    userss.save((err, category) => {
      if (err) {
        return res.status(400).json({
          error: "NOT able to save category in DB"
        });
      }
      else{
          console.log("Sucessful store in DB",category);
        res.render("index");
      }
    });
  };


//After entering the phone number
  let otp = (req, res) => {
      // A user registers with a mobile phone number
      let phoneNumber = req.body.phone;
      console.log(phoneNumber);
      //check the user is registered in DB
      User.findOne({ phone:phoneNumber }, (err, user) => {
        if (err || !user) {
        console.log("Phone number does't match with database");
          res.render("LoginPage");
        }
        //  else if(user.phone==phoneNumber){
        //   if(!req.session.userid)
        //   {
        //     req.session.userid = user._id;
        //     res.render("index");
        //   }     
        // }
        else{
          //making of session
        req.session.userOtp = user._id;
        console.log("OTP------------>",req.session.userOtp);

        nexmo.verify.request({number: "91"+phoneNumber, brand: 'travastra',workflow_id: '6'}, (err, result) => {
        if(err) {
          console.log(err);
     
          //Oops! Something went wrong, respond with 500: Server Error
          res.status(500).send(err);
        } else {
          console.log(result);
     
          if(result && result.status == '0') {
            //A status of 0 means success! Respond with 200: OK
            _id = result.request_id;
            res.render("OTP");
          } else {
            //A status other than 0 means that something is wrong with the request. Respond with 400: Bad Request
            //The rest of the status values can be found here: https://developer.nexmo.com/api/verify#status-values
            res.status(400).send(result);
          }
        }
      });
      
    }
    });
}

let check = (req, res) => {
    //To verify the phone number the request ID and code are required.
    console.log("check------>",Object.keys(req.session));
    if(req.session.userOtp)
    {
   console.log("session mil gya ",req.session.userOtp);
   
    let code = req.body.code;
    let requestId = _id;
    console.log("Code: " + code + " Request ID: " + requestId);
   
    nexmo.verify.check({request_id: requestId, code: code}, (err, result) => {
      if(err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(result)
        if(result && result.status == '0') {
          //A status of 0 means success! Respond with 200: OK
          // res.status(200).send(result);
          console.log('Account verified!')


          User.findOne({ _id : req.session.userOtp}, (err, user) => {
            if (err || !user) {
              console.log("ID not found in DB", req.session.userOtp);
              req.session.destroy(function(err) {
                console.log("session is destroyed");
              })
            res.render("LoginPage");
            }
              else if(!req.session.userid)
              {
                req.session.userOtp = null;
                req.session.userid = user._id;
                res.render("index");
              }   
        });

        } else {
          //A status other than 0 means that something is wrong with the request. Respond with 400: Bad Request
          //The rest of the status values can be found here: https://developer.nexmo.com/api/verify#status-values
          res.status(400).send(result);
          console.log('Error verifying account')
        }
      }
    });
  }
  else{
    console.log("session not found");
    res.render("LoginPage");
  }
}






module.exports = {
    indexPage:indexPage,
    signUpUser: signUpUser,
    otp:otp,
    check:check
}