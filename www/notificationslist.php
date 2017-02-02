<?php
define('CHARSET', 'ISO-8859-1');
define('REPLACE_FLAGS', ENT_COMPAT | ENT_XHTML);
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

    $query = "SELECT * FROM `Notifications` WHERE `TO`="."'".$username."'"." AND `ETAT`!= 'archive'";
    $dbresult = $mysqli->query($query);

    while($row = $dbresult->fetch_array(MYSQLI_ASSOC)){

        $data[] = array(
            'dest' => $row['TO'],
            'date' => substr($row['DATE'],0,10),
            'date2' => $row['DATE2'],
            'lien' => $row['LIEN'],
            'libelle' => $row['LIBELLE'],
            'message' => (string)$row['MESSAGE'],
            'etat' => $row['ETAT'],
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

    } else {
    $mysqli = new mysqli('localhost','agilizer_agilizer_trs','agiletrs2017','agilizer_agiletrs');

        $query = "SELECT * FROM `Notifications` WHERE `ETAT`!= 'archive'";
        $dbresult = $mysqli->query($query);

        while($row = $dbresult->fetch_array(MYSQLI_ASSOC)){

            $data[] = array(
                'dest' => $row['TO'],
                'date' => $row['DATE'],
                'date2' => $row['DATE2'],
                'lien' => $row['LIEN'],
                'libelle' => $row['LIBELLE'],
                'message' => (string)$row['MESSAGE'],
                'etat' => $row['ETAT'],
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

