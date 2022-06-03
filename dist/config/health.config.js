"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthConfig = void 0;
const dotenvFlow = require("dotenv-flow");
dotenvFlow.config({
    silent: true
});
exports.healthConfig = {
    nodeDockerPort: process.env.NODE_DOCKER_PORT,
    nodeDockerHost: process.env.NODE_DOCKER_HOST,
};
//# sourceMappingURL=health.config.js.map