import { Router } from "express";
import { signin, signup, usuarioLogado } from "../controllers/users.controllers.js";

const transactionsRouter = Router();

transactionsRouter.post("/transactions");   
transactionsRouter.get("/transactions");   

export default transactionsRouter;