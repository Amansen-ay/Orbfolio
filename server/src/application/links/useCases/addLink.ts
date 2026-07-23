import { AddLinkRepository } from '../ports/addLinkRepository.js';
import { AddLinkInput } from '../addLinkInput.js';
import { Link } from '../../../domain/links/link.js';
import { randomUUID } from "node:crypto";
import { MAX_TITLE_LENGTH, FREE_MAX_LINKS } from '../../../domain/links/linkConstants.js';

export class AddLink {

    private addLinkRepository: AddLinkRepository;

    constructor(
        addLinkRepository: AddLinkRepository
    ) {
        this.addLinkRepository = addLinkRepository
    }

    async execute(input: AddLinkInput): Promise<Link> {

        if (input.title.trim().length === 0) {
            throw new Error("Title is required.");
        }

        if (input.title.length > MAX_TITLE_LENGTH) {

            throw new Error("Title must not exceed 50 characters.")
        }
        
        let url: URL;

        try {
            const rawUrl = input.url.trim();
            url = new URL(rawUrl);

        }
        catch {
            throw new Error("Invalid URL")
        }


        if (url.protocol !== "http:" && url.protocol !== "https:") {
            throw new Error("URL must use http or https.")
        }

        const numberOfLinksAdded = await this.addLinkRepository.countByUserId(input.userId);

        if (numberOfLinksAdded >= FREE_MAX_LINKS) {
            throw new Error("Maximum number of links reached.");
        }

        const nextOrder = await this.addLinkRepository.getNextOrder(input.userId);

        const link: Link = {
            id: randomUUID(),
            userId: input.userId,
            title: input.title.trim(),
            url: url.toString(),
            order: nextOrder,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const savedLink = await this.addLinkRepository.save(link);

        return savedLink
    }
}