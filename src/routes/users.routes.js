import { Router } from "express";
import { logout, signin, signup } from "../controllers/users.controllers.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { userValidation } from "../middlewares/userValidation.middleware.js";
import { schemaUsers, schemaLogin } from "../schemas/users.schema.js";

const userRouter = Router();

userRouter.post("/cadastro", schemaValidation(schemaUsers), signup);   
userRouter.post("/login", schemaValidation(schemaLogin), signin);
userRouter.post("/logout",userValidation, logout);

export default userRouter;