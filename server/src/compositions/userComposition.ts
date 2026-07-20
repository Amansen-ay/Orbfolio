import MongooseUserRepository from '../infrastructure/persistence/mongoose/mongooseUserRepository.js';
import BcryptPasswordHasher from '../infrastructure/security/bcryptPasswordHasher.js';
import { JwtTokenProvider } from '../infrastructure/security/jwtTokenProvider.js';
import { LoginUser } from '../application/user/useCases/loginUser.js';
import { RegisterUser } from '../application/user/useCases/registerUser.js';
import {UpdateProfile} from '../application/user/useCases/updateProfile.js';
import {GetPublicUser} from '../application/user/useCases/getPublicUser.js';
import {GetCurrentUser} from '../application/user/useCases/getCurrentUser.js';

const repo = new MongooseUserRepository();
const hasher = new BcryptPasswordHasher();
export const tokenProvider = new JwtTokenProvider();
export const loginUser = new LoginUser(repo, hasher, tokenProvider);
export const registerUser = new RegisterUser(repo, hasher);
export const updateProfile = new UpdateProfile(repo);
export const getpublicUser = new GetPublicUser(repo);
export const getCurrentUser = new GetCurrentUser(repo)