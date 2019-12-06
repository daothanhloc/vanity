import { App } from '../../common/helpers/loopback';

module.exports = function enableAuthentication(server: App) {
    // enable authentication
    server.enableAuth();
  };
  