const express = require("express");
const multer = require("multer");
const { registerFaceImage } = require("../controllers/UserFaceRegistrationController");

const router = express.Router();

// Configure multer to store files in memory as Buffer
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    // Accept PNG files only
    if (file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Only PNG images are allowed"), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // Optional: limit file size to 5MB
});

// POST /face-register
// Expects 'photo' field containing PNG image and userId in the body
router.post("/face-register", upload.single("photo"), registerFaceImage);

module.exports = router;
