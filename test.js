/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
