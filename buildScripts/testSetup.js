//This file isn't transpiled, so must use CommonJS and ES5

//register babel to transplate beofre our tests run.
require('babel-register')();

//disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function() {};
