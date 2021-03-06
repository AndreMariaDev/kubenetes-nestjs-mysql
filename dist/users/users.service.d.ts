import { RedisCacheService } from '../cache/redis.cache.service';
import { User } from '../models/user.model';
import { UserType } from './user.dto';
import { CreateUserInput, UpdateUserInput } from './user.input';
export declare class UsersService {
    private readonly userRepository;
    readonly redisCacheService: RedisCacheService;
    constructor(userRepository: typeof User, redisCacheService: RedisCacheService);
    findAll(): Promise<UserType[]>;
    findOne(id: string): Promise<User>;
    findOneData(id: string): Promise<User>;
    remove(id: string): Promise<void>;
    create(createUserDto: CreateUserInput): Promise<UserType>;
    update(id: number, user: UpdateUserInput): Promise<UserType | boolean>;
    delete(id: number): Promise<UserType | boolean>;
}
