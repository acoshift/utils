'use strict'
const fs = require('fs')
const nepq = require('nepq')

/*
  // input: string
*/

try {
  let f = process.argv[2]
  try {
    f = fs.readFileSync(f).toString()
  } catch (e) {}
  console.log(nepq.parse(f))
} catch (e) {
  console.error(e)
}
