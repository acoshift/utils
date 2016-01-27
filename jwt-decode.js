'use strict'
var fs = require('fs')
var jwt = require('jsonwebtoken')

/*
  // input: token file | string
*/

try {
  let f = process.argv[2]
  try {
    f = fs.readFileSync(f).toString()
  } catch (e) {}
  console.log(jwt.decode(f))
} catch (e) {
  console.error(e)
}
