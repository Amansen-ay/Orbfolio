import { deleteLink } from '../../../compositions/links/linkComposition.js';
import { RequestHandler } from "express";
interface deleteLinkReqParams {
    id:string
}

const DeleteLinkController:RequestHandler<deleteLinkReqParams> = async (req, res): Promise<void> => {
    try{
        await deleteLink.execute({
            id:req.params.id,
            userId:req.user.userId
        })

        res.sendStatus(204);
    }
    catch(err:unknown){
        if(err instanceof Error){
            res.status(400).json({
                message:err.message
            })
        }
        else{
            res.status(400).json({
                message:"Unknown error"
            })
        }
    }
}

export default DeleteLinkController