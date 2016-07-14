
//-----------------------------------------------------------------------------------------------------------------------------
// Activations Performace to date
uniApp.controller('defaultCtrl', function($scope, $filter) {
	$scope.data;

	$scope.menu = [{"titulo":"Fuerza hispana","descripcion":"Total de hispanos mayores de 18 años de edad que son ciudadanos y por lo tanto pueden votar"},{"titulo":"Fuerza hispana (%)","descripcion":"Hispanos mayores de 18 años que son ciudadanos como porcentaje del total de hispanos"},{"titulo":"Poder hispano","descripcion":"Indica si el representante del distrito en el 2012 era o no de origen hispano"},{"titulo":"Distritos competidos","descripcion":"Indica si el distrito es competido o no. Es decir, en donde ambos partidos tienen una probablilidad cercana al 50% de ganar la elección. (Fuente: http://cookpolitical.com/house/charts/scatterplot)"},{"titulo":"¿Qué pasó en 2012?","descripcion":"Resultados por partido de la elección de la Cámara de Representantes en 2012"},{"titulo":"¿Qué hubiera pasado en 2012 sin hispanos?","descripcion":"Como se verían los resultados por partido de la elección de la Cámara de Representantes en 2012 si nungún hispano hubiera votado"},{"titulo":"¿Qué hubiera pasado en 2012 si todos los hispanos hubieran votado?","descripcion":"Como se verían los resultados por partido de la elección de la Cámara de Representantes en 2012 si todos los hispanos hubieran votado"}];
	$scope.seleccionada= {"titulo":"Fuerza hispana","descripcion":"Total de hispanos mayores de 18 años de edad que son ciudadanos y por lo tanto pueden votar"};
	$scope.svg;
	$scope.groups;  
  $scope.group;
	$scope.rects;
  $scope.estados = ["CA","OR","WA","MT","ND","SD","WY","ID","NV","UT","TX","NM","AZ","MO","NE","CO","KS",
                    "OK","LA","AR","IN","OH","MI","WI","IL","MN","IA","MS","FL","SC","GA","AL","TN","NC",
                    "VA","WV","KY","MD","DC","PA","NY","NJ","CT","RI","MA","VT","NH","ME","DE","AK","HI"];

  $scope.getOptClass = function(){
    if ($scope.seleccionada.titulo == "Distritos competidos"){
      return "doble";
    }else{
      return "uno";
    }
  }

	$scope.init = function(){
      
      /*$scope.tooltip = d3.select("body").append("div")
        .style("position", "absolute")
        .style("z-index", "100")
        .style("display", "none");*/  
      
        $.each( json , function (index,value){           
           var rect = d3.select('#'+value.clave);           
           if(rect[0][0] != null)  { value.x = rect.attr('x'); value.y = rect.attr('y'); value.width = rect.attr('width'); value.height = rect.attr('height'); }
        });     	        
        $scope.data = json;

        $scope.runMap(json);

      
  	}; 

  	$scope.runMap = function(json){
      var width=775;
      var height=600;
      if (ancho<=400){
        width=300;
        height:300;
      }
  		$scope.svg = d3.select("#representantes")
  			.attr({"width":width, "height":height});

  		$scope.group = $scope.svg.append("g")
            .attr("class","representantes");     

  		$scope.rects = $scope.group.selectAll("rect")
  			.data(json)
  			.enter()
  				.append("rect")
  				.attr("width", function(d){return d.width;})
  				.attr("height", function(d){return d.width;})
  				.attr("x", function(d){return d.x})
  				.attr("y", function(d){return d.y})
  				.attr("fill", "gray")
  				.on("mouseover", function(d){ 					
            if (ancho>400){
              d3.select(this).attr("stroke","red");
    					d3.select("#titulo_tooltip").html("Distrito:"+d.distrito+", "+d.estado+"<span>"+d.clave+"</span>");
    					d3.select("#tooltip #nombre").html(d.nombre);
    					d3.select("#hispanos_votos").html(d.hisp_pueden_votar);
    					d3.select("#hispanos_votos_porc").html(d.por_hisp_pueden_votar);

    					d3.select("#b_2012 .democratas").style({"width":(+d.d*100)+"px"}).html(d.d);
    					d3.select("#b_2012 .republicanos").style({"width":(+d.r*100)+"px"}).html(d.r);

    					d3.select("#b_2012_todos .democratas").style({"width":d.todos_d+"px"}).html(d.todos_d);
    					d3.select("#b_2012_todos .republicanos").style({"width":d.todos_r+"px"}).html(d.todos_r);

    					d3.select("#b_2012_ninguno .democratas").style({"width":d.ningudo_d+"px"}).html(d.ningudo_d);
    					d3.select("#b_2012_ninguno .republicanos").style({"width":d.ningudo_r+"px"}).html(d.ningudo_r);
    					var x = d3.event.pageX;
              if (x>450){           
                x = x - 280;
              }
              var y = d3.event.pageY;  					
    					d3.select("#tooltip").style({"display":"block","margin-left":x+"px","margin-top":(y-200)+"px"});					
              var html = "";            
              if (d.hispanic=="1" || d.hispanic=="3"){
                html="<span class='ico2'></span>";
              }
              if (d.hispanic=="2" || d.hispanic=="3"){
                html=html+"<span class='ico1'></span>";
              }
              d3.select(".iconos").html(html);
            }
  				})
				.on("mouseout", function(d){
          if (ancho>400){
            d3.select(this).attr("stroke","none");
					  d3.select("#tooltip").style({"display":"none"});
          }
				})
        .on("click", function(d){
          if (ancho<=400){
              d3.selectAll("rect").attr("stroke","none");
              d3.select(this).attr("stroke","red");
              d3.select("#titulo_tooltip").html("<div id='cerrar'>X</div>Distrito:"+d.distrito+", "+d.estado+"<span>"+d.clave+"</span>");
              d3.select("#tooltip #nombre").html(d.nombre);
              d3.select("#hispanos_votos").html(d.hisp_pueden_votar);
              d3.select("#hispanos_votos_porc").html(d.por_hisp_pueden_votar);

              d3.select("#b_2012 .democratas").style({"width":(+d.d*100)+"px"}).html(d.d);
              d3.select("#b_2012 .republicanos").style({"width":(+d.r*100)+"px"}).html(d.r);

              d3.select("#b_2012_todos .democratas").style({"width":d.todos_d+"px"}).html(d.todos_d);
              d3.select("#b_2012_todos .republicanos").style({"width":d.todos_r+"px"}).html(d.todos_r);

              d3.select("#b_2012_ninguno .democratas").style({"width":d.ningudo_d+"px"}).html(d.ningudo_d);
              d3.select("#b_2012_ninguno .republicanos").style({"width":d.ningudo_r+"px"}).html(d.ningudo_r);
              var x = 14;
              var y = d3.event.pageY;           
              d3.select("#tooltip").style({"display":"block","margin-left":x+"px","margin-top":(y-260)+"px"});          
              var html = "";            
              if (d.hispanic=="1" || d.hispanic=="3"){
                html="<span class='ico2'></span>";
              }
              if (d.hispanic=="2" || d.hispanic=="3"){
                html=html+"<span class='ico1'></span>";
              }
              d3.select(".iconos").html(html);
              d3.select("#cerrar").on("click", function(){
                  d3.selectAll("rect").attr("stroke","none");
                  d3.select("#tooltip").style({"display":"none"});
              });
            }
        });
      $scope.distritos = d3.select("#estados");       

      if (ancho<=400){
          $scope.group.attr("transform","translate(89,60)scale(.38)");
          $scope.distritos.attr("transform", "translate(2,2)scale(.38)");
        }else{
          $scope.group.attr("transform","translate(230,180)");
          $scope.distritos.attr("transform", "translate(2,27)");
        }

      $scope.grupos_distritos = $scope.distritos.selectAll("g")
          .on("mouseover", function(d){
            if (ancho>400){
              d3.selectAll("#estados g").style("visibility","visible");
              d3.select(this).style("visibility","hidden");
            }
          })
          .on("click", function(){
            if (ancho<=400){             
              d3.select(this).attr("stroke","none");
              d3.selectAll("rect").attr("stroke","none");
              d3.select("#tooltip").style({"display":"none"});   
              d3.selectAll("#estados g").style("visibility","visible");              
              d3.select(this).style("visibility","hidden"); 

              var d = d3.select(this); 
              var path = d.select("path");
              var pathEl = path.node();
              var pathLength = pathEl.getTotalLength();
              var node = pathEl.getPointAtLength(pathLength);              
              var x, y, k;                        
              x = (node.x)*.38-50;
              y = (node.y)*.38-22;
              k = 3;            

              d3.select("#principal").transition()
                  .duration(750)
                  .attr("transform", "scale(" + k + ")translate(" + -x + "," + -y + ")");

              d3.select("#zoomout")
                .style({"visibility":"visible","text-aling":"center"})
                .on("click",function(){
                    d3.select(this).style("visibility","hidden");               
                    d3.select("#principal").transition()
                      .duration(750)
                      .attr("transform", "scale(" + 1 + ")translate(" + 0 + "," + 0 + ")");
                    d3.selectAll("#estados g").style("visibility","visible");              
                    d3.selectAll("rect").attr("stroke","none");
                    d3.select("#tooltip").style({"display":"none"});   
                });
            }
          });
    }

  	$scope.update = function(opt){     
  		$scope.seleccionada = opt;
  	}

    $scope.update_con_select = function(){ 
      $("#zoomout").trigger("click");                    
      $scope.colorear($.inArray($scope.seleccionada, $scope.menu));
    }

  	$scope.seleccionado = function(opt){  		
  		return (opt==$scope.seleccionada || (opt.titulo=="Fuerza hispana" && $scope.seleccionada.titulo == "Fuerza hispana"));
  	}

  	$scope.colorear = function(parametro){
  		var color = d3.scale.ordinal();
  			

  		if (parametro == 0){
  			$scope.rects.attr("fill", function(d){				
          color.domain([1,2,3,4,5]);       
  				color.range(["#E6E6E6","#809BC8","#2A6E91","#277CCC","#053162"]);
          d3.select(".rango2").html("<div>0-12,000 <span style='background-color:#E6E6E6'></span></div><div>12,001-21,800 <span style='background-color:#809BC8'></span></div><div>21,801-42,500 <span style='background-color:#2A6E91'></span></div><div>42,501-80,000 <span style='background-color:#277CCC'></span></div><div>80,001 ó más <span style='background-color:#053162'></span></div>");
				return color(d.q_hisp_pueden_votar);
  			})
 		}else if (parametro == 1){
  			$scope.rects.attr("fill", function(d){				
          color.domain([1,2,3,4,5]);       
  				color.range(["#E6E6E6","#809BC8","#2A6E91","#277CCC","#053162"]);
        d3.select(".rango2").html("<div>0 a 2.16% <span style='background-color:#E6E6E6'></span></div><div>2.17% a 4.2% <span style='background-color:#809BC8'></span></div><div>4.3% a 8.6% <span style='background-color:#2A6E91'></span></div><div>8.7% a 16.7% <span style='background-color:#277CCC'></span></div><div>16.8% en adelante <span style='background-color:#053162'></span></div>");
				return color(d.q_por_hisp_pueden_votar);

  			})
  		}else if (parametro == 2){
  			$scope.rects.attr("fill", function(d){				
          color.domain([0,1,2,3,4,5]);       
  				color.range(["#E6E6E6","#287ECB","#E6E6E6","#287ECB","#E6E6E6","#E6E6E6"]);
          d3.select(".rango2").html("<div>Representante hispano <span style='background-color:#287ECB'></span></div><div>Representante no hispano <span style='background-color:#E6E6E6'></span></div>");
  				return color(d.hispanic);

  			})
  		}else if (parametro == 3){
  			$scope.rects.attr("fill", function(d){				
          color.domain([0,1,2,3,4,5]);       
  				color.range(["#E6E6E6","#E6E6E6","#287ECB","#287ECB","#E6E6E6","#E6E6E6"]);
          d3.select(".rango2").html("<div>Distrito competido <span style='background-color:#287ECB'></span></div><div>Distrito no competido <span style='background-color:#E6E6E6'></span></div>");
  				return color(d.hispanic);

  			})
  		}else if (parametro == 4){
  			$scope.rects.attr("fill", function(d){
          color.domain([1,2,3,4,5]);       
  				color.range(["#287ECB","#822021","#E6E6E6","#000000","#000000"]);
        d3.select(".rango2").html("<div>Demócrata <span style='background-color:#287ECB'></span></div><div>Republicano <span style='background-color:#822021'></span></div><div>Otro partido <span style='background-color:#E6E6E6'></span></div>");
				var democratas = +d.d;
				var republicanos = +d.r;
				var otros = +d.o;
				var mayor = democratas;
				var val = 1;
				if (mayor < republicanos){
					mayor = republicanos;
				}
				if (mayor < otros){
					mayor = otros;
				}			
				if (mayor == republicanos)
					val = 2;
				if (mayor == otros)
					val = 3;
				
				return color(val);

  			})
  		}else if (parametro == 5){
  			$scope.rects.attr("fill", function(d){
  				color.range(["#287ECB","#822021","#E6E6E6","#000000","#000000"])
        d3.select(".rango2").html("<div>Demócrata <span style='background-color:#287ECB'></span></div><div>Republicano <span style='background-color:#822021'></span></div><div>Otro partido <span style='background-color:#E6E6E6'></span></div>");
				var democratas = +d.ninguno_d;
				var republicanos = +d.ninguno_r;
				var otros = +d.nunguno_o;
				var mayor = democratas;
				var val = 1;
				if (mayor < republicanos){
					mayor = republicanos;
				}
				if (mayor < otros){
					mayor = otros;
				}			
				if (mayor == republicanos)
					val = 2;
				if (mayor == otros)
					val = 3;
				
				return color(val);

  			})
  		}else if (parametro == 6){
  			$scope.rects.attr("fill", function(d){
  				color.range(["#287ECB","#822021","#E6E6E6","#000000","#000000"])
        d3.select(".rango2").html("<div>Demócrata <span style='background-color:#287ECB'></span></div><div>Republicano <span style='background-color:#822021'></span></div><div>Otro partido <span style='background-color:#E6E6E6'></span></div>");
				var democratas = +d.todos_d;
				var republicanos = +d.todos_r;
				var otros = +d.todos_o;
				var mayor = democratas;
				var val = 1;
				if (mayor < republicanos){
					mayor = republicanos;
				}
				if (mayor < otros){
					mayor = otros;
				}			
				if (mayor == republicanos)
					val = 2;
				if (mayor == otros)
					val = 3;
				
				return color(val);

  			})
  		}else{
  			$scope.rects.attr("fill", "gray");
  		}
  	}
  	$scope.init();
  	$scope.colorear(0);
});



