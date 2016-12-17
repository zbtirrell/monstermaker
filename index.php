<?php

$first = [
	'big',
	'hairy',
	'slimy',
	'many',
	'green',
	'swamp',
	'cat',
	'creepy',
	'lizard',
	'silly',
	'purple',
	'triple',
	'bat',
	'scaly',
	'ugly',
];

$second = [
	'eyed',
	'gilled',
	'mouthed ',
	'toothed',
	'headed',
	'legged',
	'eared',
	'skinned',
	'armed fanged',
	'lipped',
	'nosed',
	'clawed',
	'toed',
	'footed',
];

$third = [
	'thing',
	'belcher',
	'sucker',
	'mangler',
	'ghoul ',
	'fiend',
	'mummy',
	'phantom',
	'vampire ',
	'tickler',
	'zombie',
	'warlock',
	'knucklehead',
	'alien',
	'parent',
];

$name = $first[ array_rand( $first ) ] . ' ' . $second[ array_rand( $second ) ] . ' ' . $third[ array_rand( $third ) ];


?>

<!DOCTYPE html>
<html>
<head>
	<title>Parker and Xander's Monster Maker</title>
	<style type="text/css">
				 html {
					height: 100%;
					font-size: 62.5%; /* 10px with default settings */
				}

				body {
					margin: 0;
					height: 100%;
					width: 100%; /* width needed for Firefox */
					display: flex;
					align-items: center;
					justify-content: center;
					background: white url(background.jpg) no-repeat center;
					background-size: auto 100%;
				}

				h1 {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 10rem;
					padding: 0 3rem;

					background-color: hsla(0, 100%, 0%, .9);
					color: white;

					font-family: helvetica, sans-serif;
					font-size: 5rem; /* font shorthand doesn’t work with rem in IE10 */

					text-shadow: 0 0 1.2rem hsla(0, 100%, 100%, .4);

					box-shadow: 0 0 1.5rem hsla(0, 100%, 0%, .4);
					border-radius: .5rem;
				}
	</style>
</head>
<body>
	<div id="wrapper">
		<h1><?php echo $name; ?></h1>
	</div>
</body>
</html>