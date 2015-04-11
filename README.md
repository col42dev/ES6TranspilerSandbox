# ES6TranspilerSandbox


## Overview

Makes use of familar established JS frameworks and tools to provide a sandbox environment for transpiling ES6 in to ES5 to run from the browser. This enable you to build and develop app in ES6 with minimal workflow overheads.

Yeoman was used to scaffold this app. Use Grunt to build and run. Browserify is used to covert JS to browser supported format and the Babelify option to transpile it from ES6 to ES5.


## Sandbox Setup

These are the steps used to setup this sandbox.

  $ npm install -g yo
  
  $ yo --version 
  
  1.4.6
  
  $ npm install -g generator-browserify
  
  $ npm install babelify

  $ yo browserify
  
    ? Which build system would you like to use? Grunt
    ? Which front-end framework would you like to use? Bootstrap
    ? Would you like to include Modernizr? No
    ? Would you like to include Jade templating? No


### Update Grunt browsify task to specify babelify option.
     browserify: {
      ...
      dev: {
        src: ['<%= yeoman.app %>/scriptsES6/main.js'],
        dest: '.tmp/scripts/bundle.js',
        options: {
          transform: [["babelify", { "stage": 0 }]],
          debug: true,
          external: ['jquery', 'lodash', 'backbone']
        }
        ...
      },
      
    },
    
  This is the eqivalent of the following command line :
  
  * browserify app/scriptsES6/main.js -t babelify -o app/scripts/bundle.js

