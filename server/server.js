"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const connectDB = require("./config/db");
const app = (0, express_1.default)();
connectDB();
app.use(cors());
app.use(express_1.default.json());
app.use("/api/users", require("./src/user/user.api"));
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
