const express = require("express");
const {
  loginController,
  signupController,
  authController,
} = require("../controllers/userControllers");

const authMiddleware = require("../middlewares/authMiddleware");
//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/signup", signupController);

//auth || post
router.post("/getUserData", authMiddleware, authController);
module.exports = router;
