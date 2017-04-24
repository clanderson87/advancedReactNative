const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');
const requestOneTimePassword = require('./request_one_time_password');
const verifyOneTimePasswords = require('./verify_one_time_passwords');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-demo.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);
exports.verifyOneTimePasswords = functions.https.onRequest(verifyOneTimePasswords);

