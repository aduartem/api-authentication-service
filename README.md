# api-authentication-service

## Requirements

- Node v16.15.0
- NPM 8.5.5
- MySQL 8.0.25

<br>

## Installation

### 1. Create database

```
mysql -uroot -p
Enter password: *****

....

create database authentication;
```

<br>

### 2. Install node dependencies

<br>

At the root of the project:

```
npm i
```

<br>


### 3. Environment Variables

<br>

Example environment file

```
NODE_ENV=dev
APP_NAME=api-authentication-service
PORT=3001
EXPIRES_IN=1h
ACCESS_KEY=sd12532fb784c48129675fb27168c0ea744b2cf58ee02337c5918dhsd
DB_USER=root
DB_PASS=root
DB_NAME=authentication
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
DB_TIMEZONE=false
DB_LOGGING=true
```

<br>

### 4. Starting the service

<br>

At the root of the project:

```
npm start
```

The database tables should be created automatically

<br>

### 5. Running Seeds

<br>

At the root of the project:

```
npx sequelize-cli db:seed:all --url 'mysql://root:password@localhost/database_name'
```

Example:

```
npx sequelize-cli db:seed:all --url 'mysql://root:root@localhost/authentication'
```

<br>

## Check code style with eslint

<br>

At the root of the project:

```
npm run eslint
```
