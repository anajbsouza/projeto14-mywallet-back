import { Router } from "express";
import { signin, signup } from "../controllers/users.controllers.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { schemaUsers } from "../schemas/users.schema.js";

const userRouter = Router();

userRouter.post("/sign-up", schemaValidation(schemaUsers), signup);   
userRouter.post("/sign-in", signin);
userRouter.get("/sign-out")

export default userRouter;