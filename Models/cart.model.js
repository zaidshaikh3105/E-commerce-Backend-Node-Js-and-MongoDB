import mongoose from "mongoose";
const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    items: [
      {
        itemId: {
          type: Schema.Types.ObjectId,
          ref: "Item",
          required: true,
        },
        name: String,
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
        price: Number,
      },
    ],
    bill: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes example (add indexes based on your queries)
cartSchema.index({ owner: 1 });

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
