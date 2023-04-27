# **<p align="center"><img src="https://t1.daumcdn.net/cfile/tistory/999AF54B5B93D78C25" alt="drawing" style="width:50px;"/> Create React Using WebPack <img src="https://t1.daumcdn.net/cfile/tistory/999AF54B5B93D78C25" alt="drawing" style="width:50px;"/></p>**

<br />

## Steps For Run This Project

- Use Node Version 16
  
- `npm i`
- `npm run build`
- `npm run start`

## Folder Structure

- public
  - index.html
  - main.js
- src
  - index.jsx
  - main.jsx
- webpack.config.js
- .babelrc
- package.json

## Step - 1 : Basic Configration

- Create Project (react-practical) folder and init server (package.json)

`mkdir react-practical`

`cd react-practical`

`npm init -y ` - Init Package Json file

`mkdir public`

`touch public/index.html`

## Step - 2

- Package List which are Need to convert the React Js file into js file

  - webpack
  - webpack-cli
  - webpack-dev-server
  - @babel/core
  - @babel/preset-react
  - @babel/preset-env
  - babel-loader
  - html-webpack-plugin

- Install all plugin which are listed

## Step - 3

- crete webpack.config.js for initialize webpack

```js
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
};
```

## Step - 4

- Add Dev Server for run at specific port

  ```js
  module.exports = {
    ...

    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      port: 3001,
      allowedHosts: ["host.com", "host2.com"],
      open: true,
    },

    ...
  };
  ```

## Step - 5

- Add Modul Part To Execute node_modules

```js
module.exports = {
  ...

  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
```

## Step - 6

- Add Resolve for Import/Export files

```js
module.exports = {
  ...

  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
```

## Step - 7

- App plugins components for add HtmlWebpackPlugin

```js
module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
}
```

## Step - 8

- Create **.babelrc** file for compile code

```js
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}

```

## Step - 10

- Update Script Part to package.json

```json
 "scripts": {
    "dev": "webpack serve",
    "build": "webpack",
    "start": "webpack serve"
  },
```

## Step 11

- run Project
  - `npm run start`
