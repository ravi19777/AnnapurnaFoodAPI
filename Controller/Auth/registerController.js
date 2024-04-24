import joi from 'joi';

const registerController = {
    register(req, res, next) {
        // CHECKLIST FOR REGISTER USER
        // 1. Validate the request.
        // 2. Authorise the request.
        // 3. Check if the user is already registered or not [phone number and email should not match with any existing phone number and email]
        // 4. Prepare model
        // 5. Store in database
        // 6. Generate JWT token
        // 7. Send response
        res.json(
            {
                "message": "Hello from Express JS!"
            }
        )
    }
}

export default registerController;