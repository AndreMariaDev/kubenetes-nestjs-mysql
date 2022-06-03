import { PhotosService } from './photos.service';
import { CreatePhotoInput, UpdatePhotoInput } from './photo.input';
export declare class PhotosResolver {
    private readonly photosService;
    constructor(photosService: PhotosService);
    findAll(): Promise<import("../models/photo.model").Photo[]>;
    findOne(id: string): Promise<import("../models/photo.model").Photo>;
    create(input: CreatePhotoInput): Promise<import("../models/photo.model").Photo>;
    update(id: number, input: UpdatePhotoInput): Promise<any>;
    delete(id: number): Promise<void>;
}
