import Joi from "joi";

export const schemaTransacoes = Joi.object({
    valor: Joi.string().required(),
    descricao: Joi.string().required(),
});

