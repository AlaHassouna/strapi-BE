'use strict';

/**
 * blocked-time service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blocked-time.blocked-time');
