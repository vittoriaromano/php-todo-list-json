<?php
//connessione file json
$list = file_get_contents(__DIR__.'/list.json');
//se post e settato rinominarlo new_item
$new_item = isset($_POST['newItem']) ? $_POST['newItem'] : "";

//se il post non e' vuoto convertiro da json a php
if($new_item !== ""){
    $list = json_decode($list, true);
    //dato valore
    $list[] = [
        "text" => $new_item,
        "done" => false
    ];
    //codifica dato valore in una stringa in sintassi JSON
    $list = json_encode($list);
    //aggiungere il contenuto del file nel json
    file_put_contents(__DIR__.'/list.json', $list );
}
//informare http del formato data
header('Content-Type: application/json');

//stanpare dato
echo $list; 

