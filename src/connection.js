require('dotenv').config()

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        password: process.env.PG_PASS,
        database: process.env.PG_DATA
    }
});

module.exports = knex;