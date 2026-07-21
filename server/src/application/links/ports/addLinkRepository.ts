import {Link} from '../../../domain/links/link.js';
export interface AddLinkRepository{
    countByUserId(userId:string):Promise<number>;
    getNextOrder(userId:string):Promise<number>;
    save(link:Link):Promise<Link>;
}