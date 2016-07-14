<?php 
	/*DB Connection*/
	$mysqli = new mysqli("mysql51-123.wc1.ord1.stabletransit.com", "871197_votolat", "D4.#2014.votolatino", "871197_votolatino", 3306);
	if ($mysqli->connect_errno) {
	    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	}
	$res = $mysqli->query("SELECT * FROM voto");
	$rows = array();
	while ($row = $res->fetch_assoc()) {
    	$rows[]=$row;
	}
	$json = json_encode($rows);

	//echo $json;
?>
