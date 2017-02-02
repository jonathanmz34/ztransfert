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
     $pass = $request->password;
     if ($username != "") {

    $mysqli = new mysqli('localhost','agilizer_agilizer_trs','agiletrs2017','agilizer_agiletrs');
    $query = "SELECT * FROM `Transferts` WHERE `FROM`="."'".$username."'";
    $dbresult = $mysqli->query($query);

    while($row = $dbresult->fetch_array(MYSQLI_ASSOC)){
        $trans = $row['LIEN'];
        $posnomfichier = strrpos($trans, '/', -1);
        $long = strlen($trans);
        $row['LIEN'] = substr($trans, $posnomfichier+1, $long);

        $data[] = array(
            'libelle' => $row['LIBELLE'],
            'from' => $row['FROM'],
            'etat' => $row['ETAT'],
            'date' => $row['DATE'],
            'lien' => $row['LIEN']
        );
    }

    if($dbresult){
      //  $result = "{'comptes':". json_encode($data)."}";


       $result = json_encode($data);
    }
    else {
        $result = "{'success':false}";
    }

    echo($result);
    }
    }
?>
