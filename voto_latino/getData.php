<?php 
	$conexion = mysql_connect('mysql51-030.wc1:3306', '721651_bmi_user', 'Us3r_bm1');						
	$db_selected = mysql_select_db('721651_bmi', $conexion);
	
	$result = mysql_query("SELECT * FROM ws");
	if($result){			
		while ($registro = mysql_fetch_array($result, MYSQL_NUM)) {													
			echo($registro[0].",".$registro[1].",".$registro[2].",".$registro[3].",".$registro[4].",".$registro[5].",".$registro[6].",".$registro[7].",".$registro[8].",".$registro[9].",".$registro[10].",".$registro[11].",".$registro[12].",".$registro[13].",".$registro[14].",".$registro[15].",".$registro[16].",".$registro[17].",".$registro[18].",".$registro[19].",".$registro[20].",".$registro[21].",".$registro[22].",".$registro[23].",".$registro[24].",".$registro[25].",".$registro[26].",".$registro[27].",".$registro[28].",".$registro[29].",".$registro[30].",".$registro[31].",".$registro[32].",".$registro[33]."<br/>");	
		}
		
	}

?>