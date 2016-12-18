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
	'rotten',
	'scaly',
	'silly',
	'slimy',
	'smelly',
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
	'creeper',
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

var background = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
];

function get_name() {
	return adjective.random() + ' ' + adjective_ed.random() + ' ' + noun.random();
}

function monster_maker() {
	document.getElementsByTagName('h1')[0].innerHTML = get_name();
	document.getElementsByTagName('body')[0].style.backgroundImage = "url('backgrounds/" + background.random() + ".jpg')";
}

document.addEventListener( 'DOMContentLoaded', function( event ) {
	monster_maker();

	document.getElementsByTagName('a')[0].onclick = function ( e ) {
		e.preventDefault();
		monster_maker();
	};
} );
