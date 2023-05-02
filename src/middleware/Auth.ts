import { Role } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

interface User {
  id: string;
  role: Role;
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization as string;
    const token = header?.split(" ")[1];
    !token && res.status(403).json({ msg: "you are not authorized" });
    const deToken = jwt.verify(token, process.env.API_SECRET as string) as User;
    res.locals.user = deToken;

    next();
  } catch (err) {
    res.status(403).json({ msg: `you are not authorized: ${err}` });
  }
};

const authAdmin =  (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization as string;
    const token = header?.split(" ")[1];
    let role = Role;
    if (token && !role.ADMIN) {
     res.status(403).json({ msg: "you are not authorized" });
    }
    next
  } catch (err) {
    console.log(err);
  }
};
export { auth, authAdmin };
