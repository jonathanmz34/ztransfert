<?php
 //http://stackoverflow.com/questions/18382740/cors-not-working-php
 if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    $mysqli = new mysqli('localhost','agilizer_agilizer_trs','agiletrs2017','agilizer_agiletrs');
    $query = "SELECT * FROM `Users`";
    $dbresult = $mysqli->query($query);

    while($row = $dbresult->fetch_array(MYSQLI_ASSOC)){
      if($row['NOM'] != "ADMIN"){
        $data[] = array(
            'login' => $row['LOGIN'],
            'pass' => $row['PASS'],
            'etat' => $row['ETAT'],
            'nom' => $row['NOM']
        );
        };
    }

    if($dbresult){
      //  $result = "{'comptes':". json_encode($data)."}";


       $result = json_encode($data);
    }
    else {
        $result = "{'success':false}";
    }

    echo($result);
?>
