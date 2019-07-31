# React-Redux-Node-Webpack4

- SSR ready.
- **[MaterialUI](https://material-ui.com/getting-started/usage/)** v.4 integrated. (Material UI styles included when SSR)
- Using **[pug](https://pugjs.org/api/getting-started.html)** for templates.
- **[Auth0](https://auth0.com/docs)** authentication. **(optional)**
  
&nbsp;
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

- Start dev-server with HR:

```
$ yarn dev
```
  
&nbsp;
## Include Auth0 authentication

- Add to .env file:

```
AUTH_CLIENT_ID=
AUTH_DOMAIN=
AUTH_RESPONSE_TYPE=
AUTH_REDIRECT_URI=
AUTH_SCOPE=
```
  
A built-in LoginControl component will be shown on the Home screen.

&nbsp;
## TO DO
- use FETCH for fetching
- remove harcoded paths in server
- refactor to type script
- Add multilanguage
- Add testing

