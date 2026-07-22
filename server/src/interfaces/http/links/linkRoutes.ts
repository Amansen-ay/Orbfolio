import {Router} from 'express';
import AddLinkController from './addLinkController.js';
import {authMiddleware} from '../middlewares/authenticationMiddleware.js';
import GetLinkController from './getLinksController.js';
import UpdateLinkController from './updateLinkController.js'

const router = Router();

router.post('/',authMiddleware,AddLinkController);
router.get('/',authMiddleware,GetLinkController);
router.patch('/:id',authMiddleware,UpdateLinkController);

export default router