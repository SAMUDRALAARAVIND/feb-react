# React

### Introduction to React

* Using react with CDN , usage of below 3 functions.
```javascript
React.createElement()
ReactDOM.render()
ReactDOM.createRoot()
```

* JavaScript modules ( `export` | `import` statements )
   - Javascript code can be modularized by splitting the code into different `js` files ( modules ).
   - Modules help keep our code organized and easier to manage. Instead of having one huge file with everything mixed together, we split our code into smaller, more manageable parts. This makes it easier to understand, maintain, and reuse our code.
   - Inside a module one can export the variables and import from another modules.
   - The export statement is used to make functionality available to other modules. You can export variables, functions, classes, or objects from a module so that they can be imported and used elsewhere.

   ```javascript 
   module1.js

    export const a = 20 ; // named export 
    export default b = 200; // default export
   ```

   ```javascript 
    module2.js

    import {a} from "./module1.js"; 
    // since a was a named export
    import x from "./module1.js"; 
    // x points to b in module1.js as it's a default export.
   ```

* Installation of nodejs , npm , npx and setting up a light weight nodejs project.
   - use `npm init` to setup a simple nodejs application.
   - After creating a fresh node application using above command `npm` will automatically create a `package.json` file in the root directory.
   - `package.json` file contains the metadata of our applicaton and  maintains dependencies , devDependencies, scripts to do different tasks.

   - npm (node package manager) is used for managing ( download, upgrade ) javascript libraries in a node application.
   - use `npm i react` OR `npm install react` to install any library from by using `npm`.
   - After installing atleast one js library in our node application we can find `package-lock.json` file and `node_modules` folder.
   - Every library that we download may depend on some other libraries ( aka peer dependencies ).
   -  the `package-lock.json` file helps maintain consistency and reproducibility in Node.js projects by locking down dependency versions and speeding up dependency installation. It's especially useful for collaborative projects and deployments across different environments.
   - `node_modules` will contain the code of all the dependencies (libraries) which we download inside application.

* javascript bundlers `webpack`, `parcel` etc..
  - A Frontend application may grow in size as we develop more features ending up having lot of javascript modules.
  - A `javascript bundler` (software tool) is used for coverting large number of javascript files into a minified single javascript file.
  - `webpack` is a powerful tool for bundling JavaScript code, and it provides a modular approach to handling various types of files through loaders like sass-loader, babel-loader, css-loader, file-loader, etc. These loaders extend webpack's capabilities, allowing you to import files of different types directly into your JavaScript code and process them as needed during the bundling process.

  - For example, with `sass-loader`, you can import `.scss` files directly into your JavaScript files, and webpack will process them, convert them to CSS, and include them in the final bundled output. Similarly, `babel-loader` allows you to use modern JavaScript features (ES6+ syntax) in your code and have them transpiled to ES5 syntax for compatibility with older browsers & coverts `JSX` to native javascript code.
* Webpack Setup
  - run `npm i webpack webpack-dev-server webpack-cli` in your node application which will install the below 3 dependencies in `package.json`.
    ```json
    {
        "webpack": "^5.20.1",
        "webpack-cli": "^4.5.0",
        "webpack-dev-server": "^3.11.2"
    }
    ```
  - Then execute `npx webpack` this command will bundle the code present inside `src/index.js` by default. If you don't have such a file it will throw and error.
  - By default after executing the above command , bundled will be written inside `dist/main.js` file.
  - To customise `webpack` we can create a `webpack.config.js` file in our root directory where you will have to export an object like below one.
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
  - By default `npx webpack` can only bundle the javascript code. But in real time we might be importing `.css` , `.scss`, `.jsx`, `.tsx`, `.ts` so on..
  - To parse the different types of files there are different loaders available and we need to add those loaders inside out `webpack.config.js`.
  - For example if we imported a `.css` file inside our javascript code the we need a `css-loader` & `style-loader` to bundle `css` code as well.
  - For example if we have `JSX` code inside some `.jsx` file then we need `babel-loader` with `.babelrc` configuration.

* Babel Integration 
    - Babel is a compiler/loader that transforms ES6+ code, such as arrow functions and classes, into backward-compatible JavaScript versions. This ensures that your code remains compatible with older JavaScript environments.
    - execute `npm i @babel/core @babel-preset-env @babel/preset-react babel-loader` , it will add below dependencies in your `package.json` file.
    ```json
    {
        "@babel/core": "^7.12.13",
        "@babel/preset-env": "^7.12.13",
        "@babel/preset-react": "^7.12.13",
        "babel-loader": "^8.2.2",
    }
    ```
    - create a `.babelrc` file inside your root directory with the below code.
    ```json
    {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
    ```
    - Inside your `webpack.config.js` under the rules property add below code so that whereever it finds `jsx` code while bundling that we be coverted by `babel-loader`.
    ```json
        {
            "test":"/\.(js|jsx)$/",
            "exclude": "/node_modules/",
            "use": {
                "loader": "babel-loader"
            }
        }
    ```
