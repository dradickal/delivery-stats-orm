import { Request, Response, NextFunction } from "express";

export function ErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    console.log(error);
    res.status(500).send({message: "Oops. We have an error." });
}