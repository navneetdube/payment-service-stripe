const router = require("express").Router();
const controller = require("./payment.controller");
const auth = require("../../middlewares/auth.middleware");

/**
 * POST /payments/create
 * Create Stripe PaymentIntent
 */
router.post(
  "/create",
  auth,
  controller.createPayment
);

/**
 * GET /payments/orders/:orderId
 * Get payment/order status
 */
router.get(
  "/orders/:orderId",
  auth,
  controller.getOrderStatus
);

module.exports = router;
