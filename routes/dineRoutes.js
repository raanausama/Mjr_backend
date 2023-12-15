const { Router } = require("express");
const { Hero, Restaurant1, Restaurant2, Restaurant3, Restaurant4, Restaurant5,Restaurant6,Restaurant7, getDinePageData } = require("../services/dineServices");
const router = Router();

//register
router.route("/hero").post(Hero);
router.route("/restaurant1").post(Restaurant1);
router.route("/restaurant2").post(Restaurant2);
router.route("/restaurant3").post(Restaurant3);
router.route("/restaurant4").post(Restaurant4);
router.route("/restaurant5").post(Restaurant5);
router.route("/restaurant6").post(Restaurant6);
router.route("/restaurant7").post(Restaurant7);
router.route("/getDinePageData").get(getDinePageData);


module.exports = router;
