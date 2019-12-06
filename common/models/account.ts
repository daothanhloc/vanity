import { sendMail } from '../helpers/sendMail';
import { Account } from '../../codegen/api/fetch/api';
import { PersistedModelStatic } from '../helpers/loopback';

module.exports = function(Account: PersistedModelStatic<Account>) {
    (Account as any).sendMailToUser = async function(userEmail: string, subject: string, content: string) {
      const Email = Account.app.models.Email;
      console.log('success sendmail!')
      var html = `<p> ${content}`;
      return sendMail(Email, {
            from: "abc@ql6625.com",
            to: userEmail,
            subject: subject,
            html: html
        })
    }
  };