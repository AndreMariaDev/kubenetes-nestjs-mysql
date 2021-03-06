"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const photos_resolver_1 = require("./photos.resolver");
const photos_service_1 = require("./photos.service");
const photos_providers_1 = require("./photos.providers");
const users_module_1 = require("../users/users.module");
const redis_cache_module_1 = require("../cache/redis.cache.module");
let PhotosModule = class PhotosModule {
};
PhotosModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, users_module_1.UsersModule, redis_cache_module_1.RedisCacheModule],
        providers: [photos_resolver_1.PhotosResolver, photos_service_1.PhotosService, ...photos_providers_1.photosProviders]
    })
], PhotosModule);
exports.PhotosModule = PhotosModule;
//# sourceMappingURL=photos.module.js.map