import express from 'express';
import stockRoutes from './routes/stockRoutes';
import { errorHandler } from './utils/errorHandler';

const app = express();
app.use(express.json());

app.use('/api', stockRoutes);
app.use(errorHandler);

export default app;
