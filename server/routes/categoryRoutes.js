import express from "express";
import {
  addCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controllers/categoryController.js";

//Router
const categoryRouter = express.Router();

/**
 * @desc_Auth_Routes
 */

//add category route
categoryRouter.post("/category/add", addCategory);

//get all category route
categoryRouter.get("/category", getCategories);

//get a user by id route
categoryRouter.get("/category/:id", getCategory);

//update a user by id route
categoryRouter.put("/category/:id", updateCategory);

//delete a user by id route
categoryRouter.delete("/category/:id", deleteCategory);

export default categoryRouter;
