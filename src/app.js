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
const port = process.env.PORT || 5009;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))