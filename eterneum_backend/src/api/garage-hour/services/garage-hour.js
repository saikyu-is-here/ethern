'use strict';

/**
 * garage-hour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::garage-hour.garage-hour');
