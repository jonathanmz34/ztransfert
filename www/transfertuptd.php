<?php
 //http://stackoverflow.com/questions/18382740/cors-not-working-php
 if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

     $postdata = file_get_contents("php://input");
         if (isset($postdata)) {
         $request = json_decode($postdata);
         $username = $request->username;
         $name = $request->name;
         if ($username != "") {

    $mysqli = new mysqli('localhost','agilizer_agilizer_trs','agiletrs2017','agilizer_agiletrs');
    $query = "UPDATE `Transferts` SET `ETAT` = '" . $name . "' WHERE `LIEN`="."'".$username."'";

    $dbresult = $mysqli->query($query);



    if($dbresult){
       $result = json_encode($dbresult);
    }
    else {
        $result = "{'success':false}";
    }

    echo($result);

    }
    }
?>
