import {Request,Response} from 'express';

const getCurrentUser = (req:Request,res:Response):void => {
    try{
        res.json(req.user)
    }
    catch(err:unknown){
        if(err instanceof Error) {
            res.status(500).json({
                message:err.message
            })
        }
        else{
            res.status(500).json({
                message:"Unknown error"
            })
        }
    }
}

export default getCurrentUser;