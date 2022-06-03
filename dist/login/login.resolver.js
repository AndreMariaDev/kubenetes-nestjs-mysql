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
exports.LoginUserResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const login_dto_1 = require("./login.dto");
const login_input_1 = require("./login.input");
const login_service_1 = require("./login.service");
const user_decorator_1 = require("../decorators/user.decorator");
const user_dto_1 = require("../users/user.dto");
const GraphqlAuthGuard_1 = require("../auth/GraphqlAuthGuard ");
let LoginUserResolver = class LoginUserResolver {
    constructor(loginService) {
        this.loginService = loginService;
    }
    async login(input) {
        return this.loginService.validateLogin(input);
    }
    async validateUserLogin(input) {
        return this.loginService.validateUserLogin(input);
    }
    async create(input) {
        return this.loginService.create(input);
    }
    async update(id, input) {
        return await this.loginService.update(id, input).then(result => {
            if (result) {
                return result;
            }
            return null;
        }).catch(error => { return error; });
    }
    async delete(id) {
        const result = await this.loginService.delete(id).then(result => {
            if (result) {
                return 'Ok';
            }
            return 'error';
        }).catch(error => { return error; });
    }
    async whoAmI(login) {
        return this.loginService.whoAmI(login.
            username.toString())
            .then(result => {
            if (result) {
                return result;
            }
        }).catch(error => { return error; });
        ;
    }
};
__decorate([
    (0, graphql_1.Mutation)(returns => login_dto_1.AccessTokenType, { name: 'login' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.ValidationLoginUserInput]),
    __metadata("design:returntype", Promise)
], LoginUserResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(returns => login_dto_1.LoginType, { name: 'validateUserLogin' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.ValidationLoginUserInput]),
    __metadata("design:returntype", Promise)
], LoginUserResolver.prototype, "validateUserLogin", null);
__decorate([
    (0, graphql_1.Mutation)(() => login_dto_1.LoginType, { name: 'createLoginUser' }),
    (0, common_1.UseGuards)(GraphqlAuthGuard_1.GraphqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.CreateLoginUserInput]),
    __metadata("design:returntype", Promise)
], LoginUserResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Mutation)(returns => login_dto_1.LoginType, { name: 'updateLoginUser' }),
    (0, common_1.UseGuards)(GraphqlAuthGuard_1.GraphqlAuthGuard),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, login_input_1.UpdateLoginUserInput]),
    __metadata("design:returntype", Promise)
], LoginUserResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)(returns => String, { name: 'deleteLoginUser' }),
    (0, common_1.UseGuards)(GraphqlAuthGuard_1.GraphqlAuthGuard),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LoginUserResolver.prototype, "delete", null);
__decorate([
    (0, graphql_1.Query)(() => user_dto_1.UserType, { name: 'whoAmI' }),
    (0, common_1.UseGuards)(GraphqlAuthGuard_1.GraphqlAuthGuard),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginUserResolver.prototype, "whoAmI", null);
LoginUserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [login_service_1.LoginUsersService])
], LoginUserResolver);
exports.LoginUserResolver = LoginUserResolver;
//# sourceMappingURL=login.resolver.js.map