export interface Link {
    id: string;

    userId: string;

    title: string;

    url: string;

    order: number;

    isActive: boolean;

    createdAt: Date;

    updatedAt: Date;
}