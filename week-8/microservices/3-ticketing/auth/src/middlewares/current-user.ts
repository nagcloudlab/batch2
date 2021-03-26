import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  // if (!req.session?.jwt) {
  //   return next();
  // }

  const authorizationHeader = req.headers['authorization']

  if (!authorizationHeader) {
    return next();
  } else {
    const token = authorizationHeader?.split(" ")[1] || ""
    try {

      const payload = jwt.verify(
        token,
        process.env.JWT_KEY!
      ) as UserPayload;

      req.currentUser = payload;

    } catch (err) {
      // if token invalid | expired
      // take some decision
      res.json({ message: err.message })
    }
    // next();
  }

};
