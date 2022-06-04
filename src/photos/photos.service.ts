import { Injectable,Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { RedisCacheService } from '../cache/redis.cache.service';
import { Photo } from '../models/photo.model';
import { User } from '../models/user.model';
import { UsersService } from '../users/users.service';
import { CreatePhotoInput, UpdatePhotoInput } from './photo.input';

@Injectable()
export class PhotosService {
  constructor(
    @Inject('PHOTOS_REPOSITORY')
    private photoRepository: typeof Photo,
    private readonly usersService: UsersService,
    public readonly redisCacheService: RedisCacheService
  ) {}

  async findAll(userId: number): Promise<Photo[]> {
    const cache = await this.redisCacheService.get(`FIND_ALL_PHOTO:${userId}`);
    if(!cache){
      let result = this.photoRepository.findAll({
        where: {
          userId,
        },
      }
      ).then((result)=>{
        this.redisCacheService.set(
          `FIND_ALL_PHOTO:${userId}`,
          JSON.stringify(result),
          { ttl: 300 })
        return result;
      });;
    }

    return new Promise<Photo[]>(JSON.parse(cache));
  }

  async findOne(id: string): Promise<Photo> {
    const cache = await this.redisCacheService.get(`FIND_ON_PHOTO:${id}`);
    if(!cache){
      return this.photoRepository.findOne({
        where: {
          id,
        },
      }).then((result)=>{
        this.redisCacheService.set(
          `FIND_ON_PHOTO:${id}`,
          JSON.stringify(result),
          { ttl: 300 })
        return result;
      });
    }
    return new Promise<Photo>(JSON.parse(cache));
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async create(createPhotoDto: CreatePhotoInput): Promise<Photo> {
    const photo = new Photo();
    photo.name = createPhotoDto.name;
    photo.description = createPhotoDto.description;
    photo.filename = createPhotoDto.filename;
    photo.views = createPhotoDto.views;
    photo.isPublished = createPhotoDto.isPublished
    photo.user = await this.usersService.findOne(createPhotoDto.userId.toString());
    photo.userId = createPhotoDto.userId;
    return await photo.save();
  }

  async update(id: number, updatePhotoDto: UpdatePhotoInput): Promise<Photo | boolean> {
    const obj = await this.photoRepository.findOne<Photo>({
      where: { id, isPublished : true },
    });
    if (obj === null || Object.keys(obj).length === 0) {
      return false;
    }

    obj.name = updatePhotoDto.name;
    obj.description = updatePhotoDto.description;
    obj.filename = updatePhotoDto.filename;
    obj.views = updatePhotoDto.views;
    obj.isPublished = updatePhotoDto.isPublished
    return await obj.save();
  }

  async delete(id: number): Promise<Photo | boolean> {
    const obj = await this.photoRepository.findOne<Photo>({
      where: { id, isPublished: true },
    });
    if (obj === null || Object.keys(obj).length === 0) {
      return false;
    }
    obj.isPublished = false;
    return await obj.save();
  }

}