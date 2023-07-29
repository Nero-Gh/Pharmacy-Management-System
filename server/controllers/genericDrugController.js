import Generic from "../models/genericDrugModel.js";
import asyncHandler from "express-async-handler";

/**
 * @desc    add new generic Drug
 */

export const addGenericDrugs = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const checkName = await Generic.findOne({ name });
  if (checkName) {
    throw new Error("Generic Drug already exists");
  }

  const generic = await Generic.create({
    name,
    description,
  });

  if (generic) {
    res.status(201).json({
      success: true,
      message: "Generic Drug name created successfully",
      generic,
    });
  } else {
    res.status(400);
    throw new Error("No Generic Drug data found");
  }
});

/**
 * @desc    get all generic drug names
 */
export const getGenericDrugs = asyncHandler(async (req, res) => {
  const generic = await Generic.find({});
  if (generic) {
    res.status(200).json({
      success: true,
      message: "All generic fetched successfully",
      generic,
    });
  } else {
    res.status(400);
    throw new Error("No generic drug data found");
  }
});

/**
 * @desc    get single generic drug name
 */

export const getGenericDrug = asyncHandler(async (req, res) => {
  const generic = await Generic.findById(req.params.id);
  if (generic) {
    res.status(200).json({
      success: true,
      message: "Generic drugs fetched successfully",
      generic,
    });
  } else {
    res.status(400);
    throw new Error("No generic data found");
  }
});

/**
 * @desc    update generic drug name
 */
export const updateGenericDrug = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const genericFound = await Generic.findById(req.params.id);

  if (!genericFound) {
    throw new Error("No generic drug data found");
  }

  const generic = await Generic.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
    },
    { new: true }
  );

  res.status(201).json({
    success: true,
    message: "Generic drug updated successfully",
    generic,
  });
});

/**
 * @desc    delete generic drug
 */
export const deleteGenericDrug = asyncHandler(async (req, res) => {
  const generic = await Generic.findById(req.params.id);

  if (!generic) {
    throw new Error("No Generic drug data found");
  }

  await Generic.findByIdAndDelete(req.params.id);

  res.status(201).json({
    success: true,
    message: "Generic Drug deleted successfully",
  });
});
