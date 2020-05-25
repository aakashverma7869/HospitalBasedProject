var mongoose = require("mongoose");
var userSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      trim: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
        type: String,
        maxlength: 32,
        trim: true
      },
      email: {
        type: String,
        trim: true
      },
      gender: {
        type: String,
        maxlength: 32,
        trim: true
      },
      date:{
          type: Date
      },
      city: {
        type: String,
        maxlength: 32,
        trim: true
      },
      state: {
        type: String,
        maxlength: 32,
        trim: true
      },
      country: {
        type: String,
        maxlength: 32,
        trim: true
      }

  },
  { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);
