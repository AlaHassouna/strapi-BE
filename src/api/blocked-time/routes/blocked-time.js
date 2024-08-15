'use strict';

/**
 * blocked-time router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blocked-time.blocked-time');
