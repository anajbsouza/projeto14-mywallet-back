import Joi from "joi";

export const schemaUsuario = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().required().min(3)
});