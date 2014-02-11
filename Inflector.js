'use strict';

var _cache = {};

var plural = {

	'rules' : [
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

	'uninflected' : [
		'.*[nrlm]ese', '.*deer', '.*fish', '.*measles', '.*ois', '.*pox', '.*sheep', 'people'
	],

	'irregular' : {
		'atlas' : 'altlases'
	}

};

var singular = {

	'rules' : [
		[ new RegExp( '(s)tatuses$', 'gi' ), '$1tatus' ],

		[ new RegExp( '^(.*)(menu)s$', 'gi' ), '$1' ],

		[ new RegExp( '(quiz)zes$', 'gi' ), '$1' ],

		[ new RegExp( '(vert|ind)ices$', 'gi' ), '$1ex' ],

		[ new RegExp( '^(ox)en', 'gi' ), '$1' ],

		[ new RegExp( '(alias)(es)*$', 'gi' ), '$1' ],

		[ new RegExp( '(alumn|bacill|cact|foc|fung|nucle|radi|stimul|syllab|termin|viri?)i$', 'gi' ), '$1us' ],

		[ new RegExp( '([ftw]ax)es', 'gi' ), '$1' ],

		[ new RegExp( '(cris|ax|test)es$', 'gi' ), '$1is' ],

		[ new RegExp( '(shoe|slave)s$', 'gi' ), '$1' ],

		[ new RegExp( '(o)es$', 'gi' ), '$1' ],

		[ new RegExp( 'ouses$', 'gi' ), 'ouse' ],

		[ new RegExp( '([^a])uses$', 'gi' ), '$1us' ],

		[ new RegExp( '([m|l])ices$', 'gi'), '$1ouse' ],

		[ new RegExp( '(x|ch|ss|sh)es$', 'gi' ), '$1' ],

		[ new RegExp( '(m)ovies$', 'gi' ), '$1ovie' ],

		[ new RegExp( '(s)eries$', 'gi' ), '$1eries' ],

		[ new RegExp( '([^aeiouy]|qu)ies$', 'gi' ), '$1y' ],

		[ new RegExp( '(tive)s$', 'gi' ), '$1' ],

		[ new RegExp( '(hive)s$', 'gi' ), '$1' ],

		[ new RegExp( '(drive)s$', 'gi' ), '$1' ],

		[ new RegExp( '([le])ves$', 'gi' ), '$1f' ],

		[ new RegExp( '[^rfo]ves$', 'gi' ), '$1f' ],

		[ new RegExp( '(^analy)ses$', 'gi' ), '$1sis' ],

		[ new RegExp( '(analy|diagno|^ba|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$', 'gi' ), '$1sis' ],

		[ new RegExp( '([ti])a$', 'gi' ), '$1um' ],

		[ new RegExp( '(p)eople$', 'gi' ), '$1erson' ],

		[ new RegExp( '(m)en$', 'gi' ), '$1an' ],

		[ new RegExp( '(c)hildren', 'gi' ), '$1hild' ],

		[ new RegExp( '(n)ews$', 'gi' ), '$1ews' ],

		[ new RegExp( 'eaus$', 'gi' ), 'eau' ],

		[ new RegExp( '^(.*us)$', 'gi' ), '$1' ],

		[ new RegExp( 's$', 'gi' ), '' ]
	],

	'uninflected' : [
		'.*[nrm]ese', '.*deer', '.*fish', '.*measles', '.ois', '.*pox', '.*sheep', '.*ss'
	],

	'irregular' : {
		'foes'  : 'foe',
		'waves' : 'wave'
	}
};

var _cache       = [];
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

Inflector.prototype.singularize = function( word ) {

	var rules = singular.rules;
	var match;

	for( var i = 0; i < rules.length; i++ ) {

		match = word.match( rules[ i ][ 0 ] );
		if( match ) {
			_cache.singularize = { word : word.replace( rules[ i ][ 0 ], rules[ i ][ 1 ] ) };
			return _cache.singularize.word;
		}

	}

};

Inflector.prototype.underscore = function() {

};

Inflector.prototype.humanize = function() {

};

Inflector.prototype.slug = function() {

};

module.exports = Inflector;