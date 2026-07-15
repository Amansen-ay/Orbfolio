import {Router} from 'express';
import createUser from './registerUserController.js'

const router = Router();

router.post('/register',createUser);

export default router 