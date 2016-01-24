'use strict';
var fs = require('fs');
var nepq = require('nepq');

/*
  // input: string
*/

try {
  console.log(nepq.parse(process.argv[2]));
} catch(e) {
  console.error(e);
}
