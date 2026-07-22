import { AddLinkRepository } from '../ports/addLinkRepository.js';
import { DeleteLinkInput } from '../deleteLinkInput.js';

export class DeleteLink {
    private addLinkrepository: AddLinkRepository;
    constructor(
        addLinkrepository: AddLinkRepository
    ) {
        this.addLinkrepository = addLinkrepository
    }
    async execute(input: DeleteLinkInput): Promise<void> {
        const link = await this.addLinkrepository.findLinkById(input.id)
        if (!link) {
            throw new Error("Link not found.")
        }

        if (input.userId !== link.userId) {
            throw new Error("You are not authorized to delete this link.")
        }

        await this.addLinkrepository.deleteLink(input.id);
    }
}