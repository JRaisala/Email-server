'use strict'

const Handler = require('./handler')

const Routes = [
  {
    method: 'GET',
	path: '/EmailApi/',
	config: Handler.EmailAPI
  }
]

module.exports = Routes