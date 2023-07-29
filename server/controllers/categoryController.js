import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

/**
 * @desc    add category
 */

export const addCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const checkName = await Category.findOne({ name });
  if (checkName) {
    throw new Error("Category already exists");
  }

  const category = await Category.create({
    name,
  });

  if (category) {
    res.status(201).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } else {
    res.status(400);
    throw new Error("No category data found");
  }
});

/**
 * @desc    get all categories
 */
export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  if (categories) {
    res.status(200).json({
      success: true,
      message: "All categories fetched successfully",
      categories,
    });
  } else {
    res.status(400);
    throw new Error("No categories drug data found");
  }
});

/**
 * @desc    get single category
 */

export const getCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    res.status(200).json({
      success: true,
      message: "category drugs fetched successfully",
      category,
    });
  } else {
    res.status(400);
    throw new Error("No category data found");
  }
});

/**
 * @desc    update category
 */
export const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const checkFound = await Category.findById(req.params.id);

  if (!checkFound) {
    throw new Error("No category data found");
  }

  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name,
    },
    { new: true }
  );

  res.status(201).json({
    success: true,
    message: "Category drug updated successfully",
    category,
  });
});

/**
 * @desc    delete category
 */
export const deleteCategory = asyncHandler(async (req, res) => {
  const checkFound = await Category.findById(req.params.id);

  if (!checkFound) {
    throw new Error("No category data found");
  }

  await Category.findByIdAndDelete(req.params.id);

  res.status(201).json({
    success: true,
    message: "Category deleted successfully",
  });
});
