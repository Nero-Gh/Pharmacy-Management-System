import express from "express";
import {
  deleteUserById,
  getAllUsers,
  getUserById,
  loginUser,
  registerUser,
  updateUserById,
} from "../controllers/authController.js";

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
authRouter.get("/auth/users", getAllUsers);

//get a user by id route
authRouter.get("/auth/user/:id", getUserById);

//update a user by id route
authRouter.put("/auth/user/:id", updateUserById);

//delete a user by id route
authRouter.delete("/auth/user/:id", deleteUserById);

export default authRouter;
