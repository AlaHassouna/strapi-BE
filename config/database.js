const path = require('path');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'aws-0-eu-west-3.pooler.supabase.com'),
        port: env.int('DATABASE_PORT', 6543),
        database: env('DATABASE_NAME', 'postgres'),
        username: env('DATABASE_USERNAME', 'postgres.bdvtipwjrwhlbsedoetr'),
        password: env('DATABASE_PASSWORD', 'gb9xNk005PCQYwxx'),
        ssl: env.bool('DATABASE_SSL', true), // Assurez-vous que SSL est configuré correctement
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
