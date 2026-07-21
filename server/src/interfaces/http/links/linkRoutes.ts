import {Router} from 'express';
import AddLinkController from './addLinkController.js';
import {authMiddleware} from '../middlewares/authenticationMiddleware.js';
import GetLinkController from './getLinksController.js';

const router = Router();

router.post('/',authMiddleware,AddLinkController)
router.get('/',authMiddleware,GetLinkController)

export default router