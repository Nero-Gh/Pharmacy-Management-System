import mongoose from "mongoose";

const Supplier = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    trim: true,
  },
  contact: {
    type: String,
    required: [false, "Please provide your contact"],
    trim: true,
  },
  email: {
    type: String,
    required: [false, "Please provide your email"],
    trim: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
});

export default mongoose.model("Supplier", Supplier);
