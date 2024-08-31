import jwt from "jsonwebtoken";
import User from "../Models/user.models.js";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check token expiration
    if (decoded.exp < Date.now() / 1000) {
      throw new Error("Token has expired");
    }

    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error("User not found");
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({ error: "Authentication required" });
  }
};

export default auth;
