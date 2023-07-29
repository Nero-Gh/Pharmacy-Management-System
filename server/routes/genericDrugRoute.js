import express from "express";
import {
  addGenericDrugs,
  deleteGenericDrug,
  getGenericDrug,
  getGenericDrugs,
  updateGenericDrug,
} from "../controllers/genericDrugController.js";

//Router
const genericDrugRouter = express.Router();

/**
 * @desc_Auth_Routes
 */

//add generic drug route
genericDrugRouter.post("/generic/add", addGenericDrugs);

//get all generic drug route
genericDrugRouter.get("/generic", getGenericDrugs);

//get a user by id route
genericDrugRouter.get("/generic/:id", getGenericDrug);

//update a user by id route
genericDrugRouter.put("/generic/:id", updateGenericDrug);

//delete a user by id route
genericDrugRouter.delete("/generic/:id", deleteGenericDrug);

export default genericDrugRouter;
