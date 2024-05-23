import express from "express";
import { APP_PORT } from "./Config"; // Make sure APP_PORT is defined in your Config file
import router from "./Routes";
// import errorHandler from "./Middleware/ErrorHandler";
import bodyParser from "body-parser";
import restaurantsData from "./data"; // Import the initial restaurant data

let restaurants = [...restaurantsData]; // Use let to allow reassignment

const app = express();

// Middleware for parsing application/json
app.use(bodyParser.json());

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// base route
app.use("/api", router);

// Error handling middleware (if needed)
// app.use(errorHandler);

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));
