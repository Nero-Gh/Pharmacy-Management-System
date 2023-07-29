import express from "express";
import {
  addManufacturer,
  deleteManufacturer,
  getManufacturer,
  getManufacturers,
  updateManufacturer,
} from "../controllers/manufacturerController.js";

//Router
const manufacturerRouter = express.Router();

/**
 * @desc_Auth_Routes
 */

//register user route
manufacturerRouter.post("/manufacturer/add", addManufacturer);

//get all manufacturer route
manufacturerRouter.get("/manufacturer", getManufacturers);

//get manufacturer by id route
manufacturerRouter.get("/manufacturer/:id", getManufacturer);

//update a user by id route
manufacturerRouter.put("/manufacturer/:id", updateManufacturer);

//delete a user by id route
manufacturerRouter.delete("/manufacturer/:id", deleteManufacturer);

export default manufacturerRouter;
