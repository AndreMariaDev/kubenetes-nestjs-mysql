import { RedisCacheService } from '../cache/redis.cache.service';
import { Photo } from '../models/photo.model';
import { UsersService } from '../users/users.service';
import { CreatePhotoInput, UpdatePhotoInput } from './photo.input';
export declare class PhotosService {
    private photoRepository;
    private readonly usersService;
    readonly redisCacheService: RedisCacheService;
    constructor(photoRepository: typeof Photo, usersService: UsersService, redisCacheService: RedisCacheService);
    findAll(userId: number): Promise<Photo[]>;
    findOne(id: string): Promise<Photo>;
    remove(id: string): Promise<void>;
    create(createPhotoDto: CreatePhotoInput): Promise<Photo>;
    update(id: number, updatePhotoDto: UpdatePhotoInput): Promise<Photo | boolean>;
    delete(id: number): Promise<Photo | boolean>;
}
