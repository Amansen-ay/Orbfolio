import {Router} from 'express';
import createUser from './registerUserController.js'
import loginUserController from './loginUserController.js';
import getCurrentUserController from './getCurrentUserControler.js';
import {authMiddleware} from '../middlewares/authenticationMiddleware.js';
import UpdateProfileController from './updateProfileController.js';
import getPublicUserController from './getPublicUserController.js';

const router = Router();

router.post('/register',createUser);
router.post('/login',loginUserController);
router.get('/me',authMiddleware,getCurrentUserController);
router.patch('/me',authMiddleware,UpdateProfileController);
router.get('/:username',getPublicUserController)

export default router