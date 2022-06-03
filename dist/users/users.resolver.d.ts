import { UserType } from './user.dto';
import { CreateUserInput, UpdateUserInput } from './user.input';
import { UsersService } from './users.service';
export declare class UserResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<UserType[]>;
    findOne(id: string): Promise<import("../models/user.model").User>;
    create(input: CreateUserInput): Promise<UserType>;
    update(id: number, input: UpdateUserInput): Promise<any>;
    delete(id: number): Promise<void>;
}
