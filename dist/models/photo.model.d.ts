import { Model } from 'sequelize-typescript';
import { User } from './user.model';
export declare class Photo extends Model<Photo> {
    id: number;
    name: string;
    description: string;
    filename: string;
    views: number;
    isPublished: boolean;
    user: User;
    userId: number;
}
