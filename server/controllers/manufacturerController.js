import asyncHandler from "express-async-handler";
import Manufacturer from "../models/manufacturerModel.js";

/**
 * @desc    add manufacturer
 */

export const addManufacturer = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const checkName = await Manufacturer.findOne({ name });
  if (checkName) {
    throw new Error("Manufacturer already exists");
  }

  const manufacturer = await Manufacturer.create({
    name,
  });

  if (manufacturer) {
    res.status(201).json({
      success: true,
      message: "Manufacturer created successfully",
      manufacturer,
    });
  } else {
    res.status(400);
    throw new Error("No manufacturer data found");
  }
});

/**
 * @desc    get all manufacturers
 */
export const getManufacturers = asyncHandler(async (req, res) => {
  const manufacturer = await Manufacturer.find({});
  if (manufacturer) {
    res.status(200).json({
      success: true,
      message: "All manufacturer fetched successfully",
      manufacturer,
    });
  } else {
    res.status(400);
    throw new Error("No manufacturer drug data found");
  }
});

/**
 * @desc    get single manufacturer
 */

export const getManufacturer = asyncHandler(async (req, res) => {
  const manufacturer = await Manufacturer.findById(req.params.id);
  if (manufacturer) {
    res.status(200).json({
      success: true,
      message: "Manufacturer drugs fetched successfully",
      manufacturer,
    });
  } else {
    res.status(400);
    throw new Error("No manufacturer data found");
  }
});

/**
 * @desc    update manufacturer
 */
export const updateManufacturer = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const checkFound = await Manufacturer.findById(req.params.id);

  if (!checkFound) {
    throw new Error("No manufacturer data found");
  }

  const manufacturer = await Manufacturer.findByIdAndUpdate(
    req.params.id,
    {
      name,
    },
    { new: true }
  );

  res.status(201).json({
    success: true,
    message: "Manufacturer drug updated successfully",
    manufacturer,
  });
});

/**
 * @desc    delete manufacturer
 */
export const deleteManufacturer = asyncHandler(async (req, res) => {
  const checkFound = await Manufacturer.findById(req.params.id);

  if (!checkFound) {
    throw new Error("No manufacturer data found");
  }

  await Manufacturer.findByIdAndDelete(req.params.id);

  res.status(201).json({
    success: true,
    message: "Manufacturer deleted successfully",
  });
});
