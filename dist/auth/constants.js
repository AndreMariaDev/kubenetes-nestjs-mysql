"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtModuleConstants = exports.jwtConstants = void 0;
const jwt_1 = require("@nestjs/jwt");
exports.jwtConstants = {
    secret: 'secretKey',
};
exports.JwtModuleConstants = jwt_1.JwtModule.register({
    secret: exports.jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
});
//# sourceMappingURL=constants.js.map