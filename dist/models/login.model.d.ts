import { Model } from 'sequelize-typescript';
export declare class LoginUser extends Model<LoginUser> {
    id: number;
    userName: string;
    password: string;
    isActive: boolean;
    userId: number;
}
