import { Module, Controller, forwardRef } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { UsersService } from './users.service';
import { usersProviders } from './user.providers';
import { UserResolver } from './users.resolver';
import { RedisCacheModule } from '../cache/redis.cache.module';

@Module({
  imports: [
    DatabaseModule,
    RedisCacheModule
  ],
  providers:[UserResolver,UsersService, ...usersProviders],
  exports:[UsersService]
})
export class UsersModule {}