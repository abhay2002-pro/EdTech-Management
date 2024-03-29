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

export const signinValidation = async (req, res, next) => {
    const validationRule = {
        "email": "required|email",
        "password": "required|string|min:6",
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

export const getSingleUserValidation = async (req, res, next) => {
    const validationRule = {
        "id": "required|string|min:1",
    }

    await validator(req.params, validationRule, {}, (err, status) => {
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
