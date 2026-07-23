import {Router} from 'express';
import AddLinkController from './addLinkController.js';
import {authMiddleware} from '../middlewares/authenticationMiddleware.js';
import GetLinkController from './getLinksController.js';
import UpdateLinkController from './updateLinkController.js'
import DeleteLinkController from './deleteLinkController.js';
import ReorderLinksController from './reorderLinksController.js';

const router = Router();

router.post('/',authMiddleware,AddLinkController);
router.get('/',authMiddleware,GetLinkController);
router.patch<{id:string}>('/:id',authMiddleware,UpdateLinkController);
router.delete<{id:string}>('/:id',authMiddleware,DeleteLinkController);
router.patch('/',authMiddleware,ReorderLinksController);
export default router