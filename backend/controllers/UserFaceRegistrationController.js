const UserFaceRegistration = require("../model/UserFaceRegistration");

/**
 * Controller to register face image sent from frontend
 * Expects multipart/form-data with image file (e.g., req.file)
 * and userId in req.body or from authenticated session
 */
const registerFaceImage = async (req, res) => {
  try {
    const userId = req.body.userId; // Or get from session/auth token

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    // Create new record with userId and image buffer
    const faceRegistration = new UserFaceRegistration({
      userId,
      image: {
        data: req.file.buffer, // multer parses file buffer
        contentType: "image/png", // expecting PNG format
      },
      createdAt: new Date(),
    });

    await faceRegistration.save();

    return res.status(201).json({ message: "Face image registered successfully" });
  } catch (error) {
    console.error("Error registering face image:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  registerFaceImage,
};
