import {Link} from '../../../domain/links/link.js';
export interface AddLinkRepository{
    countByUserId(userId:string):Promise<number>;
    getNextOrder(userId:string):Promise<number>;
    findByUserId(userId:string):Promise<Link[]>
    save(link:Link):Promise<Link>;
}