import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModuleConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { GraphqlAuthGuard } from './GraphqlAuthGuard ';

@Module({
  imports: [
    PassportModule,
    JwtModuleConstants
  ],
  providers: [
    JwtStrategy, 
    GraphqlAuthGuard],
  exports: [],
})
export class AuthModule {}