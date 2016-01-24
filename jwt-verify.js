'use strict';
var fs = require('fs');
var jwt = require('jsonwebtoken');

/*
  // input: token file | string, secret file | string, algorithm string
*/

try {
  let f = process.argv[2];
  let secret = process.argv[3];
  let algorithm = process.argv[4];
  try {
    f = fs.readFileSync(f).toString();
  } catch(e) {}
  try {
    secret = new Buffer(fs.readFileSync(secret).toString(), 'base64').toString();
  } catch(e) {}
  console.log(jwt.verify(f, secret, { algorithms: [algorithm] }));
} catch(e) {
  console.error(e);
}
