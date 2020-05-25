
let _id = null
const User = require("../models/user")
const Nexmo = require('nexmo');
// const nexmo = new Nexmo({
//   apiKey: 'ffcdfe5f',
//   apiSecret: 'sLF7r0ZZsT16B1Sf'
// });



const nexmo = new Nexmo({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET
});



let indexPage = (req, res) => {
    // res.render("LoginPage");
    const {email,password} = req.body
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
        res.render("LoginPage");
        }
        else if(user.password==password){
            res.render("index");
        }
    });
}
let index = (req, res) => {
    res.render("index");
}


let  signUpUser = (req, res) => {
    const userss = new User(req.body);
    userss.save((err, category) => {
      if (err) {
        return res.status(400).json({
          error: "NOT able to save category in DB"
        });
      }
      else{
          console.log("Sucessful store in DB");
        res.render("index");
      }
    });
  };


  let otp = (req, res) => {
    
      // A user registers with a mobile phone number
      let phoneNumber = req.body.phone;
     
      console.log(phoneNumber);
     
      nexmo.verify.request({number: phoneNumber, brand: 'travastra',workflow_id: '6'}, (err, result) => {
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

let check = (req, res) => {
    //To verify the phone number the request ID and code are required.

    let code = req.body.code;
    let requestId = _id;
    console.log("Code: " + code + " Request ID: " + requestId);
   
    nexmo.verify.check({request_id: requestId, code: code}, (err, result) => {
      if(err) {
        console.log(err);
   
        //Oops! Something went wrong, respond with 500: Server Error
        res.status(500).send(err);
      } else {
        console.log(result)
   
        if(result && result.status == '0') {
          //A status of 0 means success! Respond with 200: OK
          // res.status(200).send(result);
          console.log('Account verified!')
          res.render("index");

        } else {
          //A status other than 0 means that something is wrong with the request. Respond with 400: Bad Request
          //The rest of the status values can be found here: https://developer.nexmo.com/api/verify#status-values
          res.status(400).send(result);
          console.log('Error verifying account')
        }
      }
    });
   
}






module.exports = {
    indexPage:indexPage,
    index : index,
    signUpUser: signUpUser,
    otp:otp,
    check:check
}