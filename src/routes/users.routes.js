import { Router } from "express";
import { signin, signup, signout } from "../controllers/users.controllers.js";

const userRouter = Router();

userRouter.post("/sign-up", signup);   
userRouter.post("/sign-in", signin);
userRouter.get("/sign-out", signout)

export default userRouter;