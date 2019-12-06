export async function sendMail( Email: any, { to, from, subject, text, html, attachments}: {
    to: string | string[],
    from: string | string[],
    subject: string | string[],
    text?: string,
    html?: string,
    attachments?: {
        filename: string,
        path: string,
        contentType: string
    }[]
})  {
    return new Promise((resolve, reject) => {
        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text,
            html: html,
            attachments: attachments
        }, function (err: Error, mail: any) {
            err ? reject(err) : resolve(mail);
        });
    });
}