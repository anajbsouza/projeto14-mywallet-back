import { db } from "../database/database.connection.js";
import dayjs from "dayjs";

export async function entrada(req, res) {
    const { valor, descricao, tipo } = req.body;
    const { userId } = res.locals.sessoes;
    
    try {
        const transactions = { valor: Number(valor), descricao, tipo, userId, data: dayjs().valueOf() }
        await db.collection("trasacoes").insertOne(transactions);
        res.sendStatus(201);
    } catch(err) {
        res.status(500).send(err.message);
    }
}


export async function saida(req, res) {
    const { userId } = res.locals.sessoes;
    
    try {
        const transactions = await db
        .collection("trasacoes")
        .find({ userId })
        .sort({data: -1})
        .toArray();

        res.send(transactions);
    } catch(err) {
        res.status(500).send(err.message);
    }
}