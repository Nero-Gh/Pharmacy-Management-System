import mongoose from "mongoose";

const genericDrugSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    trim: true,
  },
  description: {
    type: String,
    required: [false, "Please provide your description"],
    trim: true,
  },
});

export default mongoose.model("Generic_Drug", genericDrugSchema);
