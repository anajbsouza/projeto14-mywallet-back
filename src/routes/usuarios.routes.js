import { Router } from "express";
import { signin, signup } from "../controllers/usuarios.controller.js";

const usuarioRouter = Router();

usuarioRouter.post("/cadastro", signup);   
usuarioRouter.post("/login", signin);

export default usuarioRouter;