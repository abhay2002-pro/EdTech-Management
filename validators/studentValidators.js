import { validator } from "../utils/validator.js";

export const createStudentValidation = async (req, res, next) => {
    const validationRule = {
        "name": "required|string",
        "userId": "required|string",
        "schoolId": "required|string",
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