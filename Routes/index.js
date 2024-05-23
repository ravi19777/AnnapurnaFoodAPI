import express from "express";
import { registerRestro } from "../Controller/Auth/Restro/register";
import { getRestroList } from "../Controller/Fetch/Restro/getRestroList";
import { replaceRestroInfo } from "../Controller/Auth/Restro/replaceRestro";

const router = express.Router();

router
  .get("/", getRestroList)
  .post("/register/restaurant", registerRestro)
  .put("/replace/restaurantInfo/:id", replaceRestroInfo);

export default router;
