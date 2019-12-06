"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
module.exports = function (app) {
    async function automigrate(model) {
        return new Promise((resolve, reject) => {
            app.dataSources.mysqlDs.automigrate(model, function (err) {
                if (err) {
                    return reject(err);
                }
                resolve(app.models[model]);
            });
        });
    }
    async function autoupdate(model) {
        return new Promise((resolve, reject) => {
            app.dataSources.mysqlDs.autoupdate(model, function (err) {
                if (err) {
                    return reject(err);
                }
                resolve(app.models[model]);
            });
        });
    }
    (async () => {
        const [ACL, RoleMapping, Role, Account, EffectScript, History, Message, PayEffectScript] = await Promise.all(_.map([
            'ACL',
            'RoleMapping',
            'Role',
            'Account',
            'EffectScript',
            'History',
            'Message',
            'PayEffectScript',
        ], process.env.NODE_ENV === 'production' ? autoupdate : automigrate));
        const [AccessToken] = await Promise.all(_.map([
            'AccessToken'
        ], autoupdate));
        if (process.env.NODE_ENV === 'production') {
            return;
        }
        console.log('Start seeding ...');
        // const Role  = app.models.Role;
        // const Account  = app.models.Account as PersistedModelStatic<Account>
        // const RoleMapping  = app.models.RoleMapping;
        const roles = [
            { name: 'SUPERADMIN' },
            { name: 'ADMIN' },
            { name: 'MANAGER' },
            { name: 'CUSTOMER' }
        ];
        for (let role of roles) {
            await Role.create(role);
        }
        const accounts = [
            {
                username: 'superadmin',
                password: 'test',
                email: 'admin@ql6625.fr'
            }
        ];
        for (let account of accounts) {
            await Account.create(account);
        }
        const roleMappings = [
            { principalType: RoleMapping.USER, principalId: 1, roleId: 1 },
            { principalType: RoleMapping.USER, principalId: 2, roleId: 2 },
            { principalType: RoleMapping.USER, principalId: 3, roleId: 3 },
            { principalType: RoleMapping.USER, principalId: 4, roleId: 3 },
            { principalType: RoleMapping.USER, principalId: 5, roleId: 3 },
            { principalType: RoleMapping.USER, principalId: 6, roleId: 4 },
            { principalType: RoleMapping.USER, principalId: 7, roleId: 4 },
            { principalType: RoleMapping.USER, principalId: 8, roleId: 4 },
            { principalType: RoleMapping.USER, principalId: 9, roleId: 4 },
            { principalType: RoleMapping.USER, principalId: 10, roleId: 4 },
            { principalType: RoleMapping.USER, principalId: 15, roleId: 4 }
        ];
        for (let roleMapping of roleMappings) {
            await RoleMapping.create(roleMapping);
        }
        console.log('done seeding');
    })().catch(error => {
        console.error('error seeding ', error);
    });
};
//# sourceMappingURL=seed.js.map