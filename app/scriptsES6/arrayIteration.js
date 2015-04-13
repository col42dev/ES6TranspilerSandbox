/**
 * scripts/arrayIteration.js
 *
 * 
 * ref: Introduction to JavaScript and Browser DOM https://www.youtube.com/watch?v=ljNi8nS5TtQ
 */

export var arrayIteration = function () {

	console.log( ' Array Iteration');
	var myLog = '';

	var spanish = {
		house : 'casa',
		hello : 'hola',
		clothing: {
        	style: 'simple',
        	isDouche: false }
	};

	myLog = '1) ';
	for ( var key in spanish) {
		myLog += key  + ' => ' + spanish[key] + '; ';
	}
	console.log(myLog);

	myLog = '2) ';
	for ( var key in spanish) {
		if ( spanish.hasOwnProperty(key)) { // real or hidden property
			myLog += key  + ' => ' + spanish[key] + '; ';
		}
	}
	console.log(myLog);

	console.log( JSON.stringify( Object.keys( spanish))); // ["house","hello","clothing"]


	myLog = '4) ';
	Object.keys( spanish).forEach( function( key) {
			myLog += key  + ' => ' + spanish[key] + '; ';
	});
	console.log(myLog);

	// for...in statement
	// You can read it as "FOR every property IN the obj object, assign each property to the PROPT variable in turn".
};