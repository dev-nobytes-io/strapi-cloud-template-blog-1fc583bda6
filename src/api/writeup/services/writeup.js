'use strict';

/**
 * writeup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::writeup.writeup');
