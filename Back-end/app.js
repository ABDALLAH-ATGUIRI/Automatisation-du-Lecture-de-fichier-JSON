import dotenv from "dotenv";
import express from "express";
import userRouter from "./api/users/user.router.js";

const app = express();
dotenv.config({ path: "./.env" });

app.use(express.json());

app.use("/api/users", userRouter.app);
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});
