import prisma from "../config/db";
import { Request, Response } from "express";

const findFoods = async (req: Request, res: Response) => {
  let foods = await prisma.foodMenu.findMany();
  res.json(foods);
};

const getFood = async (req: Request, res: Response) => {
  let food = await prisma.foodMenu.findFirst({
    where: req.body.id,
  });
  res.json({ msg: food });
};

const addFood = async (req: Request, res: Response) => {
  let food = await prisma.foodMenu.create({
    data: {
      foodName: req.body.foodName,
      price: parseInt(req.body.price),
      img: req.body.img
    },
  });

  res.json({ msg: "Food has been added successfully", food });
};

const updateFood = async (req: Request, res: Response) => {
  let food = await prisma.foodMenu.update({
    where: {
      id: req.params.id,
    },
    data: {
      foodName: req.body.foodName,
      img: req.body.img,
      price: req.body.price,
    },
  });

  res.json({ msg: "food has been updated successfully", food });
};

const deleteFood = async (req: Request, res: Response) => {
  await prisma.foodMenu.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json({ msg: "food has been deleted successfully" });
};

const deleteAllFood = async (req: Request, res: Response) => {
  await prisma.foodMenu.deleteMany({});
  res.json({ msg: "All foods has been deleted" });
};
export { addFood, findFoods, updateFood, deleteFood, deleteAllFood, getFood };
