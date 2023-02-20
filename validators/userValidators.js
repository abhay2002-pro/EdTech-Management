import { validator } from "../utils/validator.js";

export const signupValidation = async (req, res, next) => {
    const validationRule = {
        "first_name": "required|string",
        "last_name": "required|string",
        "email": "required|email",
        "mobile": "required|string",
        "password": "required|string|min:6",
        "roleId": "required|string"
    }

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
};
