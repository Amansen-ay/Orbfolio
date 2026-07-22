import { Link } from '../../../domain/links/link.js';
import { AddLinkRepository } from '../ports/addLinkRepository.js';
import { UpdateLinkInput } from '../updateLinkInput.js';
import { MAX_TITLE_LENGTH } from '../../../domain/links/linkConstants.js';

export class UpdateLink {
    private addLinkRepository: AddLinkRepository;

    constructor(
        addLinkRepository: AddLinkRepository
    ) {
        this.addLinkRepository = addLinkRepository;
    }
    async execute(input: UpdateLinkInput): Promise<Link> {

        const link = await this.addLinkRepository.findLinkById(input.id);
        if (!link) {
            throw new Error("Link not found")
        }

        if (link.userId !== input.userId) {

            throw new Error("You are not authorized to update this link.")
        }

        if (input.title !== undefined) {

            if (input.title.trim().length === 0) {
                throw new Error("Title is required.");

            }

            if (input.title.length > MAX_TITLE_LENGTH) {

                throw new Error("Title must not exceed 50 characters.")
            }

            link.title = input.title.trim();

        }

        if (input.url !== undefined) {

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
            link.url = url.toString();
        }

        if (input.isActive !== undefined) {

            link.isActive = input.isActive;

        }

        link.updatedAt = new Date();

        const updatedLink = await this.addLinkRepository.updateLink(link);

        return updatedLink

    }
}