import {Router} from 'express';
import createUser from './registerUserController.js'
import loginUserController from './loginUserController.js';
import getCurrentUser from './getCurrentUserControler.js';
import {authMiddleware} from '../middlewares/authenticationMiddleware.js';

const router = Router();

router.post('/register',createUser);
router.post('/login',loginUserController);
router.get('/me',authMiddleware,getCurrentUser);

export default router 