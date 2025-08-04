'use strict';

/**
 * tyer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tyer.tyer');
