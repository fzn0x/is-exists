# is-exists

![CI](https://github.com/fauzan121002/encryptlab/workflows/Node.js%20CI/badge.svg)
[![tag](https://img.shields.io/badge/nodejs->=v10.24.1-green.svg)](https://nodejs.org/en/)
[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Check whether a global functions, global variables, modules, files, properties, user environments exists or not.

## Installation

```bash
npm install is-exists
```

## Example Usage

```js
let {
  function_exists,
  variable_exists,
  file_exists,
  module_exists,
  property_exists,
  env_var_exists,
} = require("is-exists");

if (function_exists("isArray")) {
  //do the true statement code
}

if (variable_exists("isArray")) {
  //do the true statement code
}

if (file_exists("./src/index.js")) {
  //do the true statement code
}

if (module_exists("mocha")) {
  //do the true statement code
}

$obj = {
  hello: "hi",
};

if (property_exists("hello", $obj)) {
  //do the true statement code
}

if (env_var_exists("PROMPT")) {
  //do the true statement code
}
```

## Contributing

You can follow the contributing guide listed [here](./CONTRIBUTING.md)

## API

### function_exists

#### Parameters

- 0: function name: string

Check whether global function is exist or not.

### variable_exists

#### Parameters

- 0: variable name: string

Check whether global variable is exist or not.

### file_exists

#### Parameters

- 0: filepath: string

Check whether file is exist or not.
`file_exists` will start from root project directory location.

### module_exists

#### Parameters

- 0: module name: string

Check whether module is exist or not.

### property_exists

#### Parameters

- 0: property name: string
- 1: defined object: object

Check whether property is exist or not.

### env_var_exists

#### Parameters

- 0: property name: string

Check whether user environment is exist or not.

## License

is-exists was licensed under [MIT License](./LICENSE)

[1]: https://npmjs.org/package/is-exists
[2]: https://versionbadg.es/fauzan121002/is-exists.svg
[5]: https://david-dm.org/fauzan121002/is-exists.svg
[6]: https://david-dm.org/fauzan121002/is-exists
[7]: https://david-dm.org/fauzan121002/is-exists/dev-status.svg
[8]: https://david-dm.org/fauzan121002/is-exists#info=devDependencies
[11]: https://nodei.co/npm/is-exists.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-exists.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-exists.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-exists
[codecov-image]: https://codecov.io/gh/fauzan121002/is-exists/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/fauzan121002/is-exists/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/fauzan121002/is-exists
[actions-url]: https://github.com/fauzan121002/is-exists/actions
