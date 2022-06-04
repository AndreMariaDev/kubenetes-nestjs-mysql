"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../models/user.model");
const photo_model_1 = require("../models/photo.model");
const login_model_1 = require("../models/login.model");
const db_config_1 = require("../config/db.config");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            console.log(`dbConfig.HOST:${db_config_1.dbConfig.HOST}`);
            console.log(`dbConfig.DB:${db_config_1.dbConfig.DB}`);
            console.log(`dbConfig.USER: ${db_config_1.dbConfig.USER}`);
            console.log(`dbConfig.PASSWORD: ${db_config_1.dbConfig.PASSWORD}`);
            console.log(`dbConfig.port: ${db_config_1.dbConfig.port}`);
            const sequelize = new sequelize_typescript_1.Sequelize(db_config_1.dbConfig.DB, db_config_1.dbConfig.USER, db_config_1.dbConfig.PASSWORD, {
                host: db_config_1.dbConfig.HOST,
                dialect: "mysql",
                port: Number(db_config_1.dbConfig.port) || 3307,
                pool: {
                    max: db_config_1.dbConfig.pool.max,
                    min: db_config_1.dbConfig.pool.min,
                    acquire: db_config_1.dbConfig.pool.acquire,
                    idle: db_config_1.dbConfig.pool.idle
                }
            });
            sequelize.addModels([user_model_1.User]);
            sequelize.addModels([photo_model_1.Photo]);
            sequelize.addModels([login_model_1.LoginUser]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.provider.js.map