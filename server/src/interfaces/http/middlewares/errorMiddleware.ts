import { ErrorRequestHandler } from "express";
import { AppError } from '../../../application/errors/AppError.js'

export const errorMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
    });
    return;
  }

  console.error(err);
  
  res.status(500).json({
    message: "Something went wrong."
  });
};