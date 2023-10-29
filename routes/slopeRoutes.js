const { Router } = require("express");
const {
  heroSection,
  descriptionSection,
  techSection,
  t1,
  t2,
  t3,
  d1,
  d2,
  d3,
  getSlopePageData,
} = require("../services/slopeServices");
const router = Router();

router.route("/heroSection").post(heroSection);
router.route("/descriptionSection").post(descriptionSection);
router.route("/d1").post(d1);
router.route("/d2").post(d2);
router.route("/d3").post(d3);

router.route("/techSection").post(techSection);
router.route("/t1").post(t1);
router.route("/t2").post(t2);
router.route("/t3").post(t3);
router.route("/getSlopePageData").get(getSlopePageData);

module.exports = router;
