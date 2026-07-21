import {mongooseAddLinkRepository} from '../../infrastructure/persistence/mongoose/links/mongooseAddLinkRepository.js';
import {AddLink} from '../../application/links/useCases/addLink.js';

export const addLinkRepo = new mongooseAddLinkRepository();
export const addLink = new AddLink(addLinkRepo);