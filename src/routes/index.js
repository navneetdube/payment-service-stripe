const router = require("express").Router();



router.use("/payment", require("../modules/payment/payment.routes"));



module.exports = router;