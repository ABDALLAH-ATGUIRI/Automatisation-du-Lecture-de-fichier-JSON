import UserController from "./user.controller.js";
import express from "express";
import auth from "../../auth/token_validation.js";
const app = express.Router();

app.post("/", UserController.createUser);
app.get("/", auth.checkToken, UserController.getAllUsers);
app.get("/:id", auth.checkToken, UserController.getOneUserByUserId);
app.post("/login", UserController.login);

export default { app };
