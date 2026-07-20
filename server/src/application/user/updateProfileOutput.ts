export interface updateProfileOutput {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username?: string,
    displayName?: string,
    bio?: string,
    avatar?: string,
    country?: string,
    state?: string,
    dateOfBirth?: Date,
    createdAt: Date,
    updatedAt: Date
}