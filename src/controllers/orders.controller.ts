import prisma from "../config/db";
import { Request, Response } from "express";
import { IUser } from "../middleware/Auth";
import { Orders } from "@prisma/client";

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
      onCreated: new Date()
    },
  });
  res.json({ msg: "Your order has been confirmed", orderFood });
};

export const deleteAllOrders = async (req: Request, res: Response) => {
  await prisma.orders.deleteMany({});

  res.json({ msg: "Deleted orders has been succesfully" });
};
