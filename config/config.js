const mysql = require('mysql')

let pool = mysql.createPool({
    conectionLimit: 100,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATEBASE
})

module.exports = pool