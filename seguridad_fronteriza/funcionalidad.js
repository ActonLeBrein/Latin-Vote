/*
	Funcionalidad para la infografía pedofilia
*/

var registros=[];	
	  
var ancho = $(window).width();
$(document).ready(function(){   	
	window.ver=$("#content").data("ver");
	if (ancho<=400){
		$(".instrucciones").html("Da clic en cada sector fronterizo para conocer el total de aprehensiones, muertes o agentes fronterizos en ese punto");
	}
	var fichero = AbrirFichero("data.xml");			
	var registro = fichero.getElementsByTagName('Row');		
	var i=0;	
	while (i < registro.length){	     		
		var anio= +registro[i].getElementsByTagName("year")[0].firstChild.nodeValue;		
		var tipo = registro[i].getElementsByTagName("tipo")[0].firstChild.nodeValue;
		var val = +registro[i].getElementsByTagName("val")[0].firstChild.nodeValue;
		if (jQuery.inArray(registros[anio],registros) != -1){						
			if ((jQuery.inArray(tipo,registros[anio]) == -1) && (val != 0)){			
			var length= +registros[anio].length;
			registros[anio][length]=tipo;
			}
		}else{					
				registros[anio]=[tipo];						
		}
		i=i+1;
	}
	/*console.log(registros);*/
	
	
	$("#btn_1").on("click", function(){				
		$("#btn_2").removeClass();
		$("#btn_3").removeClass();
		$("#btn_1").addClass("btn1_activo");				
		$("#tipo").val("Aprehensiones");
		if (window.ver=="esp"){
			$("#info_tipo").text("Aprehensiones");
		}else{
			$("#info_tipo").text("Apprehensions");
		}
		mostrarinfo($("#anio").text(),$("#tipo").val());
		colorearEdos("Aprehensiones");
	});
	
	$("#btn_2").on("click", function(){		
		$("#btn_1").removeClass();
		$("#btn_3").removeClass();
		$("#btn_2").addClass("btn2_activo");				
		$("#tipo").val("Muertes");
		if (window.ver=="esp"){
			$("#info_tipo").text("Migrantes muertos");
		}else{
			$("#info_tipo").text("Migrant Deaths");
		}
		mostrarinfo($("#anio").text(),$("#tipo").val());
		colorearEdos("Muertes");
	});	
	$("#btn_3").on("click", function(){		
		$("#btn_1").removeClass();
		$("#btn_2").removeClass();
		$("#btn_3").addClass("btn3_activo");						
		$("#tipo").val("Agentes");
		if (window.ver=="esp"){
			$("#info_tipo").text("Agentes fronterizos");
		}else{
			$("#info_tipo").text("Border Patrol Agents");
		}
		mostrarinfo($("#anio").text(),$("#tipo").val());
		colorearEdos("Agentes");
	});	
	$("#cruce1 div").simpletip({content: "<h1>San Diego, CA</h1><h2 id='total_cruce1'></h2>", fixed: true, position:["-30px","15px"]});	
	$("#cruce2 div").simpletip({content: "<h1>El Centro, CA</h1><h2 id='total_cruce2'></h2>", fixed: true, position:["-40px","15px"]});	
	$("#cruce3 div").simpletip({content: "<h1>Yuma, AZ</h1><h2 id='total_cruce3'></h2>", fixed: true, position:["-40px","15px"]});	
	$("#cruce4 div").simpletip({content: "<h1>Tucson, AZ</h1><h2 id='total_cruce4'></h2>", fixed: true, position:["-40px","15px"]});	
	$("#cruce5 div").simpletip({content: "<h1>El Paso, TX</h1><h2 id='total_cruce5'></h2>", fixed: true, position:["-40px","15px"]});	
	$("#cruce6 div").simpletip({content: "<h1>Big Bend, TX</h1><h2 id='total_cruce6'></h2>", fixed: true, position:["-40px","15px"]});	
	$("#cruce7 div").simpletip({content: "<h1>Del Río, TX</h1><h2 id='total_cruce7'></h2>", fixed: true, position:["-40px","15px"]});	
	$("#cruce8 div").simpletip({content: "<h1>Laredo, TX</h1><h2 id='total_cruce8'></h2>", fixed: true, position:["-40px","15px"]});	
	$("#cruce9 div").simpletip({content: "<h1>Rio Grande Valley, TX</h1><h2 id='total_cruce9'></h2>", fixed: true, position:["-40px","0px"]});			
	
	
	/*Crear linea de tiempo */
	$( "#slide" ).slider({
			min: 1960,
			max: 2013,
			slide: function( event, ui ) {				
				var porPais = new Array();				
				$( "#anio" ).text( ui.value );
				mostrarinfo(ui.value,$("#tipo").val());				  
			}				
	});
	$('#slide > a').removeClass('ui-state-default ui-corner-all');		
	
	for (i=1960; i<=2013; i++){
		$year = $(document.createElement("li"));        
		if (ancho>400){
			$year.css("margin-left",(((i-1960)*13.43))+"px");		
		}else{
			$year.css("margin-left",(((i-1960)*5.29))+"px");		
		}
		$year.attr("id", "year_"+i);		
		if (jQuery.inArray(i, [1960,1970,1980,1990,2000,2010]) != -1){
			$year.html("<span>"+i+"</span>");
		}
		
		$("#timeline").append($year);

	}
	
	mostrarinfo(1960,$("#tipo").val());
	colorearEdos("Aprehensiones");

	$(".marcador").on("mouseover", function(e){
		$(this).parent().next(".tooltip_marcador").css({"visibility":"visible","margin-left":(e.pageX-130)+"px","margin-top":"-20px"});
	});

	$(".marcador").on("click", function(e){
		$(this).parent().next(".tooltip_marcador").css({"visibility":"visible","margin-left":(e.pageX-130)+"px","margin-top":"-20px"});
	});

	$(".cerrar").on("click", function(){
		$(".tooltip_marcador").css({"visibility":"hidden"});
	});
	
});


function colorearEdos(fip){
	$("#timeline li").removeClass("waca");
	for (i=1960;i<=2013;i++){		
			if	(jQuery.inArray(fip, registros[i]) != -1){					
				$id="year_"+i;
				$("#"+$id).addClass("waca");			
		}
		
	}
		
}


function mostrarinfo(year,tipo){		
	var registros = AbrirFichero("data.xml");					
	var data = registros.getElementsByTagName('Row');			
	var i=0;
	var ban = true;	
	var cruce1 = 0;
	var cruce2 = 0;
	var cruce3 = 0;
	var cruce4 = 0;
	var cruce5 = 0;
	var cruce6 = 0;
	var cruce7 = 0;
	var cruce8 = 0;
	var cruce9 = 0;		
	while (i < data.length){	     				
		if ((data[i].getElementsByTagName("tipo")[0].firstChild.nodeValue == tipo) && (data[i].getElementsByTagName("year")[0].firstChild.nodeValue == year)){						
			var cruce = +data[i].getElementsByTagName("cruce")[0].firstChild.nodeValue;			          
			var val = +data[i].getElementsByTagName("val")[0].firstChild.nodeValue;
			if (val=="NaN"){
				val = 0;
			}			
			switch (cruce){
				case 1:
					cruce1 = cruce1 + val;
					break;
				case 2:
					cruce2 = cruce2 + val;
					break;
				case 3:
					cruce3 = cruce3 + val;
					break;
				case 4:
					cruce4 = cruce4 + val;
					break;
				case 5:
					cruce5 = cruce5 + val;
					break;
				case 6:
					cruce6 = cruce6 + val;
					break;
				case 7:
					cruce7 = cruce7 + val;
					break;
				case 8:
					cruce8 = cruce8 + val;
					break;
				default:
					cruce9 = cruce9 + val;
			}				
			
		}
		i=i+1;
	}	
	if (cruce1 != 0){
		$("#total_cruce1").text(agregarComas(cruce1));		
	}else{
		$("#total_cruce1").text("NA");		
	}	
	if (cruce2 != 0){
		$("#total_cruce2").text(agregarComas(cruce2));		
	}else{
		$("#total_cruce2").text("NA");		
	}
	if (cruce3 != 0){
		$("#total_cruce3").text(agregarComas(cruce3));		
	}else{
		$("#total_cruce3").text("NA");		
	}
	if (cruce4 != 0){
		$("#total_cruce4").text(agregarComas(cruce4));		
	}else{
		$("#total_cruce4").text("NA");		
	}
	if (cruce5 != 0){
		$("#total_cruce5").text(agregarComas(cruce5));		
	}else{
		$("#total_cruce5").text("NA");		
	}
	if (cruce6 != 0){
		$("#total_cruce6").text(agregarComas(cruce6));		
	}else{		
		if (($("#tipo").val()=="Muertes") && (+$("#anio").text()>1997)){
			$("#total_cruce6").text(0);		
		}else if (($("#tipo").val()=="Agentes") && (+$("#anio").text()>1993)){
			$("#total_cruce6").text(0);		
		}else{
			$("#total_cruce6").text("NA");		
		}
	}
	if (cruce7 != 0){
		$("#total_cruce7").text(agregarComas(cruce7));		
	}else{
		$("#total_cruce7").text("NA");		
	}
	
	if (cruce8 != 0){
		$("#total_cruce8").text(agregarComas(cruce8));		
	}else{
		$("#total_cruce8").text("NA");		
	}
	
	if (cruce9 != 0){
		$("#total_cruce9").text(agregarComas(cruce9));		
	}else{
		$("#total_cruce9").text("NA");		
	}
	
	
	/*$("#total_cruce2").text(agregarComas(cruce2));		
	$("#total_cruce3").text(agregarComas(cruce3));		
	$("#total_cruce4").text(agregarComas(cruce4));
	$("#total_cruce5").text(agregarComas(cruce5));		
	$("#total_cruce6").text(agregarComas(cruce6));		
	$("#total_cruce7").text(agregarComas(cruce7));		
	$("#total_cruce8").text(agregarComas(cruce8));		
	$("#total_cruce9").text(agregarComas(cruce9));		*/
	
	$("#anio").text(year);	
	var total = cruce1 + cruce2 + cruce3 + cruce4 + cruce5 + cruce6 + cruce7 + cruce8 + cruce9;
	var mayor=cruce1;	
	if (cruce2>mayor)
		mayor=cruce2;
	if (cruce3>mayor)
		mayor=cruce4;
	if (cruce4>mayor)
		mayor=cruce4;
	if (cruce5>mayor)
		mayor=cruce5;
	if (cruce6>mayor)
		mayor=cruce6;
	if (cruce7>mayor)
		mayor=cruce7;
	if (cruce8>mayor)
		mayor=cruce8;
	if (cruce9>mayor)
		mayor=cruce9;
		
	if (cruce1>0){
		var porc1 = +(cruce1*100)/(mayor);	
		if (porc1<15){		
				porc1=15;		
		}
	}else{
		porc1=0;		
	}
	if (cruce2>0){
		var porc2 = +(cruce2*100)/(mayor);	
		if (porc2<15){		
				porc2=15;		
		}
	}else{
		porc2=0;		
	}
	if (cruce3>0){
		var porc3 = +(cruce3*100)/(mayor);	
		if (porc3<15){		
				porc3=15;		
		}
	}else{
		porc3=0;		
	}
	if (cruce4>0){
		var porc4 = +(cruce4*100)/(mayor);	
		if (porc4<15){		
				porc4=15;		
		}
	}else{
		porc4=0;		
	}
	if (cruce5>0){
		var porc5 = +(cruce5*100)/(mayor);	
		if (porc5<15){		
				porc5=15;		
		}
	}else{
		porc5=0;		
	}
	if (cruce6>0){
		var porc6 = +(cruce6*100)/(mayor);	
		if (porc6<15){		
				porc6=15;		
		}
	}else{
		porc6=0;		
	}
	if (cruce7>0){
		var porc7 = +(cruce7*100)/(mayor);	
		if (porc7<15){		
				porc7=15;		
		}
	}else{
		porc7=0;		
	}
	if (cruce8>0){
		var porc8 = +(cruce8*100)/(mayor);	
		if (porc8<15){		
				porc8=15;		
		}
	}else{
		porc8=0;		
	}
	if (cruce9>0){
		var porc9 = +(cruce9*100)/(mayor);	
		if (porc9<15){		
				porc9=15;		
		}
	}else{
		porc9=0;		
	}
	$("#cruce1").css("background-size",porc1+"%");		
	$("#cruce2").css("background-size",porc2+"%");		
	$("#cruce3").css("background-size",porc3+"%");		
	$("#cruce4").css("background-size",porc4+"%");		
	$("#cruce5").css("background-size",porc5+"%");		
	$("#cruce6").css("background-size",porc6+"%");		
	$("#cruce7").css("background-size",porc7+"%");		
	$("#cruce8").css("background-size",porc8+"%");		
	$("#cruce9").css("background-size",porc9+"%");		
	
	if (total!=0){
		$("#datos").text(agregarComas(total));	
	}else{
		$("#datos").text("NA");	
	}
	
	
}




function AbrirFichero(fichXML)
{
        var xmlDoc=undefined;
        try
        {
            if (document.all) //IE
            {
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            }
            else //firefox
            {
                xmlDoc = document.implementation.createDocument("","",null);
            }
            xmlDoc.async=false;
            xmlDoc.load(fichXML);
             
             
        }
        catch(e)
        {
            try { //otros safari, chrome
                    var xmlhttp = new window.XMLHttpRequest();
                    xmlhttp.open("GET",fichXML,false);
                    xmlhttp.send(null);
                    xmlDoc = xmlhttp.responseXML.documentElement;
                    return xmlDoc;
            } 
            catch (e) 
            {
                return undefined;
            }
         
        }
        return xmlDoc;
}	

	
/* funcion para agregar comas a un numero mayor a tres dígitos */
function agregarComas(numero){
	numero += '';
	x = numero.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}