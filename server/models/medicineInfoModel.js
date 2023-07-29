import mongoose from "mongoose";

const medicineInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    trim: true,
  },

  category: {
    type: String,
    required: [false, "Please provide your category"],
  },

  genericID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Generic_Drug",
  },
  manufacturerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manufacturer",
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

export default mongoose.model("MedicineInfo", medicineInfoSchema);
