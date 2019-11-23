import * as Joi from '@hapi/joi';

export const params = Joi.object({
    postId: Joi.number().required(),
    id: Joi.number().required()
});

export const payload = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    postId: Joi.number().required()
});

export const update = {
    params,
    payload
};
