import prisma from "../config/db";
import { Request, Response } from "express";
import { IUser } from "../middleware/Auth";
import { Orders } from "@prisma/client";

const month = new Date().getMonth();
const year = new Date().getFullYear();
const day = new Date().getDay();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
console.log(month);

const date = `${day}/${month}/${year} at ${hours}:${minutes} o'clock`;

export const order = async (req: Request, res: Response) => {
  const { foodName, price, qty, total } = req.body as Orders;
  const orderID = res.locals.user as IUser;
  let orderFood = await prisma.orders.create({
    data: {
      foodName: foodName,
      orderID: orderID.id,
      qty: qty,
      price: price,
      total: total,
      onCreated: new Date(),
    },
  });
  res.json({ msg: "Your order has been confirmed", orderFood });
};

export const deleteAllOrders = async (req: Request, res: Response) => {
  await prisma.orders.deleteMany({});

  res.json({ msg: "Deleted orders has been succesfully" });
};

export const getOrders = async (req: Request, res: Response) => {
  let orders = await prisma.orders.findMany();

  res.send(orders);
};
