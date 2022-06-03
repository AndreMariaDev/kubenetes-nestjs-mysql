import { JwtModule } from '@nestjs/jwt';

export const jwtConstants = {
    secret: 'secretKey',
};

export const JwtModuleConstants = JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
});