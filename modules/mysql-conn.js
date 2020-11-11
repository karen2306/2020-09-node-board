const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: '127.0.0.1',
	port: 3306,
	user: 'karen2306',
	password: '000000',
	database : 'karen2306',
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});


module.exports = { pool, mysql };