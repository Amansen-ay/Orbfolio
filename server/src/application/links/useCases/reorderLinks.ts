import { AddLinkRepository } from '../ports/addLinkRepository.js';
import { ReorderLinksInput } from '../reoerderLinksInput.js';

export class ReorderLinks {
    constructor(
        private addLinkRepository: AddLinkRepository
    ) { }

    async execute(input: ReorderLinksInput): Promise<void> {

        if (input.links.length === 0) {
            throw new Error("Atleast one link is required")
        }

        for (const link of input.links) {
            if (!link.id) {
                throw new Error("Link id is required.");
            }

            if (!Number.isInteger(link.order)) {
                throw new Error("Order must be an integer.");
            }

            if (link.order < 1) {
                throw new Error("Order must be greater than zero.");
            }
        }

        const orders = new Set<number>();

        for (const link of input.links) {
            if (orders.has(link.order)) {
                throw new Error("Duplicate order numbers are not allowed")
            }
            orders.add(link.order);
        }

        const Ids = new Set<string>();

        for(const link of input.links){
            if(Ids.has(link.id)){
                throw new Error("Can not send duplicate id.")
            }
            Ids.add(link.id);
        }


        for (const link of input.links) {
            const existingLink = await this.addLinkRepository.findLinkById(link.id);
            if (!existingLink) {
                throw new Error("Link not found.");
            }

            if (existingLink.userId !== input.userId) {
                throw new Error("You are not authorized to reorder this link.")
            }
        }


        await this.addLinkRepository.reorderLinks(input.links);

    }
}