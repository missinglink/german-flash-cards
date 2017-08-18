
var fs = require('fs');
var csv = fs.readFileSync( 'vocab.csv', 'utf8' );
var lines = csv.trim().split('\n');

var header = lines.shift().trim().split(',');
var json = lines.map( function( line ){
  var row = {};
  line.trim().split(',').forEach( function( cell,  column ){
    row[ header[ column ] ] = cell;
  });
  return row;
});

console.log( JSON.stringify( json ) );
