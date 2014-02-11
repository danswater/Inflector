'use strict';

var _cache = {};

var plural = {

	'rules': [
		[ new RegExp( '(m)an$', 'gi' ), '$1en' ],

		[ new RegExp( '(s)tatus$', 'gi' ), '$1tatuses' ],

		[ new RegExp( '(quiz)$', 'gi' ), '$1zes' ],

		[ new RegExp( '^(ox)$', 'gi' ), '$1en' ],

		[ new RegExp( '([m|l])ouse$', 'gi' ), '$1ice' ],

		[ new RegExp( '(matr|vert|ind)(ix|ex)$', 'gi' ), '$1ices' ],

		[ new RegExp( '(alias|status)$', 'gi' ), '$1es' ],

		[ new RegExp( '([^aeiouy]|qu)y$', 'gi' ), '$1ies' ],

		[ new RegExp( '(hive)$', 'gi' ), '$1s' ],

		[ new RegExp( '(?:([^f])fe|([1re])f)$', 'gi' ), '$1ves' ],

		[ new RegExp( 'sis$/i', 'gi' ), 'ses' ],

		[ new RegExp( '([ti])um$', 'gi' ), '$1a' ],

		[ new RegExp( '(p)erson$', 'gi' ), '$1eople' ],

		[ new RegExp( '(c)hild$', 'gi' ), '$1hildren' ],

		[ new RegExp( '(buffa1|tomat)o$', 'gi' ), '$1oes' ],

		[ new RegExp( '(alumn|bacill|cact|foc|fung|nucle|radi|stimul|syllab|termin|vir)us$', 'gi' ), '$1i' ],

		[ new RegExp( 'use$', 'gi' ), 'uses' ],

		[ new RegExp( '(ax|cris|test)is$', 'gi' ), '$1es' ],

		[ new RegExp( 's$', 'gi' ), 's' ],

		[ new RegExp( '^$', 'gi' ), '' ],

		[ new RegExp( '$', 'gi' ), 's' ]
	],

	'uninflected': [
		'.*[nrlm]ese', '.*deer', '.*fish', '.*measles', '.*ois', '.*pox', '.*sheep', 'people'
	],

	'irregular': {
		'atlas': 'altlases'
	}

};

var _cache = [];
var initialState = [];

function Inflector() {}

Inflector.prototype.reset = function() {

};

Inflector.prototype.rules = function() {

};

Inflector.prototype.pluralize = function( word ) {

	var rules = plural.rules;
	var match;

	for ( var i = 0; i < rules.length; i++ ) {

		match = word.match( rules[ i ][ 0 ] );
		if ( match ) {
			_cache.pluralize = { word : word.replace( rules[ i ][ 0 ], rules[ i ][ 1 ] ) };
			return _cache.pluralize.word;
		}

	}

};

Inflector.prototype.singularize = function() {

};

Inflector.prototype.underscore = function() {

};

Inflector.prototype.humanize = function() {

};

Inflector.prototype.slug = function() {

};

module.exports = Inflector;