# React-Node-Webpack4-Mysql App Skeleton

- Using [pug](https://pugjs.org/) as template engine. 

- Create .env file with the following variables:

```
  BASE_URL=
  HOST=
  MYSQL_DB=
  MYSQL_USER=
  MYSQL_PASS=
  MYSQL_HOST=
  MYSQL_PORT=
  NODE_ENV=
  PORT=
```

- Create .my.cnf in the user home dir or in mysql config dir if possible. Add the following, complete with mysql user and pass:

```
  [mysql]
  user =
  password =

  [mysqlimport]
  user =
  password =
```

**IMPORTANT:** MYSQL_USER in .env file and user in .my.cnf file must be the same. The same goes for MYSQL_PASS and password.

---

Install, build and run:

- Install dependencies:

```
$ yarn
```

- Build:

```
$ yarn build:dev
$ yarn build
```

- Start server:

```
$ yarn dev
$ yarn start
```
