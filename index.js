var Inflector = require( './Inflector' );

var inflector = new Inflector();
var plural = inflector.pluralize( 'mouse' );
console.log( plural );