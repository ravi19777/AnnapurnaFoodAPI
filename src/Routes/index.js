import express from "express";
import restroAuthController from "../Controller/Auth/restroAuthController";
import restroFetchController from "../Controller/Fetch/restroFetchController";

const router = express.Router();

router
  .get("/", restroFetchController.getRestroList)
  .get("/restaurant/:id", restroFetchController.getRestro)
  .post("/register/restaurant", restroAuthController.registerRestro)
  .put("/replace/restaurantInfo/:id", restroAuthController.replaceRestroInfo)
  .patch("/update/restaurantInfo/:id", restroAuthController.updateRestroInfo)
  .delete("/delete/restaurant/:id", restroAuthController.deleteRestro);

export default router;
