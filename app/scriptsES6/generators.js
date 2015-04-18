/**
 * scripts/Generators.js
 *
 * 
 * ref: Introduction to JavaScript and Browser DOM https://www.youtube.com/watch?v=ljNi8nS5TtQ
 */

export var myGenerators = function () {

	console.log( ' Generators 1');

	
	function* fibonacciA() {
	    let [prev, curr] = [0, 1];
	    for (;;) {
	        [prev, curr] = [curr, prev + curr];
	        yield curr;
	    }
	}

	let seq = fibonacciA();

	console.log(seq.next().value);
	console.log(seq.next().value);
	console.log(seq.next().value);
	console.log(seq.next().value);
	console.log(seq.next().value);
	console.log(seq.next().value);
	console.log(seq.next().value);


	console.log( ' Generators 2');

	var fibonacciB = {
  		[Symbol.iterator]: function*() {
    		var pre = 0, cur = 1;
    		for (;;) {
      			var temp = pre;
      			pre = cur;
      			cur += temp;
      			yield cur;
    			}
  		}
	};

	for (var n of fibonacciB) {
	  // truncate the sequence at 1000
	  if (n > 100)
	    break;
	  console.log(n);
	}


};