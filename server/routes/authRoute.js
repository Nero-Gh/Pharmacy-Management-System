import express from "express";
import {
  deleteUserById,
  getAllUsers,
  getUserById,
  loginUser,
  registerUser,
  updateUserById,
} from "../controllers/authController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import User from "../models/userModel.js";
import isAuthorized from "../middleware/isAuthorized.js";
import { roles } from "../utils/helper.js";

//Router
const authRouter = express.Router();

/**
 * @desc_Auth_Routes
 */

//register user route
authRouter.post("/auth/register", registerUser);

//login user route
authRouter.post("/auth/login", loginUser);

//get all users route
authRouter.get(
  "/auth/users",
  isAuthenticated(User),
  isAuthorized(roles.admin),
  getAllUsers
);

//get a user by id route
authRouter.get(
  "/auth/user/:id",
  isAuthenticated(User),
  isAuthorized(roles.admin),
  getUserById
);

//update a user by id route
authRouter.put(
  "/auth/user/:id",
  isAuthenticated(User),
  isAuthorized(roles.admin),
  updateUserById
);

//delete a user by id route
authRouter.delete(
  "/auth/user/:id",
  isAuthenticated(User),
  isAuthorized(roles.admin),
  deleteUserById
);

export default authRouter;
