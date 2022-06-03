"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUsersService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const login_model_1 = require("../models/login.model");
const jwt_1 = require("@nestjs/jwt");
let LoginUsersService = class LoginUsersService {
    constructor(userRepository, userService, jwtService) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateLogin(input) {
        return await this.validateUserLogin(input).then(async (result) => {
            if (result && result.isActive) {
                const payload = { username: result.userName, sub: result.userId };
                return {
                    access_token: this.jwtService.sign(payload),
                };
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }).catch(error => console.log(`Error method loginUsersService.validateUserLogin:${error}`));
    }
    async validateUser(input) {
        return await this.validateUserLogin(input);
    }
    async whoAmI(userName) {
        return this.userRepository.findOne({
            raw: true,
            where: {
                userName: userName
            }
        }).then(response => {
            if (response) {
                return this.userService.findOneData(response.userId.toString()).then(userResponse => {
                    return userResponse;
                });
            }
        });
    }
    async validateUserLogin(input) {
        let userName = input.userName;
        let password = input.password;
        let result = this.userRepository.findOne({
            raw: true,
            where: {
                userName: userName,
                password: password,
            },
        });
        return result;
    }
    async findAll() {
        return this.userRepository.findAll();
    }
    async findOne(id) {
        return this.userRepository.findOne({
            where: {
                id,
            },
        });
    }
    async remove(id) {
        const user = await this.findOne(id);
        await user.destroy();
    }
    async create(createUserDto) {
        const user = new login_model_1.LoginUser();
        user.userName = createUserDto.userName;
        user.password = createUserDto.password;
        user.isActive = true;
        return await user.save();
    }
    async update(id, user) {
        const obj = await this.userRepository.findOne({
            where: { id, isActive: true },
        });
        if (obj === null || Object.keys(obj).length === 0) {
            return false;
        }
        obj.userName = user.userName;
        obj.password = user.password;
        obj.isActive = user.isActive;
        return await obj.save();
    }
    async delete(id) {
        const obj = await this.userRepository.findOne({
            where: { id, isActive: true },
        });
        if (obj === null || Object.keys(obj).length === 0) {
            return false;
        }
        obj.isActive = false;
        return await obj.save();
    }
};
LoginUsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('LOGINUSERS_REPOSITORY')),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        jwt_1.JwtService])
], LoginUsersService);
exports.LoginUsersService = LoginUsersService;
//# sourceMappingURL=login.service.js.map