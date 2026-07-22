import {Link} from '../../../domain/links/link.js';
export interface AddLinkRepository{
    countByUserId(userId:string):Promise<number>;
    getNextOrder(userId:string):Promise<number>;
    findLinksByUserId(userId:string):Promise<Link[]>;
    findLinkById(id:string):Promise<Link|null>;
    updateLink(link:Link):Promise<Link>;
    save(link:Link):Promise<Link>;
    deleteLink(id:string):Promise<void>;
}