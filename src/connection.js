require('dotenv').config()

const knex = require('knex')({
    client: 'pg',
    connection: process.env.PG_URL,
       
});

module.exports = knex;