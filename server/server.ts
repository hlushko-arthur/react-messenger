import express from "express";
const cors = require("cors");
const connectDB = require("./src/config/db");

const app = express();

import authRoutes from './src/routes/user/user-auth.api';
import authMiddleware from './src/middleware/user.middleware';
import { responseHelper } from "./src/middleware/response.middleware";

connectDB();

app.use(cors());
app.use(express.json());
app.use(responseHelper)

app.use('/api/auth', authRoutes);


const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});