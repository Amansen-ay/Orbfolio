import {AddLinkRepository} from '../../../../application/links/ports/addLinkRepository.js';
import LinkModel from './linkModel.js';
import {Link} from '../../../../domain/links/link.js';

export class mongooseAddLinkRepository implements AddLinkRepository{

    async countByUserId(userId:string):Promise<number>{
        const totalLinks = await LinkModel.countDocuments({userId});
        return totalLinks
    }
    async getNextOrder(userId:string):Promise<number>{

        const lastLink = await LinkModel.findOne({userId}).sort({order:-1});

        if(!lastLink){
            return 1
        }
        return lastLink.order + 1 ;
    }
    async save(link:Link):Promise<Link>{
        const savedLink = await LinkModel.create(link);
        return savedLink;
    }
    async findByUserId(userId:string):Promise<Link[]>{

        const allLinks = await LinkModel.find({userId}).sort({order:1});
        return allLinks
    }
}