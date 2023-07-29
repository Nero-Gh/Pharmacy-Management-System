import express from "express";
import {
  addSupplier,
  deleteSupplier,
  getSupplier,
  getSuppliers,
  updateSupplier,
} from "../controllers/supplierController.js";

//Router
const supplierRouter = express.Router();

/**
 * @desc_Auth_Routes
 */

//register user route
supplierRouter.post("/supplier/add", addSupplier);

//get all supplier route
supplierRouter.get("/supplier", getSuppliers);

//get supplier by id route
supplierRouter.get("/supplier/:id", getSupplier);

//update a supplier by id route
supplierRouter.put("/supplier/:id", updateSupplier);

//delete a supplier by id route
supplierRouter.delete("/supplier/:id", deleteSupplier);

export default supplierRouter;
