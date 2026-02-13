import 'express';

declare namespace Express {
	export interface Request {
		user?: any;
	}
}

declare module 'express-serve-static-core' {
  interface Response {
	sendResponse: (statusCode: number, data: unknown) => void;
    sendError: (statusCode: number, message: string) => void;
  }
}

declare global {
  namespace Express {
    interface Response {
      success(data: any, message?: string, statusCode?: number): void;

      error(message: string, statusCode?: number, errors?: any): void;
    }
  }
}