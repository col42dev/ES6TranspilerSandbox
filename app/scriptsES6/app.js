/**
 * scripts/app.js
 * App implementation useing module pattern.
 */

import { Dog, Wolf } from './functionExports';
import { myModule } from './modulePattern';
import { cChild } from './classes';

export function App() {
  console.log('app initialized');

  var publicMethod = function () {
   	console.log('boop');
  };

  var demoImportedFunctionCall = function () {
    var myDog = new Dog('Sherlock', 'beagle');
    console.log(myDog.bark()); // Sherlock: 

    var myWolf = new Wolf('Werewolf');
    console.log(myWolf.bark()); // Werewolf:
  };

  // Instaniate imported myModule objects.
  // Note, avoid use of 'new' keyword to create these instances.
  var demoModulePattern = function () {
    // single myModule instance 
    var myModuleInstance = myModule();

    // create an array of myModule instances
    var arrayOfMyModuleIntances = [];
    arrayOfMyModuleIntances.push( myModule());
    arrayOfMyModuleIntances.push( myModule());
    arrayOfMyModuleIntances.push( myModule());

    // accces public method for each myModule instance in the array.
    arrayOfMyModuleIntances.forEach( function( thisModuleInstance) {
      console.log( 'module random percentage = ' + thisModuleInstance.getRandomPercentage());
    });
  };


  // Instaniate using imported classes.
  var demoClassInvocation = function () {
    var myChild = new cChild('dwayne', 27);
    myChild.sayName();
  };

  return {
  	beep: publicMethod,
  	demoImportedFunctionCall : demoImportedFunctionCall,
  	demoModulePattern : demoModulePattern,
    demoClassInvocation : demoClassInvocation
  };
};



