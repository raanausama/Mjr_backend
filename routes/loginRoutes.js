const { Router } = require("express");
const { Register, Login, isVerify,  } = require("../services/loginServices");
const router = Router();

//register
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/isverify").get(isVerify);

//login Route


module.exports = router;
