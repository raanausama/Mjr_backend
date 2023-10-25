const { Router } = require("express");
const { Hero  } = require("../services/homeServices");
const router = Router();

//register
router.route("/insertText").post(Hero);
// router.route("/login").post(Login);
// router.route("/isverify").get(isVerify);

//login Route

module.exports = router;