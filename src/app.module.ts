import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config'

import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
// import { Upload } from './core/Upload.scalar';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { LoginUsersModule } from './login/login.module';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PhotosModule,
    AuthModule,
    LoginUsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      context:({ req })=>({ req }),
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message: error?.extensions?.exception?.code?.toString() || error?.message,
        };
        return graphQLFormattedError;
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
