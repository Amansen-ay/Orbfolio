import {Router} from 'express';
import AddLinkController from './addLinkController.js';
import {authMiddleware} from '../middlewares/authenticationMiddleware.js';

const router = Router();

router.post('/',authMiddleware,AddLinkController)

export default router