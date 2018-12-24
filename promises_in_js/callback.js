const fs = require('fs')
const util = require('util')

// Use native fs with callback
fs.readFile(__filename, 'utf8', (error, content) => {
    if (error) {
        console.log(error)
    } else {
        console.log(content);
    }
})

// Own Promise implementation of file system
function readFile(path, encoding){
    return new Promise((res, rej) => {
        fs.readFile(path, encoding, (error, content) => {
            if(error) {
                rej(error)
            } else {
                res(content);
            }
        })
    })
}

// Use the Promisified function
readFile(__filename, 'utf8').then(
    content => {
        console.log('Content ok')
    },
    error => {
        console.log('error', error);
    });

// Package who provide the promisification
const reaaadFile = util.promisify(fs.readFile);

// Use function
reaaadFile(__filename, 'utf8')
    .then(content => console.log('Content read'))