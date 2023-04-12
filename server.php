<?php
$list = file_get_contents(__DIR__.'/list.json');

header('Content-Type: application/json');
echo $list; 
