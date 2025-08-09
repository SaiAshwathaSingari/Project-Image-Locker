const mongoose = require("mongoose");

const UserFaceRegistrationSchema = new mongoose.Schema({
  
  image: {
    data: {
      type: Buffer,
      required: true,
    },
    contentType: {
      type: String,
      default: "image/png",
      required: true,
    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("UserFaceRegistration", UserFaceRegistrationSchema);
