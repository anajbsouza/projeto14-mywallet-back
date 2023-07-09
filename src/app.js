import cors from "cors";
import express from "express";
import router from "./routes/index.routes.js";

// criando servidor
const app = express()

// configurações
app.use(cors());
app.use(express.json());
app.use(router);

// deixa o app escutando
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))