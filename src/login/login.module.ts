import { Module, Controller, forwardRef } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { LoginUsersService } from './login.service';
import { loginUsersProviders } from './login.providers';
import { LoginUserResolver } from './login.resolver';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { JwtModuleConstants } from '../auth/constants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../auth/jwt.strategy';
import { GraphqlAuthGuard } from '../auth/GraphqlAuthGuard ';

@Module({
  imports: [
    PassportModule,
    DatabaseModule,
    JwtModuleConstants,
    AuthModule,
    UsersModule
  ],
  providers:[
    LoginUserResolver,
    LoginUsersService, ...loginUsersProviders,
    JwtStrategy, 
    GraphqlAuthGuard
  ],
  exports:[LoginUsersService]
})
export class LoginUsersModule {}