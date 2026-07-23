import { RequestHandler } from "express";
import {reorderLinks} from '../../../compositions/links/linkComposition.js';

const ReorderLinksController:RequestHandler = async (req,res):Promise<void> => {
    try{
        await reorderLinks.execute({
            userId:req.user.userId,
            links:req.body.links
        });
        res.sendStatus(204)
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

export default ReorderLinksController