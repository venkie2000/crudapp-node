// first name, last name, email, phone number, dob, social media profiles

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    firstName: {
      type: String,
      required: [true, "Please add the First name"],
    },
    lastName: {
        type: String,
        required: [true, "Please add the Last name"],
      },
    email: {
      type: String,
      required: [true, "Please add the  email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the  phone number"],
    },
    dob: {
        type: String,
        required: [true, "Please add the date of birth"],
      },
      socialmedia: {
        type: String,
        required: [true, "Please add the social media"],
      },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel