'use strict'
const fs = require('fs')
const jwt = require('jsonwebtoken')

/*
  // input structure
  interface JWTSignInput {
    data: Object;
    secret: string (base64);
    options: Object; // jwt sign options
  }
*/

try {
  let f = JSON.parse(fs.readFileSync(process.argv[2]))
  let r = jwt.sign(f.data, new Buffer(f.secret, 'base64').toString(), f.options)
  process.stdout.write(r) // no new line
} catch (e) {
  console.error(e)
}
