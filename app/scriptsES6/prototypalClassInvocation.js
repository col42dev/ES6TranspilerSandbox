/**
 * scripts/prototypalClassInvocation.js
 *
 * 
 * ref: Introduction to JavaScript and Browser DOM https://www.youtube.com/watch?v=ljNi8nS5TtQ
 */

"use strict";

// These are two equivalent ways to invoke teh same class.
export var prototypalClassInvocation = function () {

	function myPrototypalClass() {}

	console.log('class prototypal invocation');

	var instance1 = new myPrototypalClass();

	var instance2 = {};
	instance2.constructor = myPrototypalClass;
	instance2.__proto__  = myPrototypalClass.prototype;
	myPrototypalClass.apply( instance2);


	console.log("instance1.constructor === instance2.constructor: " + (instance1.constructor === instance2.constructor) );

	console.log("instance1.__proto__ === instance2.__proto__: " + (instance1.__proto__ === instance2.__proto__) );

	console.log("instance1 instanceof myPrototypalClass: " + (instance1 instanceof myPrototypalClass) );

	console.log("instance2 instanceof myPrototypalClass: " + (instance2 instanceof myPrototypalClass) );

};



export var prototypalClassIheritance = function () {


	// __proto__ VS. prototype in JavaScript
	// http://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript

	// prototype is a object property of a Function object. It is the prototype of objects constructed by that function.
	// __proto__ is internal property of an object, pointing to its prototype.
	// __proto__ is readonly in browsers.


	console.log('class prototypal inheritance ');

	function Point(x, y) {
	    this.x = x;
	    this.y = y;
	};

	// Point.prototype property is created internally when you declare above function.

	var myPoint = new Point(3, 3);

	// the following are all true
	myPoint.__proto__ == Point.prototype;
	myPoint.__proto__.__proto__ == Object.prototype;
	myPoint instanceof Point;
	myPoint instanceof Object;

	// Many properties can be added to the Point.prototype which are shared by Point instances created using new Point().
	Point.prototype.vectorLength = function() { 
		return Math.sqrt( this.x * this.x + this.y * this.y); 
	}

	console.log( 'myPoint.vectorLength = ' + myPoint.vectorLength());
};