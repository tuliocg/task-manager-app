const sendgridAPIKey = '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'
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'customer@gmail.com',
        subject: 'Welcome to the task-app',
        text: `Welcome to the app ${name}. Let me know how you get along.` 
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'customer@gmail.com',
        subject: 'We are sorry that you have to go',
        text: `Hope you come back one day ${name}`
    })
}

module.exports = {
    sendWelcomeEmail
    ,sendFarewellEmail
}

