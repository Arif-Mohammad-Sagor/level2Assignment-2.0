import { Request, Response, NextFunction } from 'express';
const handleAllRequests = (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Route is not found!',
  });
};
const errorHandler = (
  error:any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
    });
  }
};

export default {
  handleAllRequests,
  errorHandler,
};
