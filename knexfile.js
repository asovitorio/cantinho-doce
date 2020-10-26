// Update with your config settings.
require('dotenv').config()
module.exports = {

    production: {
        client: process.env.DB_CLIENTE,
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE
        },
        migrations: {
            tableName: 'migrations',
            directory: `${__dirname}/database/migrations`
        },
        seeds: {
            directory: `${__dirname}/database/seeds`
        }
    },



};