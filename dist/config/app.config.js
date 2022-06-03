"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const dotenvFlow = require("dotenv-flow");
dotenvFlow.config({
    silent: true
});
exports.appConfig = {
    timeout: parseInt(process.env.TIMEOUT_REQUEST_SECONDS, 10) * 1000,
};
//# sourceMappingURL=app.config.js.map