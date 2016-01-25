'use strict';
var fs = require('fs');

/*
  // input: file path | string
*/

try {
  let f = process.argv[2];
  try {
    f = fs.readFileSync(f).toString();
  } catch(e) {}
  console.log(JSON.stringify(JSON.parse(f)));
} catch(e) {
  console.error(e);
}
