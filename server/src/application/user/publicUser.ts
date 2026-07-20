export interface PublicUser {
    firstName: string;
    lastName: string;
    username?: string;
    displayName?: string;
    bio?: string;
    avatar?: string;
    country?: string;
    state?: string;
    dateOfBirth?:Date
}