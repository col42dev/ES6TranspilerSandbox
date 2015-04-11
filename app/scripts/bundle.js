(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * scripts/app.js
 *
 * This is a sample CommonJS module.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

var _Dog$Wolf = require('./zoo');

function App() {
  console.log('app initialized');
}

module.exports = App;

App.prototype.beep = function () {
  console.log('boop');
};

var myDog = new _Dog$Wolf.Dog('Sherlock', 'beagle');
console.log(myDog.bark()); // Sherlock: woof, woof!

var myWolf = new _Dog$Wolf.Wolf('Werewolf');
console.log(myWolf.bark()); // Werewolf: woooooow!

},{"./zoo":3}],2:[function(require,module,exports){
/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

var App = require('./app.js');

var app = new App();

app.beep();

},{"./app.js":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Dog = Dog;
exports.Wolf = Wolf;
var getBarkStyle = function getBarkStyle(isHowler) {
  return isHowler ? 'woooooow!' : 'woof, woof!';
};

function Dog(name, breed) {
  this.bark = function () {
    return name + ': ' + getBarkStyle(breed === 'husky');
  };
}

function Wolf(name) {
  this.bark = function () {
    return name + ': ' + getBarkStyle(true);
  };
}

},{}]},{},[2]);