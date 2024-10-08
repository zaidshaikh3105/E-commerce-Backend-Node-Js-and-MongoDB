// import express from "express";
// import Product from "../Models/products.model.js";
// import Auth from "../middleware/auth.js";

// const router = new express.Router();

// // Fetch all items
// router.get("/items", async (req, res) => {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });

// // Fetch an item
// router.get("/items/:id", async (req, res) => {
//   try {
//     const item = await Item.findOne({ _id: req.params.id });

//     if (!item) {
//       return res.status(404).send({ error: "Item not found" });
//     }

//     res.status(200).send(item);
//   } catch (error) {
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });

// // Create an item
// router.post("/items", Auth, async (req, res) => {
//   try {
//     const newItem = new Item({
//       ...req.body,
//       owner: req.user._id,
//     });

//     await newItem.save();
//     res.status(201).send(newItem);
//   } catch (error) {
//     console.error(error);
//     res.status(400).send({ error: "Bad Request" });
//   }
// });

// // Update an item
// router.patch("/items/:id", Auth, async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["name", "description", "category", "price"];

//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );

//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Invalid updates" });
//   }

//   try {
//     const item = await Item.findOne({ _id: req.params.id });

//     if (!item) {
//       return res.status(404).send({ error: "Item not found" });
//     }

//     updates.forEach((update) => (item[update] = req.body[update]));
//     await item.save();
//     res.send(item);
//   } catch (error) {
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });

// // Delete an item
// router.delete("/items/:id", Auth, async (req, res) => {
//   try {
//     const deletedItem = await Item.findOneAndDelete({ _id: req.params.id });

//     if (!deletedItem) {
//       return res.status(404).send({ error: "Item not found" });
//     }

//     res.send(deletedItem);
//   } catch (error) {
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });

// export default router;
