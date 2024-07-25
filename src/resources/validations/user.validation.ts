import Joi from 'joi'

const createUser = Joi.object({
    email: Joi.string().required
})

const getUserByEmail = Joi.object({
    email: Joi.string().required
})


export default { 
    createUser,
    getUserByEmail,
};