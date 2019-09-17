<?php

$data = array(
	'success' => true,
	'data' => array(
		'units' => array(
			array(
				'img' => 'h4hdkf73hg',
				'level' => 11,
				'name' => 'John',
				'x' => 0,
				'y' => 0,
				'chp' => 25,
				'hp' => 54,
				'actions' => array(
					array('id' => 'walk'),
					array('id' => 'hit')
				)
			),
			array(
				'img' => 'k4djdhs8js',
				'level' => 10,
				'name' => 'Alex',
				'x' => 2,
				'y' => 1,
				'chp' => 46,
				'hp' => 62,
				'actions' => array(
					array('id' => 'walk'),
					array('id' => 'hit')
				)
			),
			array(
				'img' => 'jdhgd5hds7',
				'level' => 12,
				'name' => 'Don',
				'x' => 2,
				'y' => 1,
				'chp' => 46,
				'hp' => 62,
				'actions' => array(
					array('id' => 'walk'),
					array('id' => 'hit')
				)
			)
		),
		'enemies' => array(
			array(
				'img' => 'j4sdg7hdjs',
				'level' => 1,
				'name' => 'Skeleton',
				'x' => 103,
				'y' => 123,
				'chp' => 12,
				'hp' => 15
			),
			array(
				'img' => 'j4sdg7hdjs',
				'level' => 2,
				'name' => 'Skeleton',
				'x' => 43,
				'y' => -50,
				'chp' => 2,
				'hp' => 14
			)
		),
		'turn' => 0
	)
);
die(json_encode($data));