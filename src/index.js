import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import router from "./routes"; // Adjust the path as necessary
import { APP_PORT, PUBLIC_DIR } from "./Config"; // Ensure APP_PORT is defined in Config

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/AnnpurnaFood", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware for parsing application/json
app.use(bodyParser.json());

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Base route
app.use("/api", router); // Ensure `router` is a middleware function, not an object

// Serve public files
app.use(express.static(PUBLIC_DIR));

// Error handling middleware (if needed)
// app.use(errorHandler);

// Start the server
const databaseConnection = () => {
  app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));
};

export default databaseConnection;
