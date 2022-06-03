import { UserType } from "../users/user.dto";
export declare class PhotoType {
    id: number;
    name: string;
    description: string;
    filename: string;
    views: number;
    isPublished: boolean;
    user: UserType;
    userId: number;
}
export declare class UserUploadProfilePicType {
    success: boolean;
}
