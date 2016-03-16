var _ = require('underscore');
var chalk = require('chalk');

var viewTpl = require('./fixtures/build/view');
var result = viewTpl({name: 'John'});

console.log("Should be function: ", chalk.green(_.isFunction(viewTpl)));
console.log("Should be string: ", chalk.green(_.isString(result)));
console.log("Should have name: 'John': ", chalk.green(result === 'John'));


