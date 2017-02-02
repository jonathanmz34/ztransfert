<?php
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS');// cache for 1 day
        header('Access-Control-Request-Method: POST');


$user1 = $_GET["user"];
echo ' </div>
  <div id="cadreForm">
    <form id="form1" name="form1" method="post" action="do_upload.php" enctype="multipart/form-data">
      	<div style="display:none;">
      	<input  type="text" name="nom" id="nomid" value="' .  $user1  . '"]); ?>"/>
      	</div>
      	<input type="file" name="myPost"/><br><br>
       	<input type="submit" name="postFile" value="Envoyer" />
    </form>
  </div>';
?>
