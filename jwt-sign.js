'use strict';
var fs = require('fs');
var jwt = require('jsonwebtoken');

/*
  // input structure
  interface JWTSignInput {
    data: Object;
    secret: string;
    options: Object; // jwt sign options
  }
*/

try {
  let f = JSON.parse(fs.readFileSync(process.argv[2]));
  console.log(jwt.sign(f.data, new Buffer(f.secret, 'base64').toString(), f.options));
} catch(e) {
  console.error(e);
}
