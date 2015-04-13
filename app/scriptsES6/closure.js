"use strict";

// The outer function is an IIFE so gets called immeditaly and the names array will be decarled at this point.
// The inner function has access to the outer function varaibles. The are bound to it even after the outer funtion returns.
// A function object which contains a function and a refence to the environement in which it was created.
// JavaScript: The Good Parts https://www.youtube.com/watch?v=hQVTIJBZook


export var digit_name = function() {
		var names = ['one', 'two', 'three', 'four', 'five'];

		return function (n) {
			return names[n];
		};

}();





// This can be generalised in to a constructor pattern.
export var singleton = function () {
	var privateVariable ;

	function privateFunction() {

	};

	return {

		firstMethod : function (a, b) {
			privateVariable ++;
		},

		secondMethod : function(c) {
			privateFunction();
		}

	};

}();


// Make an object

// 1) Use and Object literal
// 2) new
// 3) Object.create
// 4) call another power constructor


function Something() {
    this.foo = "bar";
};

function something2() {
    var that = {};
    that.foo = "bar";
    return that;
};

var x = new Something();
var y = new something2(); 
var z = something2(); // prototype is not inherited in this case:

//you will find that the prototype is not inherited in the latter case:

typeof (new Something()).method === "function";
typeof (new something2()).method === "undefined";

// Calling with new invokes the [[Construct]] mechanism, which involves setting the [[Prototype]] property according to the .prototype property of the constructor.

// Note: you can access an object's [[Prototype]] (which is different from a constructor's .prototype) with Object.getPrototypeOf:

Object.getPrototypeOf(new Something()) === Something.prototype; 
Object.getPrototypeOf(new something2()) === Object.prototype; 