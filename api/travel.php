<?php

$data = array(
	'success' => true,
	'data' => array(
		'type' => 'battle',
		'text' => 'Вы обнаружили заброшенное кладбище. Желаете подойти поближе и сразиться с его обитателями?'
	)
);
die(json_encode($data));