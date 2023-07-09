import { Router } from "express";
import { signin, signup, usuarioLogado } from "../controllers/usuarios.controller.js";

const transacoesRouter = Router();

transacoesRouter.post("/cadastro", signup);   
transacoesRouter.post("/login", signin);
transacoesRouter.get("/usuario-logado", usuarioLogado)

export default transacoesRouter;