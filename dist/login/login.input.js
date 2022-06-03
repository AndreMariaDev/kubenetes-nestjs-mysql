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
exports.ValidationLoginUserInput = exports.UpdateLoginUserInput = exports.CreateLoginUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateLoginUserInput = class CreateLoginUserInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLoginUserInput.prototype, "userName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLoginUserInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreateLoginUserInput.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateLoginUserInput.prototype, "userId", void 0);
CreateLoginUserInput = __decorate([
    (0, graphql_1.InputType)()
], CreateLoginUserInput);
exports.CreateLoginUserInput = CreateLoginUserInput;
let UpdateLoginUserInput = class UpdateLoginUserInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateLoginUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateLoginUserInput.prototype, "userName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateLoginUserInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], UpdateLoginUserInput.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateLoginUserInput.prototype, "userId", void 0);
UpdateLoginUserInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateLoginUserInput);
exports.UpdateLoginUserInput = UpdateLoginUserInput;
let ValidationLoginUserInput = class ValidationLoginUserInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ValidationLoginUserInput.prototype, "userName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ValidationLoginUserInput.prototype, "password", void 0);
ValidationLoginUserInput = __decorate([
    (0, graphql_1.InputType)()
], ValidationLoginUserInput);
exports.ValidationLoginUserInput = ValidationLoginUserInput;
//# sourceMappingURL=login.input.js.map