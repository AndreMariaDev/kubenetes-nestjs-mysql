"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUsersModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const login_service_1 = require("./login.service");
const login_providers_1 = require("./login.providers");
const login_resolver_1 = require("./login.resolver");
const auth_module_1 = require("../auth/auth.module");
const users_module_1 = require("../users/users.module");
const constants_1 = require("../auth/constants");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("../auth/jwt.strategy");
const GraphqlAuthGuard_1 = require("../auth/GraphqlAuthGuard ");
let LoginUsersModule = class LoginUsersModule {
};
LoginUsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            database_module_1.DatabaseModule,
            constants_1.JwtModuleConstants,
            auth_module_1.AuthModule,
            users_module_1.UsersModule
        ],
        providers: [
            login_resolver_1.LoginUserResolver,
            login_service_1.LoginUsersService, ...login_providers_1.loginUsersProviders,
            jwt_strategy_1.JwtStrategy,
            GraphqlAuthGuard_1.GraphqlAuthGuard
        ],
        exports: [login_service_1.LoginUsersService]
    })
], LoginUsersModule);
exports.LoginUsersModule = LoginUsersModule;
//# sourceMappingURL=login.module.js.map