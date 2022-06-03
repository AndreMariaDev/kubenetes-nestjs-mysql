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
exports.PhotosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const photos_service_1 = require("./photos.service");
const photo_dto_1 = require("./photo.dto");
const photo_input_1 = require("./photo.input");
let PhotosResolver = class PhotosResolver {
    constructor(photosService) {
        this.photosService = photosService;
    }
    async findAll() {
        return this.photosService.findAll();
    }
    async findOne(id) {
        return this.photosService.findOne(id);
    }
    async create(input) {
        return this.photosService.create(input);
    }
    async update(id, input) {
        return await this.photosService.update(id, input).then(result => {
            if (result) {
                return result;
            }
            return null;
        }).catch(error => { return error; });
    }
    async delete(id) {
        const result = await this.photosService.delete(id).then(result => {
            if (result) {
                return 'Ok';
            }
            return 'error';
        }).catch(error => { return error; });
    }
};
__decorate([
    (0, graphql_1.Query)(() => [photo_dto_1.PhotoType], { name: 'findAllPhotos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhotosResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => photo_dto_1.PhotoType, { name: 'findOnePhoto' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhotosResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => photo_dto_1.PhotoType, { name: 'createPhoto' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [photo_input_1.CreatePhotoInput]),
    __metadata("design:returntype", Promise)
], PhotosResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Mutation)(returns => photo_dto_1.PhotoType, { name: 'updatePhoto' }),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, photo_input_1.UpdatePhotoInput]),
    __metadata("design:returntype", Promise)
], PhotosResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)(returns => String, { name: 'deletePhoto' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PhotosResolver.prototype, "delete", null);
PhotosResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [photos_service_1.PhotosService])
], PhotosResolver);
exports.PhotosResolver = PhotosResolver;
//# sourceMappingURL=photos.resolver.js.map