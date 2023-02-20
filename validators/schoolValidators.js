import { validator } from "../utils/validator.js";

export const createSchoolValidation = async (req, res, next) => {
    const validationRule = {
        "name": "required|string",
        "city": "required|string",
        "state": "required|string",
        "country": "required|string",
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