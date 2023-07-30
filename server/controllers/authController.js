import User from "../models/userModel.js";
import AsyncHandler from "express-async-handler";
import { hashPassword, isPassMatched } from "../utils/helper.js";
import { generateToken } from "../utils/generateToken.js";

/**
 * @desc  Register a new user
 */

export const registerUser = AsyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body;

  const userFound = await User.findOne({ email });

  if (userFound) {
    throw new Error("Email already exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    role,
    password: await hashPassword(password),
  });

  res.status(201).json({
    success: true,
    user,
  });
});

/**
 * @desc  Login a user
 */
export const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //find if user exit

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid login credentials");
  }

  //generate Token
  const userToken = generateToken(user?.id);

  //verifyPassword
  const isMatched = isPassMatched(password, user?.password);
  if (!isMatched) {
    throw new Error("Password does not match");
  } else {
    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      userToken,
    });
  }
});

/**
 * @desc Get All users
 */
export const getAllUsers = AsyncHandler(async (req, res, next) => {
  console.log("heloooooo");
  const users = await User.find().select("-password");

  if (users) {
    res.status(200).json({
      success: true,
      users,
    });
  } else {
    return new Error("No users found");
  }
});

/**
 * @desc Get a user by id
 */
export const getUserById = AsyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).select("-password");

  if (!user) {
    throw new Error("User not found");
  }

  res.status(200).json({
    success: true,
    user,
  });
});

/**
 * @desc Update a user by id
 */

export const updateUserById = AsyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body;

  const userFoundID = await User.findById(req.params.id);

  if (!userFoundID) {
    throw new Error("User not found");
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      firstName,
      lastName,
      email,
      role,
      password: await hashPassword(password),
    },
    { new: true }
  );

  await user.save();

  res.status(200).json({
    success: true,
    user,
  });
});

/**
 * @desc Delete a user by id
 */
export const deleteUserById = AsyncHandler(async (req, res, next) => {
  const userId = req.params.id;

  const user = await User.findOne({ _id: userId });

  if (!user) {
    throw new Error("User not found");
  }

  await User.findByIdAndDelete(userId);

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});
