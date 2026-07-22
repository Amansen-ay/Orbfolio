import { Request, Response } from 'express';
import { updateLink } from '../../../compositions/links/linkComposition.js';


type UpdateLinkParams = {
    id: string;
};

const UpdateLinkController = async (req: Request<UpdateLinkParams>, res: Response): Promise<void> => {
    
    try {
        const updatedLink = await updateLink.execute({
            userId: req.user.userId,
            id : req.params.id,
            title: req.body.title,
            url: req.body.url,
            isActive: req.body.isActive
        });

        res.json(updatedLink)
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({
                message: err.message
            })
        }
        else {
            res.status(400).json({
                message: "Unknown Error"
            })
        }
    }
}

export default UpdateLinkController