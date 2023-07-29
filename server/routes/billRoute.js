import express from "express";
import { addBillInfo } from "../controllers/billController.js";

//Router
const billRouter = express.Router();

/**
 * @desc_Auth_Routes
 */

//add category route
billRouter.post("/bill/add", addBillInfo);

// //get all category route
// billRouter.get("/category", getCategories);

// //get a user by id route
// billRouter.get("/category/:id", getCategory);

// //update a user by id route
// billRouter.put("/category/:id", updateCategory);

// //delete a user by id route
// billRouter.delete("/category/:id", deleteCategory);

export default billRouter;
