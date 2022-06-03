"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const user_model_1 = require("../models/user.model");
exports.usersProviders = [
    {
        provide: 'USERS_REPOSITORY',
        useValue: user_model_1.User,
    },
];
//# sourceMappingURL=user.providers.js.map