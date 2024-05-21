import express from "express";
import { APP_PORT } from "./Config";
// import routes from "./Routes";
// import errorHandler from "./Middleware/ErrorHandler";
import bodyParser from "body-parser";

const app = express();

// Middleware for parsing application/json
app.use(bodyParser.json());

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const getRestroList = (req, res) => {
  res.send("This is get method");
};

const registerRestro = (req, res) => {
  res.send(req.body);
};

const replaceRestroInfo = (req, res) => {
  res.send(req.body);
};

const updateRestroInfo = (req, res) => {
  res.send(req.body);
};

const deleteRestro = (req, res) => {
  res.send(req.body);
};

app.get("/", getRestroList);

app.post("/register", registerRestro);

app.put("/replace/:id", replaceRestroInfo);

app.patch("/update/:id", updateRestroInfo);

app.delete("/delete/:id", deleteRestro);

// Error handling middleware (if needed)
// app.use(errorHandler);

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));
