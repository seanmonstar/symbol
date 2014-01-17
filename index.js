/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var crypto = require('crypto');

var defineProperty = Object.defineProperty;
function next() {
  return "@@symbol:" + crypto.randomBytes(8);
}


function Symbol() {
  if (!(this instanceof Symbol)) {
    return new Symbol();
  }
  var _symbol = next();
  this._symbol = _symbol;
  defineProperty(Object.prototype, _symbol, {
    set: function(value) {
      defineProperty(this, _symbol, {
        value: value,
        enumerable: false,
        writable: true
      });
    }
  });
}

Symbol.prototype.toString = function toString() {
  return this._symbol;
};

module.exports = this.Symbol || Symbol;
