/**
 * scripts/modulePattern.js
 *
 * module pattern for object instantiation.
 * With ES5 this would be wrapped in an IIFE, with ES6 it can simply be exported.
 * ref: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
 */


export function myModule() {

  console.log('Instantiate myModule');
  var _randonPercentage = Math.floor( Math.random() * 100);

  var _privateMethod = function () {
    // private stuff
  };

  var publicMethod = function () {
    _privateMethod();
  };

  var getRandomPercentage = function() {
   	return _randonPercentage;
  };
  
  return {
    publicMethod: publicMethod,
    getRandomPercentage : getRandomPercentage
  };

};