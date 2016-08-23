<?php
$link = mysqli_connect('localhost', 'root', '');
if (!$link) {
    die('Not connected : ' . mysqli_error());
//header('Location: http://imis.imerit.net/index_maintanace.php');
exit;
}

$db_selected = mysqli_select_db('test', $link);
if (!$db_selected) {
    die ('Can\'t use IMIS : ' . mysql_error());
}

/* else
  {
  echo "successfully logged in database";
  }*/

?>