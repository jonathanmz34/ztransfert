<?php
 //http://stackoverflow.com/questions/18382740/cors-not-working-php
 //test
 if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }


    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $postdata = file_get_contents("php://input");
 if (isset($postdata)) {
 $request = json_decode($postdata);
 $username = $request->username;
 $pass = $request->password;
 if ($username != "") {


  $db = mysqli_connect('localhost','agilizer_agilizer_trs','agiletrs2017','agilizer_agiletrs');
  if(mysqli_connect_errno()){echo mysqli_connect_error();}else{


  $query = "SELECT * FROM `Users` WHERE `LOGIN`="."'".$username."'";
  $result = mysqli_query($db, $query);
  $row = mysqli_fetch_array($result);
  if($row[1] == $pass){
  if($row[3] == "ADMIN"){ echo("ADMIN");} else {echo($row[0]);}
  }else{
  echo("NO");
  }
$db->close();
  }

 }
 else {
 echo "Empty username parameter!";
 }
 }
 else {
 echo "Not called properly with username parameter!";
 }
?>
