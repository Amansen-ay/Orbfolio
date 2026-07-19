import MongooseUserRepository from '../infrastructure/persistence/mongoose/mongooseUserRepository.js';
import BcryptPasswordHasher from '../infrastructure/security/bcryptPasswordHasher.js';
import { JwtTokenProvider } from '../infrastructure/security/jwtTokenProvider.js';
import { LoginUser } from '../application/user/loginUser.js';
import { RegisterUser } from '../application/user/registerUser.js';

const repo = new MongooseUserRepository();
const hasher = new BcryptPasswordHasher();
export const tokenProvider = new JwtTokenProvider();
export const loginUser = new LoginUser(repo, hasher, tokenProvider);
export const registerUser = new RegisterUser(repo, hasher);