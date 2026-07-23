import {mongooseAddLinkRepository} from '../../infrastructure/persistence/mongoose/links/mongooseAddLinkRepository.js';
import {AddLink} from '../../application/links/useCases/addLink.js';
import {GetLinks} from '../../application/links/useCases/getLinks.js';
import {UpdateLink} from '../../application/links/useCases/updateLink.js';
import {DeleteLink} from '../../application/links/useCases/deleteLink.js';
import {ReorderLinks} from '../../application/links/useCases/reorderLinks.js';

export const addLinkRepo = new mongooseAddLinkRepository();
export const addLink = new AddLink(addLinkRepo);
export const getLinks = new GetLinks(addLinkRepo);
export const updateLink = new UpdateLink(addLinkRepo);
export const deleteLink = new DeleteLink(addLinkRepo);
export const reorderLinks = new ReorderLinks(addLinkRepo);