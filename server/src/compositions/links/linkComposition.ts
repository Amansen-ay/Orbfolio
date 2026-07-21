import {mongooseAddLinkRepository} from '../../infrastructure/persistence/mongoose/links/mongooseAddLinkRepository.js';
import {AddLink} from '../../application/links/useCases/addLink.js';
import {GetLinks} from '../../application/links/useCases/getLinks.js';

export const addLinkRepo = new mongooseAddLinkRepository();
export const addLink = new AddLink(addLinkRepo);
export const getLinks = new GetLinks(addLinkRepo);