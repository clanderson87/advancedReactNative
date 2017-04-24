const twilio = require('twilio');
const info = require('./twilio_info.json')

const accountSid = info.ACCOUNT_SID;
const authToken = info.AUTH_TOKEN;

module.exports = new twilio.Twilio(accountSid, authToken);
