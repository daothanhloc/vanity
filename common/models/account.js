"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendMail_1 = require("../helpers/sendMail");
module.exports = function (Account) {
    Account.sendMailToUser = async function (userEmail, subject, content) {
        const Email = Account.app.models.Email;
        console.log('success sendmail!');
        var html = `<p> ${content}`;
        return sendMail_1.sendMail(Email, {
            from: "abc@ql6625.com",
            to: userEmail,
            subject: subject,
            html: html
        });
    };
};
//# sourceMappingURL=account.js.map