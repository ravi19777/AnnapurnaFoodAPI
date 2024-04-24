import express from 'express';
import { registerController } from '../Controller';

const router = express.Router();

router.post('/user/register', registerController.register);

export default router;