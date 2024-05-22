import express from "express";
import { APP_PORT } from "./Config"; // Make sure APP_PORT is defined in your Config file
// import routes from "./Routes";
// import errorHandler from "./Middleware/ErrorHandler";
import bodyParser from "body-parser";
import restaurantsData from "./data"; // Import the initial restaurant data

let restaurants = [...restaurantsData]; // Use let to allow reassignment

const app = express();

// Middleware for parsing application/json
app.use(bodyParser.json());

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const getRestroList = (req, res) => {
  res.send(restaurants);
};

const registerRestro = (req, res) => {
  const newData = req.body;
  restaurants.push(newData);
  res.send(newData);
};

const replaceRestroInfo = (req, res) => {
  const newData = req.body;
  const restroId = req.params.id;
  const restroIndex = restaurants.findIndex((restro) => restro.id == restroId);

  if (restroIndex !== -1) {
    restaurants[restroIndex] = newData;
    res.send(newData);
  } else {
    res.status(404).send(`Restaurant with id: ${restroId} is not available`);
  }
};

const updateRestroInfo = (req, res) => {
  const newData = req.body;
  const restroId = req.params.id;
  const restroIndex = restaurants.findIndex((restro) => restro.id == restroId);

  if (restroIndex !== -1) {
    const restroUpdatedData = {
      ...restaurants[restroIndex],
      ...newData,
      id: restroId,
    };

    // update the array
    restaurants[restroIndex] = restroUpdatedData;

    // send response
    res.json({
      message: "Restaurant data is updated successfully!!",
      restro: restroUpdatedData,
    });
  } else {
    res.status(404).json({
      message: `Restaurant with id: ${restroId} is not found`,
    });
  }
};

const deleteRestro = (req, res) => {
  const restroId = parseInt(req.params.id, 10); // Ensure id is parsed as an integer
  const initialLength = restaurants.length;

  // Filter out the restaurant to be deleted
  restaurants = restaurants.filter((restro) => restro.id !== restroId);

  if (restaurants.length < initialLength) {
    res.json({
      message: "Restaurant deleted successfully",
      restaurants: restaurants,
    });
  } else {
    res.status(404).json({
      message: `Restaurant with id: ${restroId} is not found`,
    });
  }
};

app.get("/", getRestroList);
app.post("/register", registerRestro);
app.put("/replace/:id", replaceRestroInfo);
app.patch("/update/:id", updateRestroInfo);
app.delete("/delete/:id", deleteRestro);

// Error handling middleware (if needed)
// app.use(errorHandler);

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));
