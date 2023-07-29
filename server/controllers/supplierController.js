import Supplier from "../models/supplierModel.js";
import asyncHandler from "express-async-handler";

/**
 * @desc    add new supplier
 */

export const addSupplier = asyncHandler(async (req, res) => {
  const { name, contact, email } = req.body;

  const checkSupplier = await Supplier.findOne({ email });
  if (checkSupplier) {
    throw new Error("Supplier already exists");
  }

  const supplier = await Supplier.create({
    name,
    contact,
    email,
  });

  if (supplier) {
    res.status(201).json({
      success: true,
      message: "Supplier created successfully",
      supplier,
    });
  } else {
    res.status(400);
    throw new Error("No Supplier data found");
  }
});

/**
 * @desc    get all suppliers
 */
export const getSuppliers = asyncHandler(async (req, res) => {
  const suppliers = await Supplier.find({});
  if (suppliers) {
    res.status(200).json({
      success: true,
      message: "All suppliers fetched successfully",
      suppliers,
    });
  } else {
    res.status(400);
    throw new Error("No Supplier data found");
  }
});

/**
 * @desc    get single supplier
 */

export const getSupplier = asyncHandler(async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  if (supplier) {
    res.status(200).json({
      success: true,
      message: "Supplier fetched successfully",
      supplier,
    });
  } else {
    res.status(400);
    throw new Error("No Supplier data found");
  }
});

/**
 * @desc    update supplier
 */
export const updateSupplier = asyncHandler(async (req, res) => {
  const { name, contact, email } = req.body;

  const supplierFound = await Supplier.findById(req.params.id);

  if (!supplierFound) {
    throw new Error("No Supplier data found");
  }

  const supplier = await Supplier.findByIdAndUpdate(
    req.params.id,
    {
      name,
      contact,
      email,
    },
    { new: true }
  );

  res.status(201).json({
    success: true,
    message: "Supplier updated successfully",
    supplier,
  });
});

/**
 * @desc    delete supplier
 */
export const deleteSupplier = asyncHandler(async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);

  if (!supplier) {
    throw new Error("No Supplier data found");
  }

  await Supplier.findByIdAndDelete(req.params.id);

  res.status(201).json({
    success: true,
    message: "Supplier deleted successfully",
  });
});
