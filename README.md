# React-Node-Webpack4 App Skeleton

- SSR ready.
- **[MaterialUI](https://material-ui.com/getting-started/usage/)** integrated. (Material UI styles included when SSR)
- Using **[pug](https://pugjs.org/api/getting-started.html)** for templates.
- Ready to use **[Mysql](https://dev.mysql.com/doc/refman/8.0/en/)** database api. **(optional)**


## Getting started

- Create .env file with the following variables:

```
  BASE_URL=
  HOST=
  NODE_ENV=
  PORT=
```

If you omit the .env file the app will start with this default:


```
  BASE_URL=/
  HOST=http://localhost:3000
  NODE_ENV=development
  PORT=3000
```


## Install, build and run:

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

## Include Mysql

- Add to .env file:

```
MYSQL_DB=
MYSQL_USER=
MYSQL_PASS=
MYSQL_HOST=
MYSQL_PORT=
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

**IMPORTANT:** MYSQL_USER and MYSQL_PASS values in .env file must be the same as user and password in .my.cnf file.
