<?php
    function upload($index, $destination, $maxsize, $extentions)
    {
    	if(!isset($_FILES[$index]) OR $_FILES[$index]['error'] > 0) return 2;
    	if($maxsize !== FALSE AND $_FILES[$index]['size'] > $maxsize) return 3;
    	$ext = substr(strrchr($_FILES[$index]['name'], '.'),1);
    	if($extentions !== FALSE AND !in_array($ext,$extentions)) return 4;
    	return move_uploaded_file($_FILES[$index]['tmp_name'], $destination);
    };

    $posnomfichier = strrpos($_FILES['myPost']['name'], '.');
    $nomfichier = substr($_FILES['myPost']['name'], 0, $posnomfichier);
    $newnamfile = $nomfichier ;
    $depot = './depots/' .  $newnamfile . '.xlsx';
    $testup = upload( 'myPost', $depot, 15000000, array('xls', 'xlsx'));
    echo($testup);
?>
