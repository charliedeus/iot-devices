import 'dotenv/config';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import { AppError } from './errors/AppError';
import { router } from './routes';

const app = express();
app.use(express.json());

app.use(router);

const options: cors.CorsOptions = {
  origin: '*',
};
app.use(cors(options));

app.get('/', (request, response) => {
  return response.json({ message: 'Olá, essa é a rota principal' });
});

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${error.message}`,
    });
  },
);

app.listen(process.env.PORT || 4000, () =>
  console.log(`🚀 Server is running on PORT 4000!!!!`),
);
