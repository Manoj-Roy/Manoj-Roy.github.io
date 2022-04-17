<?php
include 'db.php';

ini_set('max_execution_time', 3000);
ini_set('memory_limit','1000M');

if($_REQUEST['to_do']=='insert_form_builder'){
	
	 $json_code=$_REQUEST['json_code']; 
	 
	 $return_data = array('res'=>$json_code);
		


	
    $no_of_form = "Select *  From `form_builder`";
    $result_row = mysqli_query($no_of_form) or die(mysqli_error());
    	if(mysqli_num_rows($result_row)){
        $sql = "Delete From `form_builder`";
	    mysqli_query($sql) or die(mysqli_error());
	}

	$sql_from_builder = "INSERT INTO  form_builder (`json_data`)
			VALUES ('".$json_code."')";

	$result_from_builder = mysqli_query($sql_from_builder) or die(mysqli_error()); 

	if($result_from_builder){
		
         $msg = "success";
	}

	else{ $msg = "failure"; }
		

	$return_data = array('res'=>$msg);
		
	echo json_encode($return_data); 
	exit;	 	
	
}
?>