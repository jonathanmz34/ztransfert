<?php
 if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

     $postdata = file_get_contents("php://input");
         if (isset($postdata)) {
         $request = json_decode($postdata);
         $dest = $request->name;
         $obj = $request->username;
         $mess = $request->mess;
         $stat = $request->etat;
        // $fichiers = explode(",", $obj);
        // $destinataires = explode(",", $dest);
         $depose = $stat;
         $heure = date("H:i:s");
         $date = date("d-m-Y");
         $datebase = $date . '-' . $heure;

        $i=0;
        while($i < count($obj)) {
           reset($dest);
           while($a = each($dest)) {

           $mysqli = new mysqli('localhost','agilizer_agilizer_trs','agiletrs2017','agilizer_agiletrs');
           $query = "INSERT INTO `Notifications`(`TO`, `DATE`, `LIEN`, `ETAT`, `LIBELLE`, `MESSAGE`) VALUES ('". $a[1] ."','" . $datebase ."','" . $obj[$i] ."','" . $depose ."','" . $obj[$i] ."','" . $mess ."')";
           $dbresult = $mysqli->query($query);

           }
           $i++;

        }

    $dbresult = json_encode($destinataires);
    $dbresult2 = json_encode($fichiers);
    echo($dest);
    }
?>
