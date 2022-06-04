import { Module, Controller } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PhotosResolver } from './photos.resolver';
import { PhotosService } from './photos.service';
import { photosProviders } from './photos.providers'

import { UsersModule } from '../users/users.module';
import { RedisCacheModule } from '../cache/redis.cache.module';

@Module({
  imports: [DatabaseModule,UsersModule,RedisCacheModule],
  providers:[PhotosResolver,PhotosService, ...photosProviders]
})
export class PhotosModule {}