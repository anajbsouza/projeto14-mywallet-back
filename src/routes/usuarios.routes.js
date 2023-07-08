import { Router } from "express";
import { signin, signup, usuarioLogado } from "../controllers/usuarios.controller.js";

const usuarioRouter = Router();

usuarioRouter.post("/cadastro", signup);   
usuarioRouter.post("/login", signin);
usuarioRouter.get("/usuario-logado", usuarioLogado)

export default usuarioRouter;