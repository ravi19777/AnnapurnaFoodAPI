import { DEBUG_MODE } from "../Config";
import { ValidationError } from 'joi';

const errorHandler = (error, req, res, next) => {
    let statusCode = 500;
    let data = {
        message: "Internal server error",
        ...(DEBUG_MODE === 'true' && {originalError: error.message})
    }

    if (error instanceof ValidationError) {
        statusCode = 422;
        data = {
            message: error.message
        }
    }

    return res.status(statusCode).json(data);
}

export default errorHandler;