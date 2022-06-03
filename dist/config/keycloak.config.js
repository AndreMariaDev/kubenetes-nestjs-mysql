"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keycloackConfig = void 0;
const dotenvFlow = require("dotenv-flow");
dotenvFlow.config({
    silent: true
});
exports.keycloackConfig = {
    clientURL: process.env.KEYCLOAK_URL,
    clientID: process.env.KEYCLOAK_CLIENT_ID,
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
    clientCredentions: process.env.KEYCLOAK_CLIENT_CREDENTIONS,
    grant_type: process.env.KEYCLOAK_GRANT_TYPE,
    clientToken: process.env.KEYCLOAK_CLIENT_TOKEN,
    clientRefreshToken: process.env.KEYCLOAK_CLIENT_REFRESH_TOKEN,
    authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL,
    realm: process.env.KEYCLOAK_REALM,
};
//# sourceMappingURL=keycloak.config.js.map