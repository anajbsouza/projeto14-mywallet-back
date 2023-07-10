import { Router } from "express";
import { loogout, signin, signup } from "../controllers/users.controllers.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { schemaUsers, schemaLogin } from "../schemas/users.schema.js";

const userRouter = Router();

userRouter.post("/sign-up", schemaValidation(schemaUsers), signup);   
userRouter.post("/sign-in", schemaValidation(schemaLogin), signin);
userRouter.post("/logout", loogout);

export default userRouter;