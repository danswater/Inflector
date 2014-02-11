var Inflector = require( './Inflector' );

var inflector = new Inflector();

var aWord =  [
	inflector.pluralize( 'man' ),
	inflector.pluralize( 'status' ),
	inflector.pluralize( 'quiz'),
	inflector.pluralize( 'ox' ),
	inflector.pluralize( 'mouse' ),
	inflector.pluralize( 'matrix' ),
	inflector.pluralize( 'baby' ),
	inflector.pluralize( 'hive' ),
	inflector.pluralize( 'person' ),
	inflector.pluralize( 'child' ),
	inflector.pluralize( 'tomato' ),
	inflector.pluralize( 'alumnus' ),
	inflector.pluralize( 'use' ),
	inflector.pluralize( 'axis' ),
	inflector.pluralize( 'flag' )
];

console.log( aWord );