export async function signup(req, res) {
    const { nome, email, senha } = req.body;
    const hash = bcrypt.hashSync(senha, 10);
    
    try {
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