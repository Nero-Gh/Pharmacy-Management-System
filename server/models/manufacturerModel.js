import mongoose from "mongoose";

const manufacturerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    trim: true,
  },
});

export default mongoose.model("Manufacturer", manufacturerSchema);
