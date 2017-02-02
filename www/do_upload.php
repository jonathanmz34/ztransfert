<?php
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
          header('Access-Control-Allow-Credentials: true');
          header('Access-Control-Max-Age: 86400');

$heure = date("H:i:s");
$sec = date("s");
$date = date("d-m-Y");

if(isset($_POST['postFile']))
{
	function upload($index, $destination, $maxsize, $extentions)
{
	if(!isset($_FILES[$index]) OR $_FILES[$index]['error'] > 0) return 2;
	if($maxsize !== FALSE AND $_FILES[$index]['size'] > $maxsize) return 3;
	$ext = substr(strrchr($_FILES[$index]['name'], '.'),1);
	return move_uploaded_file($_FILES[$index]['tmp_name'], $destination);
}
$login = $_POST['nom'];

$nomfichier = $_FILES['myPost']['name'];
$newnamfile = $nomfichier;
$datebase = $date . '-' . $heure . '-' . $sec;
$depot = './depots/' . $login . '/' . $newnamfile;
$result = upload('myPost', $depot,10000000);
$lienimg = 'http://ztransfert.agilizer.info/depots/' . $login . '/' . $newnamfile;
if($result = "1"){

$posnomfichier = strrpos($_FILES['myPost']['name'], '.');
$long = strlen($_FILES['myPost']['name']);
$exten = substr($_FILES['myPost']['name'], $posnomfichier, $long);

$depose = "depose";
$lib = "Fichier : " . $exten .", par : ". $login;

    $mysqli = new mysqli('localhost','agilizer_agilizer_trs','agiletrs2017','agilizer_agiletrs');

    $query = "INSERT INTO `Transferts`(`FROM`, `DATE`, `LIEN`, `ETAT`, `LIBELLE`) VALUES ('". $login ."','" . $datebase ."','" . $lienimg ."','" . $depose ."','" . $lib ."')";

    $dbresult = $mysqli->query($query);
    header('Location:http://ztransfert.agilizer.info/upload.php');

    if($dbresult){

       $result = json_encode($data);

    }
    else {
        $result = "{'success':false}";
    }

};

}

?>
