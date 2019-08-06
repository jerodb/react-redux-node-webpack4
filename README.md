# React Redux Node Webpack4

- SSR ready.
- Usign **[MaterialUI](https://material-ui.com/getting-started/usage/)** v.4 in components and for styling. Styles are included when SSR.
- Templates build using **[pug/jade](https://pugjs.org/api/getting-started.html)** template engine.
  
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
*(\*) Node and Webpack environment depends on **NODE_ENV** value set in **.env** file.*  

- Install dependencies:  
```bash
$ yarn
```
  
- Bundle app using webpack and start node server:  
```sh
$ yarn build
$ yarn start
```

- Start **[dev-server](https://webpack.js.org/configuration/dev-server)** with **[HMR](https://webpack.js.org/concepts/hot-module-replacement/)**:  
```Shell
$ yarn dev
```
  
&nbsp;
## TO DO
- Reduce bundle size
- Add multilanguage
- Add testing

