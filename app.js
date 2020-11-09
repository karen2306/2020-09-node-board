/******** 전역변수 ***********************/
const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2');
const moment = require('moment');


const connection = mysql.createConnection({
	host: '127.0.0.1',
	port: 3306,
	user: 'karen2306',
	password: '000000',
	database : 'karen2306'
});

/*********** 서버실행 **************************/
app.listen(3000, () => {
	console.log('=========================');
	console.log('http://127.0.0.1:3000');
	console.log('=========================');
});

/************ 초기설정 ***********************************/

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.locals.pretty = true;


app.use(express.json());
app.use(express.urlencoded({ extended:false }));




/************ 라우터설정 ***********************************/
app.use('/', express.static(path.join(__dirname, './public')));

app.get('/book/list', (req, res) => {
	connection.query('SELECT * FROM books', function(err, r) {
		for(let v of r ) v.wdate = moment(v.wdate).format('YYYY-MM-DD');
		const pug = {
			css: 'book-list',
			js: 'book-list',
			title: '도서 리스트',
			titleSub: '고전도서 리스트',
			lists: r
		}
		res.render('book/list', pug);
	});
});