import { Router } from "express";
import { entrada, saida } from "../controllers/transactions.controllers.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { userValidation } from "../middlewares/userValidation.middleware.js";
import { schemaTransactions } from "../schemas/transactions.schema.js";

const transactionsRouter = Router();

transactionsRouter.use(userValidation);

transactionsRouter.post("/transactions", schemaValidation(schemaTransactions), entrada);   
transactionsRouter.get("/transactions", saida);   

export default transactionsRouter;