# React Redux Node Webpack4

- SSR ready.
- **[MaterialUI](https://material-ui.com/getting-started/usage/)** v.4 integrated. (Material UI styles included when SSR)
- Using **[pug](https://pugjs.org/api/getting-started.html)** for templates.
  
&nbsp;
## Getting started

- Create .env file with the following variables:

```
  BASE_NAME=
  HOST=
  NODE_ENV=
  PORT=
```
  
If you omit the .env file the app will start with this default:
  
```
  BASE_NAME=/
  HOST=http://localhost:3000/
  NODE_ENV=development
  PORT=3000
```
  
&nbsp;
## Install, build and run:

- Install dependencies:

```
$ yarn
```

- Build *(webpack mode depends on **NODE_ENV** value set on **.env** file)*:

```
$ yarn build
```

- Start server:

```
$ yarn start:dev
$ yarn start:prod
```

- Start **[dev-server](https://github.com/webpack/webpack-dev-server)** with HR:

```
$ yarn dev
```
  
&nbsp;
## TO DO
- Reduce bundle size
- Remove harcoded paths in server
- Add multilanguage
- Add testing

