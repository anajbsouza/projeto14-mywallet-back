import bcrypt from "bcrypt";
import { db } from "../database/database.connection.js";
import { v4 as uuid } from "uuid";
import { schemaTransactions } from "../schemas/transactions.schema.js";

export async function entrada(req, res) {
    const { valor, descricao } = req.body;

    const validation = schemaTransactions.validate(req.body, { abortEarly: false });
    
    if(validation.error) {
        const errors = validation.error.details.map(detail => detail.message)
        return res.status(422).send(errors)
    }
    
    try {
        await db.collection("entrada").insertOne({ valor, descricao });
        res.sendStatus(201);
    } catch(err) {
        res.status(500).send(err.message);
    }
}

export async function saida(req, res) {
    const { valor, descricao } = req.body;

    const validation = schemaTransactions.validate(req.body, { abortEarly: false });
    
    if(validation.error) {
        const errors = validation.error.details.map(detail => detail.message)
        return res.status(422).send(errors)
    }
    
    try {
        await db.collection("saida").deleteOne({ valor, descricao });
        res.sendStatus(201);
    } catch(err) {
        res.status(500).send(err.message);
    }
}