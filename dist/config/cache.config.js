"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheConfig = void 0;
const dotenvFlow = require("dotenv-flow");
dotenvFlow.config({
    silent: true
});
exports.cacheConfig = {
    cacheLongPeriod: process.env.CACHE_LONG_PERIOD,
    cacheShortPeriod: process.env.CACHE_SHORT_PERIOD,
    redisHost: process.env.REDIS_HOST,
    redisPassword: process.env.REDIS_PASSWORD,
    redisPort: process.env.REDIS_PORT,
};
//# sourceMappingURL=cache.config.js.map