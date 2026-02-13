import { Request, Response, NextFunction } from 'express';

export const responseHelper = (req: Request, res: Response, next: NextFunction) => {
	if (!res.sendError) {
		res.sendError = (statusCode: number, message: string) => {
			res.status(statusCode).json({ status: false, message });
		};
	}

	if (!res.sendResponse) {
		res.sendResponse = (statusCode: number, data: unknown) => {
			res.status(statusCode).json({ status: true, data });
		};
	}

	next();
};