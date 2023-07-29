import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
  batch_no: {
    type: Number,
    required: false,
    trim: true,
  },
  quantity: {
    type: Number,
    required: false,
    trim: true,
  },
  cost: {
    type: Number,
    required: false,
    trim: true,
  },
  sellPrice: {
    type: Number,
    required: false,
    trim: true,
  },
  expiryDate: {
    type: Date,
    required: false,
    trim: true,
  },
  purchaseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bill_Info",
  },
  genericID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Generic_Drug",
  },
  supplierID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
  },
});

export default mongoose.model("Batch", batchSchema);
