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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("../models/user.model");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
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
    async findOneData(id) {
        return this.userRepository.findOne({
            raw: true,
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
        const user = new user_model_1.User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
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
        obj.firstName = user.firstName;
        obj.lastName = user.lastName;
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
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USERS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map