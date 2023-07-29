import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
  invoiceNo: {
    type: String,
    required: [true, "Please provide your invoiceNo"],
    trim: true,
  },
  total: {
    type: Number,
    required: false,
    trim: true,
  },
  discount: {
    type: Number,
    required: false,
    trim: true,
  },
  discountAmount: {
    type: Number,
    required: false,
  },
  totalPayable: {
    type: Number,
    required: false,
  },
  Paid: {
    type: Number,
    required: false,
    trim: true,
  },
  returnAmount: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

export default mongoose.model("Bill_Info", billSchema);
