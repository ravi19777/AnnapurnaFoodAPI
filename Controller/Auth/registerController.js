import Joi from 'joi';

const registerController = {
    async register(req, res, next) {
        // CHECKLIST FOR REGISTER USER
        // 1. Validate the request.
        // 2. Authorise the request.
        // 3. Check if the user is already registered or not [phone number and email should not match with any existing phone number and email]
        // 4. Prepare model
        // 5. Store in database
        // 6. Generate JWT token
        // 7. Send response

        // validation
        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            phone: Joi.number().equal(10).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3, 30}$')).required(),
            confirmPassword: Joi.ref('password')
        });

        const { error } = registerSchema.validate(req.body);

        if (error) {
           return next(error);
        }

        res.json(
            {
                "message": "Hello from Express JS!"
            }
        )
    }
}

export default registerController;