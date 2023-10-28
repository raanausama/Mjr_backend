const { Router } = require("express");
const { Hero, Adventure, Card1, Card2, Card3, Activities1, Activities2, Activities3, Activities4, Activities5, Activities6 } = require("../services/activitiesServices");
const router = Router();

//register
router.route("/hero").post(Hero);
router.route("/adventure").post(Adventure);
router.route("/card1").post(Card1);
router.route("/card2").post(Card2);
router.route("/card3").post(Card3);
router.route("/activities1").post(Activities1);
router.route("/activities2").post(Activities2);
router.route("/activities3").post(Activities3);
router.route("/activities4").post(Activities4);
router.route("/activities5").post(Activities5);
router.route("/activities6").post(Activities6);

module.exports = router;
