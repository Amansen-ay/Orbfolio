export interface RegisterUserOutput {
    token: string,
    user: {
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        createdAt: Date
    }
}