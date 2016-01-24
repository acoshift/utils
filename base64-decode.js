'use strict';
var fs = require('fs');

/*
  // input: file path | string
*/

try {
  let f = process.argv[2];
  try {
    f = fs.readFileSync(f);
  } catch(e) {}
  console.log(new Buffer(f, 'base64').toString());
} catch(e) {
  console.error(e);
}
