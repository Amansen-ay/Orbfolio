export interface ReorderLinksInput {
    userId: string,
    links: {
        id: string,
        order: number
    }[]
}