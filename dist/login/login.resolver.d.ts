import { LoginType } from './login.dto';
import { CreateLoginUserInput, UpdateLoginUserInput, ValidationLoginUserInput } from './login.input';
import { LoginUsersService } from './login.service';
export declare class LoginUserResolver {
    private readonly loginService;
    constructor(loginService: LoginUsersService);
    login(input: ValidationLoginUserInput): Promise<void | {
        access_token: string;
    }>;
    validateUserLogin(input: ValidationLoginUserInput): Promise<import("../models/login.model").LoginUser>;
    create(input: CreateLoginUserInput): Promise<LoginType>;
    update(id: number, input: UpdateLoginUserInput): Promise<any>;
    delete(id: number): Promise<void>;
    whoAmI(login: any): Promise<any>;
}
