export declare class CreateLoginUserInput {
    readonly userName: string;
    readonly password: string;
    readonly isActive: boolean;
    readonly userId: number;
}
export declare class UpdateLoginUserInput {
    readonly id: number;
    readonly userName: string;
    readonly password: string;
    readonly isActive: boolean;
    readonly userId: number;
}
export declare class ValidationLoginUserInput {
    userName: string;
    password: string;
}
