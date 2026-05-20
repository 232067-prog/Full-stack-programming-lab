const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/mock", protect, async (req, res) => {
  const { amount, cardName, cardNumber, expiry, cvc } = req.body || {};

  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  if (!cardName || !cardNumber || !expiry || !cvc) {
    return res.status(400).json({ message: "Card details are required" });
  }

  const cleanedNumber = String(cardNumber).replace(/\s+/g, "");
  if (cleanedNumber.length < 12) {
    return res.status(400).json({ message: "Card number looks invalid" });
  }

  const paymentId = `MOCK-${Date.now()}`;
  return res.json({
    status: "success",
    paymentId,
    amount: Number(amount)
  });
});

module.exports = router;
