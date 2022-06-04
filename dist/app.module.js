"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./users/users.module");
const photos_module_1 = require("./photos/photos.module");
const auth_module_1 = require("./auth/auth.module");
const login_module_1 = require("./login/login.module");
const database_module_1 = require("./database/database.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            photos_module_1.PhotosModule,
            auth_module_1.AuthModule,
            login_module_1.LoginUsersModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: 'schema.gql',
                context: ({ req }) => ({ req }),
                formatError: (error) => {
                    var _a, _b, _c;
                    const graphQLFormattedError = {
                        message: ((_c = (_b = (_a = error === null || error === void 0 ? void 0 : error.extensions) === null || _a === void 0 ? void 0 : _a.exception) === null || _b === void 0 ? void 0 : _b.code) === null || _c === void 0 ? void 0 : _c.toString()) || (error === null || error === void 0 ? void 0 : error.message),
                    };
                    return graphQLFormattedError;
                },
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map