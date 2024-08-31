import express from "express";
import Flutterwave from "flutterwave-node-v3";
import Order from "../Models/order.model.js";
import Cart from "../Models/cart.model.js";
import User from "../Models/user.models.js";
import Auth from "../middleware/auth.js";
import open from "open"; // Import open if not already done

const router = new express.Router();

// Initialize Flutterwave with environment variables
// const flw = new Flutterwave(
//   process.env.FLUTTERWAVE_V3_PUBLIC_KEY,
//   process.env.FLUTTERWAVE_V3_SECRET_KEY
// );

router.get("/orders", Auth, async (req, res) => {
  const owner = req.user._id;

  try {
    const orders = await Order.find({ owner }).sort({ date: -1 });

    if (orders.length > 0) {
      return res.status(200).send(orders);
    } else {
      return res.status(404).send({ error: "No orders found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Checkout
router.post("/order/checkout", Auth, async (req, res) => {
  try {
    const owner = req.user._id;
    let payload = req.body;

    // Find cart and user
    let cart = await Cart.findOne({ owner });
    let user = req.user;

    if (cart) {
      payload = { ...payload, amount: cart.bill, email: user.email };

      // Your existing code for making Flutterwave API requests

      // If response.meta.authorization.mode is 'redirect'
      if (response.meta.authorization.mode === "redirect") {
        let url = response.meta.authorization.redirect;
        open(url);
      }

      // Your existing code for handling PIN mode and redirect mode
    } else {
      res.status(400).send("No cart found");
    }
  } catch (error) {
    console.error(error);
    res.status(400).send("Invalid request");
  }
});

export default router;
