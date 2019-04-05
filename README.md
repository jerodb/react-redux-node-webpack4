# coralreefpalau

- Create .env file with the following variables, complete with the environment values after the equals:

```
  ENV=
  PORT=
  BASE_URL=
  PUBLIC_URL=
  MYSQL_DB=
  MYSQL_USER=
  MYSQL_PASS=
  MYSQL_HOST=
  MYSQL_PORT=
  MYSQL_USERS=
  MYSQL_PAYMENTS=
  MYSQL_USER_GAMES=
  RECAPTCHA_KEY=
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
$ yarn build
```

- Start server:

```
$ yarn start
```
