import {Link} from '../../../domain/links/link.js';
import {AddLinkRepository} from '../ports/addLinkRepository.js';

export class GetLinks{
    private addLinkRepository:AddLinkRepository;
    constructor(
        addLinkRepository:AddLinkRepository
    ){
        this.addLinkRepository = addLinkRepository;
    }
    async execute(userId:string):Promise<Link[]>{
        const allLinks = await this.addLinkRepository.findLinksByUserId(userId);
        return allLinks
    }
}