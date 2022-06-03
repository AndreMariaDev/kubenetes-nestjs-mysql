import { UsersService } from '../users/users.service';
import { LoginUser } from '../models/login.model';
import { LoginType } from './login.dto';
import { CreateLoginUserInput, UpdateLoginUserInput, ValidationLoginUserInput } from './login.input';
import { User } from 'src/models/user.model';
import { JwtService } from '@nestjs/jwt';
export declare class LoginUsersService {
    private readonly userRepository;
    private readonly userService;
    private jwtService;
    constructor(userRepository: typeof LoginUser, userService: UsersService, jwtService: JwtService);
    validateLogin(input: ValidationLoginUserInput): Promise<void | {
        access_token: string;
    }>;
    validateUser(input: ValidationLoginUserInput): Promise<LoginUser>;
    whoAmI(userName: string): Promise<User>;
    validateUserLogin(input: ValidationLoginUserInput): Promise<LoginUser>;
    findAll(): Promise<LoginUser[]>;
    findOne(id: string): Promise<LoginUser>;
    remove(id: string): Promise<void>;
    create(createUserDto: CreateLoginUserInput): Promise<LoginType>;
    update(id: number, user: UpdateLoginUserInput): Promise<LoginType | boolean>;
    delete(id: number): Promise<LoginType | boolean>;
}
