"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (server) {
    // Install a `/` route that returns server status
    var router = server.loopback.Router();
    router.get('/', server.loopback.status());
    server.use(router);
};
//# sourceMappingURL=root.js.map