import Joi from 'joi'

export const authorValidation = async (body) => {
    try {
        const schema = Joi.object({
            name: Joi.string()
                .required()
                .max(30)
                .min(3),

            image: Joi.string()
                .required(),
        })
        const { error, value } = schema.validate(body);

        if (error) {
            return res.status(403).send(error.details)
        }
        return value
    }
    catch (err) {
        return res.status(500).send(err)
    }
}