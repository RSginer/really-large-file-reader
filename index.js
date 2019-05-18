'use strict'

const fs = require('fs')
const es = require('event-stream')

function readFile (filePath) {
  console.time('read')
  fs.createReadStream(filePath)
    .pipe(es.split())
    .pipe(es.mapSync((line) => {
      console.log(line)
    })).on('end', () => {
      console.timeEnd('read')
    }).on('error', (err) => {
      console.log(err)
    })
}

readFile(process.argv[2])
