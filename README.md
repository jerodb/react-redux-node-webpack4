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
*Environment mode should be set on **.env** file under **NODE_ENV** value.*  

- Install dependencies:

```
$ yarn
```

- Bundle app using webpack:

```
$ yarn build
```

- Start node server:

```
$ yarn start
```

- Start **[dev-server](https://github.com/webpack/webpack-dev-server)** with HR:

```
$ yarn dev
```
  
&nbsp;
## TO DO
- Reduce bundle size
- Add multilanguage
- Add testing

