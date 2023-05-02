import express from "express";
import {
  addFood,
  updateFood,
  findFoods,
  deleteFood,
  deleteAllFood,
  getFood
} from "../controllers/food.controller";
import {auth, authAdmin} from "../middleware/Auth";


const route = express.Router();

route.get("/", findFoods);
route.get("/:id", getFood);
route.post("/", addFood);
route.put("/:id", updateFood);
route.delete("/:id", deleteFood);
route.delete("/all", deleteAllFood);

export default route;
