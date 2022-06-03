export declare class CreatePhotoInput {
    readonly name: string;
    readonly description: string;
    readonly filename: string;
    readonly isPublished: boolean;
    readonly views: number;
    readonly userId: number;
}
export declare class UpdatePhotoInput {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly filename: string;
    readonly isPublished: boolean;
    readonly views: number;
    readonly userId: number;
}
