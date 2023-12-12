const { Router } = require("express");
const {
  Hero,
  w1,
  w2,
  w3,
  Room1,
  Room2,
  Room3,
  Room4,
  Room5,
  Room6,
  Room7,
  Room8,
  Room9,
  accomodation1,
  accomodation2,
  accomodation3,
  accomodation4,
  getStaycationPageData,
} = require("../services/staycationServices");
const router = Router();

//register
router.route("/hero").post(Hero);
// router.route("/welcomeimg1").post(Welcome1);
// router.route("/welcomeimg2").post(Welcome2);
router.route("/w1").post(w1);
router.route("/w2").post(w2);
router.route("/w3").post(w3);
router.route("/room1").post(Room1);
router.route("/room2").post(Room2);
router.route("/room3").post(Room3);
router.route("/room4").post(Room4);
router.route("/room5").post(Room5);
router.route("/room6").post(Room6);
router.route("/room7").post(Room7);
router.route("/room8").post(Room8);
router.route("/room9").post(Room9);
router.route("/accomodation1").post(accomodation1);
router.route("/accomodation2").post(accomodation2);
router.route("/accomodation3").post(accomodation3);
router.route("/accomodation4").post(accomodation4);
router.route("/getStaycationPageData").get(getStaycationPageData);

module.exports = router;
