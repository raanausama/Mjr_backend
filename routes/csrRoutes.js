const { Router } = require("express");
const { Hero, CSR1, CSR2, CSR3, CSR4, CSR5 } = require("../services/csrServices");
const router = Router();

//register
router.route("/hero").post(Hero);
router.route("/csr1").post(CSR1);
router.route("/csr2").post(CSR2);
router.route("/csr3").post(CSR3);
router.route("/csr4").post(CSR4);
router.route("/csr5").post(CSR5);

module.exports = router;
