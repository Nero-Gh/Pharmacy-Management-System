import http from "http";
import app from "./app/app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

//connect to database
connectDB();

//server listening
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
