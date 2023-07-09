import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { db } from "../database/database.connection.js";
import { schemaUsuario } from "../schemas/usuarios.schema.js";

export async function signup(req, res) {
    const { nome, email, senha } = req.body;
    
    const validation = schemaUsuario.validate(req.body, { abortEarly: false });
    
    if(validation.error) {
        const errors = validation.error.details.map(detail => detail.message)
        return res.status(422).send(errors)
    }
    
    try {
        const usuario = await db.collection("usuarios").findOne({ email })
        if (usuario) return res.status(409).send("E-mail já cadastrado")

        const hash = bcrypt.hashSync(senha, 10);

        await db.collection("usuarios").insertOne({ nome, email, senha: hash });
        res.sendStatus(201);
    } catch(err) {
        res.status(500).send(err.message);
    }
}

export async function signin(req, res) {
    const { email, senha } = req.body;

    try {
        const usuario = await db.collection("usuarios").insertOne({ email });
        if (!usuario) return res.status(404).send("Usuário não cadastrado");

        const senhaCorreta = bcrypt.compareSync(senha, usuario.senha);
        if (!senhaCorreta) return res.status(404).send("Senha incorreta");

        const token = uuid();
        await db.collection("sessao").insertOne(token);
        // idUsuario: usuario._id
        res.send(token);
    } catch(err) {
        res.status(500).send(err.message);
    }
}

export async function usuarioLogado(req, res) {
    const { authorizaton } = req.headers;
    const token = authorizaton?.replace("Bearer ", "");

    if(!token) return res.sendStatus(401);
    res.sendStatus(201);
}