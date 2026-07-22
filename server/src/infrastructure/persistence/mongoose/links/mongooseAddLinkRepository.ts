import { AddLinkRepository } from '../../../../application/links/ports/addLinkRepository.js';
import LinkModel from './linkModel.js';
import { Link } from '../../../../domain/links/link.js';

export class mongooseAddLinkRepository implements AddLinkRepository {

    async countByUserId(userId: string): Promise<number> {
        const totalLinks = await LinkModel.countDocuments({ userId });
        return totalLinks
    }
    async getNextOrder(userId: string): Promise<number> {

        const lastLink = await LinkModel.findOne({ userId }).sort({ order: -1 });

        if (!lastLink) {
            return 1
        }
        return lastLink.order + 1;
    }
    async save(link: Link): Promise<Link> {
        const savedLink = await LinkModel.create(link);
        return savedLink;
    }
    async findLinksByUserId(userId: string): Promise<Link[]> {

        const allLinks = await LinkModel.find({ userId }).sort({ order: 1 });
        return allLinks
    }
    async findLinkById(id: string): Promise<Link | null> {

        const link = await LinkModel.findOne({ id })

        if (!link) {
            return null
        }

        return link
    }
    async updateLink(link: Link): Promise<Link> {

        const updatedLink = await LinkModel.findOneAndUpdate({ id: link.id }, link, { new: true });
        if (!updatedLink) {
            throw new Error("Link not found");
        }

        return updatedLink
    }
    async deleteLink(id:string):Promise<void>{
        await LinkModel.findOneAndDelete({id})
    }
}