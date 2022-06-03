"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (errors) => {
            const error_messages = errors.map(error => Object.values(error.constraints));
            return new common_1.BadRequestException(error_messages.toString());
        },
        forbidUnknownValues: false,
    }));
    const PORT = process.env.NODE_DOCKER_PORT;
    console.log(`Using port: ${PORT}`);
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map