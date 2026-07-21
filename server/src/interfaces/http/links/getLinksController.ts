import { Request, Response } from 'express';
import { getLinks } from '../../../compositions/links/linkComposition.js';

const GetLinksController = async (req: Request, res: Response): Promise<void> => {
    try {
        const allLinks = await getLinks.execute(req.user.userId);
        res.json(allLinks)
    }
    catch (err: unknown) {
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

export default GetLinksController