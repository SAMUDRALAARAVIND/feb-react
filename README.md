# React

### Introduction to React

* Using react with CDN , using the below 3 functions.
```javascript
React.createElement()
ReactDOM.render()
ReactDOM.createRoot()
```

* JavaScript modules ( `export` | `import` statements )
* Installation of nodejs , npm , npx and setting up a light weight nodejs project.
* Significance of `package.json` , `package-lock.json` and `node_modules`.
* javascript bundlers `webpack`, `parcel` etc..
```json
{
    "webpack": "^5.20.1",
    "webpack-cli": "^4.5.0",
    "webpack-dev-server": "^3.11.2"
}
```

```json
{
    "entry": "./src/index.js",
    "output": {
        "filename": "bundle.js",
        "path": "path.resolve(__dirname, 'public')"
    },
    "devServer": {
        "static": {
            "directory": "path.resolve(__dirname, 'public')"
        },
        "port": 3000,
    },
    "mode": "development",
    "module": {
        "rules": [
            {
                "test":"/\.js$/",
                "exclude": "/node_modules/",
                "use": {
                    "loader": "babel-loader"
                }
            }
        ]
    }
}
```

* What are loaders and their usage ex: babel, sass etc..
* Babel integration

```json
{
    "@babel/core": "^7.12.13",
    "@babel/preset-env": "^7.12.13",
    "@babel/preset-react": "^7.12.13",
    "babel-loader": "^8.2.2",
}
```

* .babelrc 
```json
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
