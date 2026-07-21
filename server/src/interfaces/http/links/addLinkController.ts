import {Request,Response} from 'express';
import {addLink} from '../../../compositions/links/linkComposition.js';
const AddLinkController = async (req:Request,res:Response):Promise<void>=>{
    try{
        const addedLink= await addLink.execute({
            userId:req.user.userId,
            title:req.body.title,
            url:req.body.url
        });

        res.status(201).json(addedLink)
    }
    catch(err:unknown){
        if(err instanceof Error){
            res.status(400).json({
                message:err.message
            })
        }
        else{
            res.status(400).json({
                message:"Unkown error"
            })
        }
    }
}
export default AddLinkController