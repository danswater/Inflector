var Inflector = require( './Inflector' );

var inflector = new Inflector();

var pWord =  [
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

var sWord = [
	inflector.singularize( 'statuses' ),
	inflector.singularize( 'quizzes' ),
	inflector.singularize( 'indices' ),
	inflector.singularize( 'oxen' ),
	inflector.singularize( 'aliases' ),
	inflector.singularize( 'alumni' ),
	inflector.singularize( 'waxes' ),
	inflector.singularize( 'axes' ),
	inflector.singularize( 'shoes' ),
	inflector.singularize( 'foes' ),
	inflector.singularize( 'houses' ),
	inflector.singularize( 'buses' ),
	inflector.singularize( 'mouses' ),
	inflector.singularize( 'movies' ),
	inflector.singularize( 'series'),
	inflector.singularize( 'flies' ),
	inflector.singularize( 'natives' ),
	inflector.singularize( 'hives' ),
	inflector.singularize( 'drives' ),
	inflector.singularize( 'selves' ),
	inflector.singularize( 'wolves' ),
	inflector.singularize( 'analyses' ),
	inflector.singularize( 'diagnoses' ),
	inflector.singularize( 'tita' ),
	inflector.singularize( 'people' ),
	inflector.singularize( 'men' ),
	inflector.singularize( 'children' ),
	inflector.singularize( 'news' ),
	inflector.singularize( 'eaus' ),
	inflector.singularize( 'buses' ),
	inflector.singularize( 'babies' )
];
console.log( sWord );