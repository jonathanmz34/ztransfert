<?php
 if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

     $postdata = file_get_contents("php://input");
         if (isset($postdata)) {
         $request = json_decode($postdata);
         $username = $request->username;
         $pass = $request->password;
         $nom = $request->name;
         if ($username != "") {

    $mysqli = new mysqli('localhost','agilizer_agilizer_trs','agiletrs2017','agilizer_agiletrs');

    $query = "INSERT INTO `Users`(`NOM`, `LOGIN`, `PASS`) VALUES (" . "'". $nom ."','" . $username ."','" . $pass ."')";
    $dbresult = $mysqli->query($query);



    if($dbresult){
      //  $result = "{'comptes':". json_encode($data)."}";
     mkdir('./depots/' . $username, 0705);

       $result = json_encode($data);
    }
    else {
        $result = "{'success':false}";
    }



    }
    }
?>
