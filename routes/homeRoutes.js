const { Router } = require("express");
const { sliderText, UploadImage, GetImage, heroSection, summerSection, winterSection, pastEvent, upcomingEvent, futureEvent, getHomePageData  } = require("../services/homeServices");
const router = Router();

//register
router.route("/sliderText").post(sliderText);
router.route("/upload-image").post(UploadImage);
router.route("/get-images").get(GetImage);
router.route("/heroSection").post(heroSection);
router.route("/summerSection").post(summerSection);
router.route("/winterSection").post(winterSection);
router.route("/pastEvent").post(pastEvent);
router.route("/upcomingEvent").post(upcomingEvent);
router.route("/futureEvent").post(futureEvent);
router.route("/getHomePageData").get(getHomePageData);
// router.route("/login").post(Login);
// router.route("/isverify").get(isVerify);

//login Route

module.exports = router;