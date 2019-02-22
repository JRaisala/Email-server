'use strict'

let Joi = require('joi');


const Handler = {
	EmailAPI: {
	  handler: async (request, h) => {

		const sgMail = require('@sendgrid/mail');
		sgMail.setApiKey(process.env.SENDGRID_API_KEY);
		const msg = {
		to: 'juha.raisala@gmail.com',
		from: 'juha.raisala@gmail.com',
		subject: 'Sending with SendGrid is Fun',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
		};
		sgMail.send(msg);
		console.log(msg)
		return h.response(msg)


	  },
	  tags: ['api', 'EmailAPI'],
	  description: 'Serves emails',
	  notes: 'Serves emails',
	  validate: {
	  }
	}
}

module.exports = Handler