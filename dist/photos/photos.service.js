"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosService = void 0;
const common_1 = require("@nestjs/common");
const redis_cache_service_1 = require("../cache/redis.cache.service");
const photo_model_1 = require("../models/photo.model");
const users_service_1 = require("../users/users.service");
let PhotosService = class PhotosService {
    constructor(photoRepository, usersService, redisCacheService) {
        this.photoRepository = photoRepository;
        this.usersService = usersService;
        this.redisCacheService = redisCacheService;
    }
    async findAll(userId) {
        const cache = await this.redisCacheService.get(`FIND_ALL_PHOTO:${userId}`);
        if (!cache) {
            let result = this.photoRepository.findAll({
                where: {
                    userId,
                },
            }).then((result) => {
                this.redisCacheService.set(`FIND_ALL_PHOTO:${userId}`, JSON.stringify(result), { ttl: 300 });
                return result;
            });
            ;
        }
        return new Promise(JSON.parse(cache));
    }
    async findOne(id) {
        const cache = await this.redisCacheService.get(`FIND_ON_PHOTO:${id}`);
        if (!cache) {
            return this.photoRepository.findOne({
                where: {
                    id,
                },
            }).then((result) => {
                this.redisCacheService.set(`FIND_ON_PHOTO:${id}`, JSON.stringify(result), { ttl: 300 });
                return result;
            });
        }
        return new Promise(JSON.parse(cache));
    }
    async remove(id) {
        const user = await this.findOne(id);
        await user.destroy();
    }
    async create(createPhotoDto) {
        const photo = new photo_model_1.Photo();
        photo.name = createPhotoDto.name;
        photo.description = createPhotoDto.description;
        photo.filename = createPhotoDto.filename;
        photo.views = createPhotoDto.views;
        photo.isPublished = createPhotoDto.isPublished;
        photo.user = await this.usersService.findOne(createPhotoDto.userId.toString());
        photo.userId = createPhotoDto.userId;
        return await photo.save();
    }
    async update(id, updatePhotoDto) {
        const obj = await this.photoRepository.findOne({
            where: { id, isPublished: true },
        });
        if (obj === null || Object.keys(obj).length === 0) {
            return false;
        }
        obj.name = updatePhotoDto.name;
        obj.description = updatePhotoDto.description;
        obj.filename = updatePhotoDto.filename;
        obj.views = updatePhotoDto.views;
        obj.isPublished = updatePhotoDto.isPublished;
        return await obj.save();
    }
    async delete(id) {
        const obj = await this.photoRepository.findOne({
            where: { id, isPublished: true },
        });
        if (obj === null || Object.keys(obj).length === 0) {
            return false;
        }
        obj.isPublished = false;
        return await obj.save();
    }
};
PhotosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PHOTOS_REPOSITORY')),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        redis_cache_service_1.RedisCacheService])
], PhotosService);
exports.PhotosService = PhotosService;
//# sourceMappingURL=photos.service.js.map