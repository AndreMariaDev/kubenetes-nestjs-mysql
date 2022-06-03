"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsersProviders = void 0;
const login_model_1 = require("../models/login.model");
exports.loginUsersProviders = [
    {
        provide: 'LOGINUSERS_REPOSITORY',
        useValue: login_model_1.LoginUser,
    },
];
//# sourceMappingURL=login.providers.js.map