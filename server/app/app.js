import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import {
  globalErrorHandler,
  notFoundError,
} from "../middleware/globalErrorHandler.js";
import authRouter from "../routes/authRoute.js";
import genericDrugRouter from "../routes/genericDrugRoute.js";
import manufacturerRouter from "../routes/manufacturerRoute.js";
import categoryRouter from "../routes/categoryRoutes.js";
import billRouter from "../routes/billRoute.js";
import supplierRouter from "../routes/supplierRoute.js";

const app = express();

/**
 * @Middlewares
 */
//Morgan middleware
app.use(morgan("dev"));

//express middleware
app.use(express.json());

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cookie middleware
app.use(cookieParser());

//cors middleware
app.use(cors());

/**
 * @Routes
 */
//auth routes
app.use("/api", authRouter);
//generic drug routes
app.use("/api", genericDrugRouter);
//manufacturer routes
app.use("/api", manufacturerRouter);
//category routes
app.use("/api", categoryRouter);
//bill routes
app.use("/api", billRouter);
//supplier routes
app.use("/api", supplierRouter);

/**
 * @Errors_Middleware
 */
app.use(notFoundError);
app.use(globalErrorHandler);

export default app;
