# react-jwt-example

React.js and JSON Web Token integration in isomorphic applications

## Technologies
* React
* webpack
* react-hot-loader
* flummox
* immutable.js
* react-router
* JSON Web Token
* babel

## Build

* Run the server in development mode with webpack-dev-server

```
npm run dev
```

* Run tests

```
npm test
```

* Build for production

```
# this will generate you assets inside the public/build folder
# they will be automatically loaded by the app
npm run build

# then start the app
NODE_ENV=production npm start
```

"start": "node index.js",
"build": "NODE_ENV=production ./node_modules/.bin/webpack --config webpack.config.production.js --progress --profile --colors -p",
"build-dev": "./node_modules/.bin/webpack --config webpack.config.development.js --progress --profile --colors -p",
"test": "echo \"Error: no test specified\" && exit 1",
"dev": "./node_modules/.bin/nodemon index.js"

## TODO

* a lot of crazy stuff
