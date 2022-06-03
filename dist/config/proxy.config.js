"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyConfig = void 0;
const dotenvFlow = require("dotenv-flow");
dotenvFlow.config({
    silent: true
});
exports.proxyConfig = {
    password: process.env.PROXY_PASSWORD,
    port: process.env.PROXY_PORT,
    server: process.env.PROXY_SERVER,
    user: process.env.PROXY_USER,
};
//# sourceMappingURL=proxy.config.js.map