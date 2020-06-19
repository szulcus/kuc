const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const SENDGRID_API_KEY = functions.config().sendgrid.key
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)
exports.firestoreEmail = functions.https.onCall((info) => {
	const msg = {
		to: 'jakubs929@gmail.com',
		from: 'jakubzlezena@wp.pl',
		subject: info.title,
		templateId: "d-fdde5d11381646b3a5b10192748a8a60",
		substitutionWrappers: ['{{', '}}'],
		substitutions: {
			name: info.name,
			content: info.content
		}
	}
	return sgMail.send(msg)
}).then(() => console.log('Email send!')).catch(err => console.log(err))
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
