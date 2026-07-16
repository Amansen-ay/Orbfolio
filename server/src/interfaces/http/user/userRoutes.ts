import {Router} from 'express';
import createUser from './registerUserController.js'
import loginUserController from './loginUserController.js'

const router = Router();

router.post('/register',createUser);
router.post('/login',loginUserController);

export default router 