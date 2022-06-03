"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photosProviders = void 0;
const photo_model_1 = require("../models/photo.model");
exports.photosProviders = [
    {
        provide: 'PHOTOS_REPOSITORY',
        useValue: photo_model_1.Photo,
    },
];
//# sourceMappingURL=photos.providers.js.map