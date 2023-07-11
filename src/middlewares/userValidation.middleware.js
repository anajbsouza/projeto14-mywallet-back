import { db } from "../database/database.connection";

export async function userValidation(req, res, next){
    const { authorizaton } = req.headers;
    const token = authorizaton?.replace("Bearer ", "");

    if(!token) return res.sendStatus(401);

    try {
        const sessoes = await db.collection("sessoes").findOne({ token })
        if (!sessoes) return res.sendStatus(401);

        res.locals.sessoes = sessoes;

        next();

    } catch(err) {
        res.status(500).send(err.message);
    }
}