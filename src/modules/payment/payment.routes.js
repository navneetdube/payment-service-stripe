const router = require("express").Router();
const controller = require("./payment.controller");
const auth = require("../../middlewares/auth.middleware");
const rbacGuard = require("../../middlewares/rbac.guard");

/**
 * POST /payments/create
 * Create Stripe PaymentIntent
 */
router.post(
  "/create",
  auth,
  rbacGuard("PAYMENT", "CREATE"),
  controller.createPayment
);

/**
 * GET /payments/orders/:orderId
 * Get payment/order status
 */
router.get(
  "/orders/:orderId",
  auth,
  rbacGuard("PAYMENT", "READ"),
  controller.getOrderStatus
);

module.exports = router;
