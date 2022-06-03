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
exports.UpdatePhotoInput = exports.CreatePhotoInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreatePhotoInput = class CreatePhotoInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePhotoInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePhotoInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePhotoInput.prototype, "filename", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreatePhotoInput.prototype, "isPublished", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreatePhotoInput.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreatePhotoInput.prototype, "userId", void 0);
CreatePhotoInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePhotoInput);
exports.CreatePhotoInput = CreatePhotoInput;
let UpdatePhotoInput = class UpdatePhotoInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdatePhotoInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdatePhotoInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdatePhotoInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdatePhotoInput.prototype, "filename", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], UpdatePhotoInput.prototype, "isPublished", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdatePhotoInput.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdatePhotoInput.prototype, "userId", void 0);
UpdatePhotoInput = __decorate([
    (0, graphql_1.InputType)()
], UpdatePhotoInput);
exports.UpdatePhotoInput = UpdatePhotoInput;
//# sourceMappingURL=photo.input.js.map