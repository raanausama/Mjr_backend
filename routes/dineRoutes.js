const { Router } = require("express");
const { Hero, Restaurant1, Restaurant2, Restaurant3, Restaurant4, Restaurant5 } = require("../services/dineServices");
const router = Router();

//register
router.route("/hero").post(Hero);
router.route("/restaurant1").post(Restaurant1);
router.route("/restaurant2").post(Restaurant2);
router.route("/restaurant3").post(Restaurant3);
router.route("/restaurant4").post(Restaurant4);
router.route("/restaurant5").post(Restaurant5);

module.exports = router;
