# Database를 배워보자 
- 데이터베이스는 크게 저장형식에 따라 두가지로 분류하며 SQL과 noSQL로 구분한다. 

## 1. SQL(Structured Query Language) 데이터베이스의 정리 
### 가. 데이터베이스는 데이터의 집합이다. 
### 나. 테이블(예: 엑셀)들이 모여있는 데이터베이스가 된다. 
### 다. 테이블의 세로축은 Field/Column 이라고 한다. 
### 라. 테이블의 가로축은 데이터들을 저장하며 row/record 라고 한다. 
### 마. Database > Table > Record
### 바. 대표적인 데이터베이스 관리 프로그램(DataBase Management System - DBMS)은 Oracle, MySQL, MSSQL, MariaDB 

## 2. noSQL(Not Only Structured Query Language) 데이터베이스 정리 
### 가. 데이터베이스는 데이터의 집합니다. 
### 나. 컬렉션(Collection)들이 모여서 데이터베이스가 된다.
### 다. json형태의 document(데이터)들의 모여서 컬렉션이 된다. 
### 라. Database > Collection > Document
### 마. 대표적인 프로그램으로 MongoDB, Redis, OrientDB 있다. 





# MySQL 설치
## [Bitnami](https://bitnami.com) 에서 wamp(맥 사용자는 mamp)를 다운로드 하여 설치한다.
### PHP 관련 설정은 전부 끈다. 
### Cloud 설치는 체크 해제한다.
### 비밀번호를 넣는다.
### 마지막에 Apache와 MySQL의 방화벽을 열어준다.
### 맨 처음 mysql을 접근하려면 환경변수 설정이 필요하다. 아래와 같이 설정한다.
1. 내컴퓨터에서 오른쪽버튼 클릭 -> 속성
2. 왼쪽 날개에 있는 고급시스템 설정 클릭
3. 하단의 환경변수를 클릭 후 창에서 path를 클릭하여 새로운 패스 등록 (C:\Bitnami\wampstack-7.31.2-0\mysql\bin)

# MySQL 접속하여 배우기
1. 접속하기
```bash
mysql -u root -p
```
2. 데이터베이스 만들기
```sql
create database test1;
use test1;
```
3. 테이블 만들기
```sql
create table sample1 (
	id int(11),
	name varchar(50),
	createdAt datetime
);
show tables;
desc sample1;
```

4. MySQL 8.0 에서는 Heidi와 같은 외부 Client를 사용하기 위해 아래와 같이 권한을 설정한다.
```sql
use mysql;
/* Database changed */

create user `root`@`%` identified by 'password';
-- Query OK, 0 rows affected (0.01 sec)

grant all privileges on *.* to `root`@`%`;
-- Query OK, 0 rows affected (0.01 sec)

flush privileges;
-- Query OK, 0 rows affected (0.00 sec)
```

## DATABASE CRUD 명령
1. Create
```sql
INSERT INTO users 
('userid', 'userpw', 'username', 'email') 
VALUES 
('booldook', '000000', '불뚝', 'booldook@gmail.com');

INSERT INTO users SET 
'userid' = 'booldook', 
'userpw' = '000000', 
'username' = '불둑', 
'email' = 'booldook@naver.com';
```

2. Read
```sql
SELECT * FROM users;
SELECT userid, username FROM users;
SELECT * FROM users WHERE userid = 'booldook';
SELECT * FROM users WHERE userid = 'booldook' AND userpw = '111111';
SELECT * FROM users WHERE createdAt > '2020-07-09 00:00:00';
SELECT * FROM users WHERE email LIKE '%@gmail.com'; -- %는 와일드카드
SELECT * FROM users WHERE userid = 'booldook' OR userid = 'booldook2';
SELECT * FROM users ORDER BY id ASC;
SELECT * FROM users ORDER BY id DESC;
SELECT * FROM users WHERE userid like 'b%' ORDER BY id DESC;
```

3. Update
```sql
UPDATE users SET username='홍길만', userpw='111111' WHERE id=5;
```

4. Delete
```sql
DELETE FROM users WHERE id=4;
```