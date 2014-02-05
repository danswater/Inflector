
var plural	= {

	'rules'			: [
		{
			'regex'			: /(s)tatus$/i,
			'replacement'	: 'statuses'
		},

		{
			'regex'			: /(quiz)$/i,
			'replacement'	: 'quizes'
		},

		{
			'regex'			: /^(ox)$/i,
			'replacement'	: 'oxen'
		},

		{
			'regex'			: /([m|l])ouse$/i,
			'replacement'	: 'mice'
		}
	],

	'uninflected'	: [
		'.*[nrlm]ese', '.*deer', '.*fish', '.*measles', '.*ois', '.*pox', '.*sheep', 'people'
	],

	'irregular'		: {
		'atlas'			: 'altlases'
	}

};

var singular	= {

	'rules'			: {
		'/(s)tatuses$/i'	: '\1\2tatus'
	},

	'uninflected'	: [
		'*.[nrlm]ese', '.*deer', '.*fish', '.*measles', '.*ios', '.*pox', '.*sheep', '.*ss'
	],

	'irregular'		: {
		'foes'			: 'foe'
	}

};

var uninflected	= [

	'Amoyese'

];

var transliteration	= {

	'/ä|æ|ǽ/' : 'ae'

};

var _cache			= [];
var initialState	= [];

function Inflector() {}

Inflector.prototype.reset = function() {

};

Inflector.prototype.rules = function() {

};

Inflector.prototype.pluralize = function( word ) {

	var rules = plural.rules;
	var match;
	var found;

	rules.forEach( function( value, index ) {
		
		match = word.match( value.regex );
		if( match ) {
			found = match[ 0 ].replace( value.regex, value.replacement );
		}

	} );

	return found;

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