// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     owner: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: "User", // Assuming you have a 'User' model
//     },
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Indexing example (add indexes based on your queries)
// productSchema.index({ owner: 1, category: 1 });

// const Product = mongoose.model("Product", productSchema);

// export default Product;
