import Joi from "joi";
import cors from "cors";
import dayjs from "dayjs";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import express from "express";
import { v4 as uuid } from "uuid";
import { MongoClient, ObjectId } from "mongodb";
import { signin, signup } from "./controllers/usuarios.js";

// criando servidor
const app = express();

// configurações
app.use(cors());
app.use(express.json());
dotenv.config();

// conexão com banco de dados
const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
    await mongoClient.connect()
    console.log('MongoDB conectado!')
} catch (err) {
    console.log(err.message)
}

const db = mongoClient.db("mywallet");


// schemas
const schemaUser = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().required().min(3)
});


// endpoints

app.post("/cadastro", signup);   



app.post("/login", signin);


app.get("/usuario-logado", async(req, res) => {
    const { authorizaton } = req.headers;
    const token = authorizaton?.replace("Bearer ", "");

    if(!token) return res.sendStatus(401);
    res.sendStatus(201);
})







// deixa o app escutando
const PORT = 5009;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))