export interface UpdateProfileInput {
    userId: string;
    username?: string;
    displayName?: string;
    bio?: string;
    avatar?: string;
    country?: string;
    state?: string;
    dateOfBirth?: Date;
}