import { Router } from "express";

const transactionsRouter = Router();

transactionsRouter.post("/transactions");   
transactionsRouter.get("/transactions");   

export default transactionsRouter;