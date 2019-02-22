'use strict'

let Joi = require('joi');


const Handler = {
	EmailAPI: {
	  handler: async (request, h) => {
	  },
	  tags: ['api', 'EmailAPI'],
	  description: 'Serves emails',
	  notes: 'Serves emails',
	  validate: {
	  }
	}
}

module.exports = Handler