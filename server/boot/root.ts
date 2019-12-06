import { App } from '../../common/helpers/loopback'

module.exports = function(server: App) {
    // Install a `/` route that returns server status
    var router = server.loopback.Router();
    router.get('/', server.loopback.status());
    server.use(router);
  };
  