var assert = require('assert');
var Symbol = require('./');

var s1 = new Symbol();
var s2 = new Symbol();
var o = {};

o[s1] = "foo";
o[s2] = "bar";

assert.equal(o[s1], 'foo', 'can get and set property');
assert.equal(o[s2], 'bar', 'can get and set property');
assert.equal(Object.keys(o).indexOf(String(s1)), -1, 'symbol not enumerable');
