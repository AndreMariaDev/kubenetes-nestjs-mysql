import { Photo } from '../models/photo.model';
import { UsersService } from '../users/users.service';
import { CreatePhotoInput, UpdatePhotoInput } from './photo.input';
export declare class PhotosService {
    private photoRepository;
    private readonly usersService;
    constructor(photoRepository: typeof Photo, usersService: UsersService);
    findAll(): Promise<Photo[]>;
    findOne(id: string): Promise<Photo>;
    remove(id: string): Promise<void>;
    create(createPhotoDto: CreatePhotoInput): Promise<Photo>;
    update(id: number, updatePhotoDto: UpdatePhotoInput): Promise<Photo | boolean>;
    delete(id: number): Promise<Photo | boolean>;
}
