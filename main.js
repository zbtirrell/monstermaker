Array.prototype.random = function () {
	return this[ Math.floor( ( Math.random() * this.length ) ) ];
}

var adjective = [
	'bat',
	'big',
	'cat',
	'creepy',
	'green',
	'hairy',
	'lizard',
	'many',
	'purple',
	'scaly',
	'silly',
	'slimy',
	'swamp',
	'triple',
	'ugly',
];

var adjective_ed = [
	'armed',
	'clawed',
	'eared',
	'eyed',
	'fanged',
	'footed',
	'gilled',
	'headed',
	'legged',
	'lipped',
	'mouthed ',
	'nosed',
	'skinned',
	'toed',
	'toothed',
];

var noun = [
	'alien',
	'belcher',
	'fiend',
	'ghoul ',
	'knucklehead',
	'mangler',
	'mummy',
	'parent',
	'phantom',
	'sucker',
	'thing',
	'tickler',
	'vampire ',
	'warlock',
	'zombie',
];

function get_name() {
	return adjective.random() + ' ' + adjective_ed.random() + ' ' + noun.random();
}

document.addEventListener( 'DOMContentLoaded', function( event ) {
	document.getElementsByTagName('h1')[0].innerHTML = get_name();

	document.getElementsByTagName('a')[0].onclick = function ( e ) {
		e.preventDefault();
		document.getElementsByTagName('h1')[0].innerHTML = get_name();
	};
} );
