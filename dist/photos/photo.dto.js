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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUploadProfilePicType = exports.PhotoType = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_dto_1 = require("../users/user.dto");
let PhotoType = class PhotoType {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], PhotoType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PhotoType.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PhotoType.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PhotoType.prototype, "filename", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], PhotoType.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], PhotoType.prototype, "isPublished", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", user_dto_1.UserType)
], PhotoType.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], PhotoType.prototype, "userId", void 0);
PhotoType = __decorate([
    (0, graphql_1.ObjectType)()
], PhotoType);
exports.PhotoType = PhotoType;
let UserUploadProfilePicType = class UserUploadProfilePicType {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], UserUploadProfilePicType.prototype, "success", void 0);
UserUploadProfilePicType = __decorate([
    (0, graphql_1.ObjectType)('UserUploadProfilePicType')
], UserUploadProfilePicType);
exports.UserUploadProfilePicType = UserUploadProfilePicType;
//# sourceMappingURL=photo.dto.js.map