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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_dto_1 = require("./user.dto");
const user_input_1 = require("./user.input");
const users_service_1 = require("./users.service");
let UserResolver = class UserResolver {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findAll() {
        return this.usersService.findAll();
    }
    async findOne(id) {
        return this.usersService.findOne(id);
    }
    async create(input) {
        return this.usersService.create(input);
    }
    async update(id, input) {
        return await this.usersService.update(id, input).then(result => {
            if (result) {
                return result;
            }
            return null;
        }).catch(error => { return error; });
    }
    async delete(id) {
        const result = await this.usersService.delete(id).then(result => {
            if (result) {
                return 'Ok';
            }
            return 'error';
        }).catch(error => { return error; });
    }
};
__decorate([
    (0, graphql_1.Query)(() => [user_dto_1.UserType], { name: 'findAllUsers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => user_dto_1.UserType, { name: 'findOneUser' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_dto_1.UserType, { name: 'createUser' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Mutation)(returns => user_dto_1.UserType, { name: 'updateUser' }),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_input_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)(returns => String, { name: 'deleteUser' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "delete", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=users.resolver.js.map