
//-----------------------------------------------------------------------------------------------------------------------------
// Activations Performace to date
uniApp.controller('defaultCtrl', function($scope, $filter) {
  $scope.data;

  $scope.menu = [
      {"titulo":"Fuerza hispana","descripcion":"Hispanos mayores de 18 años que son ciudadanos como porcentaje del total de la población total de 18 años o más con ciudadanía", "sub":[],
        "texto":"<p>En promedio, cerca del 12% de la población de 18 años o más que puede votar por distrito electoral es latina. Sin embargo, como puedes ver en el mapa, ese porcentaje puede variar mucho dependiendo del estado y del distrito que estés viendo.</p> \
                 <p>El distrito con mayor porcentaje de votantes hispanos potenciales es el 40º de California (CA40), que incluye el este y parte del sur de Los Ángeles, con 78% (que podría crecer a 85% si tomáramos en cuenta a aquellos sin ciudadanía) y el que tiene menos porcentaje es el 5º de Kentucky (KY05) con 0.6%.</p> \
                 <p>Después de California-40, los distritos con más porcentaje de ciudadanos hispanos de 18 años o más son los 34º, 16º, 15º y 28º en Texas. Pero, si promediáramos el porcentaje de hispanos por estado, Nuevo México queda a la cabeza con 37% de hispanos mayores de 18 años que pueden votar, seguido de Texas con 24% y California y Arizona ambos con 22%.</p> \
                 <p>¿Qué pasaría en los distritos con mayor porcentaje de hispanos si ninguno de estos votara? En referencia al ejercicio realizado en la sección de “Una elección sin Hispanos” podemos ver que de los cinco distritos con mayor porcentaje de hispanos, en cuatro seguramente perderían los demócratas. Estos son (ordenados de mayor a menor porcentaje de hispanos que pueden votar): Texas 34, Texas 16, Texas 15 y Texas 28.</p> \
                "
      },
      {"titulo":"Poder hispano","descripcion":"Indica si el representante del distrito en el 2012 era o no de origen hispano","sub":[],
        "texto":"<p>En 2012 hubieron 29 distritos en los que ganó un representante de origen hispano. Si nos enfocamos en los estados, sólo nueve de los 50 estados del país tuvieron por lo menos un representante de origen hispano que entró a la Cámara en 2012.</p> \
                 <p>El estado con más representantes hispanos es California con 10 de 53 distritos, o 19% de hispanos en el poder. Sin embargo, si lo vemos como porcentaje, Nuevo México está a la cabeza con 67% (o dos de tres distritos con representantes hispanos), seguido de Idaho con 50% y Arizona con 22%. </p> \
                 <p>De los 29 distritos con un representante hispano en el 113º Congreso, 24 fueron demócratas y cinco republicanos. </p> \
                 <p>De acuerdo a las predicciones del <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014?hpid=z1' target='_blank'> Washington Post</a>, la distribución partidista de estos 29 distritos se va a mantener igual. Sin embargo, si se quitara a todos los hispanos de la votación de noviembre de 2014, dos de los 24 distritos demócratas con representante hispano probablemente se convertirían en republicanos.</p> \
                "               
      },
      {"titulo":"Distritos competidos","descripcion":"Indica si el distrito es competido o no. Es decir, en donde el partido favorecido tienen una probabilidad entre 50 y 74% de ganar la elección. <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014?hpid=z1' target='_blank'>(Fuente: Election Lab del Washington Post)</a>", "sub":[],
        "texto":"<p>De los 435 distritos, hay 19 que se consideran “competidos” entre los partidos principales para la elección de 2014. Es decir, que de acuerdo a las predicciones hechas por el <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014?hpid=z1' target='_blank'>Washington Post</a> la probabilidad de ganar el distrito para el partido favorecido está entre 50 y 74%. De éstos, se predice que los demócratas se llevarán 11 y los republicanos ocho.</p> \
                 <p>¿Cómo se ve la población latina en los distritos competidos de esta elección? </p> \
                 <p>En promedio, en los distritos competidos cerca de 8% de la población de 18 años o más con ciudadanía es de origen hispano y si se incluye a aquellos que no son ciudadanos, el porcentaje es poco más de 10%. </p> \
                 <p>El distrito 2 de Arizona, el cual incluye aproximadamente 2/3 de Tucson , se encuentra en el primer lugar de los competidos con más población hispana ciudadana y no ciudadana mayor de 18 años (con 20 y 23% respectivamente). Y el distrito que tiene más porcentaje de población hispana mayor de 18 años, incluyendo a aquellos que no son ciudadanos, es el 3º de California con 25%.</p> \
                 <p>Al preguntarnos qué pasaría en la elección si ningún hispano votara en noviembre, podemos ver que sin hispanos los demócratas tendrían una alta probabilidad de perder dos de los distritos competidos. Es decir, los demócratas tendrían una probabilidad abajo de 50% de ganar Arizona-2 y California 3 (el cual incluye partes de Sacramento). En otras palabras, si se quitara a la población hispana de esta elección, los demócratas dejarían de ganar el 10% de los distritos competidos, que de otra forma tendrían una alta probabilidad de ganar.  \
                "
      },
      {"titulo":"¿Qué pasó en 2012?", "descripcion":"Resultados por partido de la elección de la Cámara de Representantes en 2012", "sub":[{"titulo":"Resultados de la elección","descripcion":"Resultados por partido de la elección de la Cámara de Representantes en 2012"},{"titulo":"Si todos los hispanos votaran","descripcion":"Como se verían los resultados por partido de la elección de la Cámara de Representantes en 2012 si todos los hispanos hubieran votado"},{"titulo":"Si ningún hispano votara","descripcion":"Como se verían los resultados por partido de la elección de la Cámara de Representantes en 2012 si ningún hispano hubiera votado"}],
        "texto":"<div class='dos_columnas'> \
                 <div class='ge3'></div> \
                 <div class='texto2'><p>Al ver las elecciones pasadas y replicar el mismo ejercicio hecho para 2014 se puede ver con mayor claridad el impacto electoral de los hispanos. Por ejemplo, al comparar votos obtenidos en 2012 con votos esperados en cada uno de los escenarios anteriores observamos un cambio fuerte y significativo en la caída del voto demócrata en el caso de que ningún hispano votara.</p> \
                 <p>En el caso de la elección de 2012 hubieron diez distritos en que los demócratas ganaron y, de quitar a  los votantes hispanos, hubieran perdido.  Estos son el 2º de Arizona, el 26º, el 36º y el 52º de California, el cual incluye el condado de San Diego, el 18º y el 26º de Florida, los cuales incluyen Palm Beach y partes de Miami-Dade respectivamente, el 10º de Illinois, que está casi enteramente formado por suburbios de Chicago, el 7º de North Carolina, el 23º de Texas, el cual incluye partes de El Paso y partes de San Antonio, y el 4º Utah. </p> \
                 <p>En el caso de que todos los hispanos hubieran votado, sin importar su estatus migratorio, no habríamos observado reversión de resultados en la elección de 2012. </p></div></div> \
                 <div class='contenedor_estaticas'><div class='ge1'></div><div class='ge2'></div></div> \
                 <p>En cuanto a la certidumbre de los resultados obtenidos para 2012, en el caso en el que todos los hispanos hubieran votado los rangos de los porcentajes posibles que el partido demócrata podría obtener son mayores que en el caso de quitar a los hispanos de la elección, por lo que los datos en el segundo escenario son más confiables. </p> \
                 <p>Al ver las elecciones de 2006, 2008 y 2010 si no hubiera habido hispanos los demócratas hubieran perdido dos distritos en 2006, uno en 2008 y diez en 2010 que ganaron en realidad. Y en el caso alterno (que todos los hispanos mayores de 18 años, incluyendo a aquellos sin ciudadanía, hubieran votado) los demócratas hubieran ganado tres en 2006, uno en 2008 y cinco en 2010 que en la realidad no ganaron. </p> \
                "
      },
      {"titulo":"¿Qué puede pasar en 2014?", "descripcion":"Predicción de resultados por partido de la elección de la Cámara de Representantes en 2014 realizada por el periódico <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014?hpid=z1#cal…' target='_blank'>Washington Post</a>", "sub":[{"titulo":"Predicciones","descripcion":"Predicción de resultados por partido de la elección de la Cámara de Representantes en 2014 realizada por el periódico <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014?hpid=z1#cal…' target='_blank'>Washington Post</a>"},{"titulo":"Todos los hispanos","descripcion":"Predicción de como se verían los resultados por partido de la elección de la Cámara de Representantes en 2014 si todos los hispanos mayores de 18 años votaran, sin importar su estatus migratorio"},{"titulo":"Sin hispanos","descripcion":"Predicción de como se verían los resultados por partido de la elección de la Cámara de Representantes en 2014 si ningún hispano votara"}],
        "texto": "<p>En el debate sobre la importancia del voto hispano que acompaña la discusión acerca de las futuras elecciones de la Cámara de Representantes de Estados Unidos, la opinión de medios y analistas parece inclinarse hacia el lado que considera que el voto de los hispanos no tiene mucho impacto en las elecciones. Un argumento, presentado por el New York Times (hipervínculo a: http://www.nytimes.com/2014/06/16/upshot/why-hispanics-dont-have-a-larger-political-voice.html) en junio de este año es que la marginación de este grupo demográfico es la causa de su bajo impacto. Es decir, el hecho de que la mayoría no son elegibles para votar (ya sea por que no cumplen con la edad o estatus migratorio necesarios) y aquellos que si pueden votar están concentrados en distritos que no son competidos o claves. </p> \
                  <p>Sin embargo, el argumento de que los hispanos no inclinan la balanza electoral está planteado de forma errónea. Lo que hay que preguntar para ver realmente el efecto de voto hispano no es solamente ¿qué efecto tienen hoy? Y ¿qué efecto tendrían si todos votaran? (que es lo que se preguntan analistas como en el NYT), si no también ¿qué pasaría si ningún hispano votara en las elecciones?</p> \
                  <p>De acuerdo a las predicciones hechas por el <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014' target='blank'>Washington Post</a>para la elección de noviembre de 2014 la distribución partidista del Congreso será de 240 asientos para los Republicanos y 195 para los demócratas. Hay que recordar que para tener mayoría en la Cámara de Representantes se necesitan 218 asientos, por lo que estas predicciones le dan la mayoría a los republicanos. </p> \
                  <p>Si se hace el ejercicio de incluir a todos los hispanos mayores de 18 años sin importar si tienen o no la ciudadanía estadounidense, vemos que la balanza electoral se inclina un poco hacia el lado demócrata. </p> \
                  <p>Hay ocho distritos que en la predicción general se atribuyen a los republicanos y que al incluir a los hispanos indocumentados se volverían demócratas con una probabilidad entre 50 y 74%. Esto quiere decir que si todos los hispanos votaran en la elección para el 114º Congreso, los demócratas tendrían 203 asientos y los republicanos 232, lo cual no les da la mayoría pero seguramente les da un poco más de espacio de negociación. </p> \
                  <p>El argumento en contra de los posibles beneficios del escenario anterior comúnmente es que no todos los hispanos votan, incluso entre aquellos que sí podrían votar no muchos van a las casillas en el día de la elección. </p> \
                  <p>Entonces, mejor veamos ¿qué pasaría si ningún hispano votara? A primera vista, al quitar a los hispanos el mapa se pinta de rojo, indicando desde el principio que este escenario implicaría un golpe fuerte al la fuerza del Partido Demócrata. </p> \
                  <p>44 distritos, que las predicciones iniciales daban a los demócratas, sin hispanos los ganarían los republicanos, 11 con más de 75% de probabilidad y el resto con una probabilidad de 50 a 75%. Esto implicaría que la distribución de los 435 asientos sería de 151 para los Demócratas y 284 para los Republicanos.</p> \
                  <p>En cuanto a distritos competidos entre los dos partidos (definidos como aquellos en los cuales el partido favorecido tiene entre 50 y 75% de probabilidad de ganar), en el caso de que todos los hispanos mayores de 18 años votaran sin importar su estatus migratorio, no habría reversión. Sin embargo, en el caso de no haber hispanos en la próxima elección los demócratas dejarían de ganar dos de ellos, que de otra forma tendrían una alta probabilidad de ganar. Es decir, perderían poco más del 10% de los distritos competidos sin los votantes hispanos.  </p> \
                  <p>Entonces podemos concluir que si bien el impacto de incluir a más hispanos no es ni muy fuerte ni muy seguro, los hispanos que ya votan claramente están teniendo un impacto bastante significativo en las victorias del Partido Demócrata. </p> \
                  "
      }
  ];
  $scope.seleccionada= {"titulo":"Fuerza hispana","descripcion":"Hispanos mayores de 18 años que son ciudadanos como porcentaje del total de la población total de 18 años o más con ciudadanía", "sub":[],
        "texto":"<p>En promedio, cerca del 12% de la población de 18 años o más que puede votar por distrito electoral es latina. Sin embargo, como puedes ver en el mapa, ese porcentaje puede variar mucho dependiendo del estado y del distrito que estés viendo.</p> \
                 <p>El distrito con mayor porcentaje de votantes hispanos potenciales es el 40º de California (CA40), que incluye el este y parte del sur de Los Ángeles, con 78% (que podría crecer a 85% si tomáramos en cuenta a aquellos sin ciudadanía) y el que tiene menos porcentaje es el 5º de Kentucky (KY05) con 0.6%.</p> \
                 <p>Después de California-40, los distritos con más porcentaje de ciudadanos hispanos de 18 años o más son los 34º, 16º, 15º y 28º en Texas. Pero, si promediáramos el porcentaje de hispanos por estado, Nuevo México queda a la cabeza con 37% de hispanos mayores de 18 años que pueden votar, seguido de Texas con 24% y California y Arizona ambos con 22%.</p> \
                 <p>¿Qué pasaría en los distritos con mayor porcentaje de hispanos si ninguno de estos votara? En referencia al ejercicio realizado en la sección de “Una elección sin Hispanos” podemos ver que de los cinco distritos con mayor porcentaje de hispanos, en cuatro seguramente perderían los demócratas. Estos son (ordenados de mayor a menor porcentaje de hispanos que pueden votar): Texas 34, Texas 16, Texas 15 y Texas 28.</p> \
                "
      };
  $scope.opt_activa = "Total";
  $scope.svg;
  $scope.groups;  
  $scope.group;
  $scope.rects;
  $scope.estados = ["CA","OR","WA","MT","ND","SD","WY","ID","NV","UT","TX","NM","AZ","MO","NE","CO","KS",
                    "OK","LA","AR","IN","OH","MI","WI","IL","MN","IA","MS","FL","SC","GA","AL","TN","NC",
                    "VA","WV","KY","MD","DC","PA","NY","NJ","CT","RI","MA","VT","NH","ME","DE","AK","HI"];
  $scope.instrucciones = false;
  $scope.acerca = false;

  /*if (lang=="eng"){
    $scope.menu = [{"titulo":"Hispanic Force","descripcion":"Total hispanic population over 18 years of age and with citizenship status and therefore can vote"},{"titulo":"Hispanic Force (%)","descripcion":"Hispanic population over 18 years of age and with citizenship status as a percentage of the total population over 18 years of age with US citizenship"},{"titulo":"Hispanic Power","descripcion":"Indicates if the district representative was of hispanic origin in 2012"},{"titulo":"Coin-toss Districts","descripcion":"Indicates if the district is competed between the major parties. This means that both parties have a probability close to 50% of winning the election.(Source: http://cookpolitical.com/house/charts/scatterplot)"},{"titulo":"What happened in 2012?","descripcion":"House of Representatives election results 2012"},{"titulo":"House of Representatives election results 2012","descripcion":"Shows how the 2012 House of Representatives election results would've turned out if no hispanics would've voted"},{"titulo":"What would've happened in 2012 if all hispanics had voted?","descripcion":"Shows how the 2012 House of Representatives election results would've turned out if all hispanics would've voted"}];
    $scope.seleccionada= {"titulo":"Hispanic Force","descripcion":"Total hispanic population over 18 years of age and with citizenship status and therefore can vote"};
  }*/

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
           var rect = d3.select('#'+value.cd);           
           if(rect[0][0] != null)  { value.x = rect.attr('x'); value.y = rect.attr('y'); value.width = rect.attr('width'); value.height = rect.attr('height'); }
        });               
        $scope.data = json;

        $scope.runMap(json);
        d3.select("#texto").html($scope.seleccionada.texto);
      
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
          .attr("id", function(d){return d.cd})
          .on("mouseover", function(d){           
            /*if (ancho>400){
              d3.selectAll("rect").attr("stroke","none");
              d3.select(this).attr("stroke","yellow");
              if (lang=="esp"){
                d3.select("#titulo_tooltip").html("Distrito:"+d.distrito+", "+d.estado+"<span>"+d.clave+"</span>");
              }else{
                d3.select("#titulo_tooltip").html("District:"+d.distrito+", "+d.estado+"<span>"+d.clave+"</span>");
              }  
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
            }*/
          })
        .on("mouseout", function(d){
          /*if (ancho>400){
            d3.select(this).attr("stroke","none");
            d3.select("#tooltip").style({"display":"none"});
          }*/
        })
        .on("click", function(d){
          console.log(d);
          d3.selectAll("rect").attr("stroke","none");
          d3.select(this).attr("stroke","black");
          var html;

          if ($scope.seleccionada.titulo == "Fuerza hispana" || $scope.seleccionada.titulo == "Poder hispano" || $scope.seleccionada.titulo == "Distritos competidos"){
              html = '<div id="titulo_tooltip" class="titulo_tooltip"><div id="cerrar"></div>Distrito: '+d.district+', '+d.state+'<span>'+d.cd+'</span></div> \
                    Hispanos que pueden votar:<span class="marcado"> '+agregarComas(+d.hisp_totvoters)+'</span> <br/> \
                    Hispanos como % del total que pueden votar:<span class="marcado"> '+(+d.hisp_pervot).toFixed(2)+'%</span>';
          }else if ($scope.seleccionada.titulo == "¿Qué puede pasar en 2014?"){
              var general, todos, sin_hispanos;
              if (d.dem_14==""){
                  general = '<div id="general" class="recuadro" style="background-color:#e0e0e0"></div>';
              }else if (d.dem_14=="1"){
                  general = '<div id="general" class="recuadro" style="background-color:#287ECB"></div>';
              }else{
                  general = '<div id="general" class="recuadro" style="background-color:#E63E3B"></div>';                
              }
              if (d.partyTodos=="Sin datos"){
                  todos = '<div id="todos" class="recuadro" style="background-color:#e0e0e0"></div>';
              }else if (d.partyTodos!="R"){
                  todos = '<div id="todos" class="recuadro" style="background-color:#287ECB"></div>';
              }else{
                  todos = '<div id="todos" class="recuadro" style="background-color:#E63E3B"></div>';               
              }
              if (d.partyNo=="Sin datos"){
                  sin_hispanos= '<div id="sin_hispanos" class="recuadro" style="background-color:#e0e0e0"></div>';
              }else if (d.partyNo!="R"){
                  sin_hispanos= '<div id="sin_hispanos" class="recuadro" style="background-color:#287ECB"></div>';                                
              }else{
                  sin_hispanos= '<div id="sin_hispanos" class="recuadro" style="background-color:#E63E3B"></div>';                
              }                              
              html = '<div id="titulo_tooltip" class="titulo_tooltip"><div id="cerrar"></div>Distrito: '+d.district+', '+d.state+'<span>'+d.cd+'</span></div> \
                    <div>Predicción de ganador 2014:</div> \
                    <div id="chart_t"><br/>Predicciones WP<br/> \
                    '+general+' \
                    Todos los hispanos<br/> \
                    '+todos+' \
                    Sin hispanos<br/> \
                    '+sin_hispanos+'</div> \
                    <div id="datos_t"> \
                      <div> \
                        Hispanos que pueden votar: \
                        <div id="hispanos_votos">'+agregarComas(+d.hisp_totvoters)+'</div> \
                      </div> \
                      <div> \
                        Hispanos como % del total que pueden votar: \
                        <div id="hispanos_votos_porc">'+(+d.hisp_pervot).toFixed(2)+'%</div> \
                      </div> \
                    </div>';

          }else if ($scope.seleccionada.titulo == "¿Qué pasó en 2012?"){
              html = '<div id="titulo_tooltip" class="titulo_tooltip"><div id="cerrar"></div>Distrito: '+d.district+', '+d.state+'<span>'+d.cd+'</span></div> \
                    Representante: <span id="nombre">'+d.name+'</span> \
                    <div id="chart_t"> \
                      <h3>2012</h3> \
                      <div class="barras" id="b_2012"><div class="democratas" style="width:'+getAncho(d.votes_D)+'%"><span>'+getPorcentaje(d.votes_D)+'</span></div><div class="republicanos" style="width:'+getAncho(d.votes_R)+'%"><span>'+getPorcentaje(d.votes_R)+'</span></div></div> \
                      <h3>2012 Todos</h3> \
                      <div class="barras" id="b_2012_todos"><div class="democratas" style="width:'+getAncho(d.Dtodoshisp_mean)+'%"><span>'+getPorcentaje(d.Dtodoshisp_mean)+'</span></div><div class="republicanos" style="width:'+getAncho(d.Rtodoshisp_mean)+'%"><span>'+getPorcentaje(d.Rtodoshisp_mean)+'</span></div></div> \
                      <h3>2012 Ninguno</h3> \
                      <div class="barras" id="b_2012_ninguno"><div class="democratas" style="width:'+getAncho(d.Dnohisp_mean)+'%"><span>'+getPorcentaje(d.Dnohisp_mean)+'</span></div><div class="republicanos" style="width:'+getAncho(d.Rnohisp_mean)+'%"><span>'+getPorcentaje(d.Rnohisp_mean)+'</span></div></div> \
                    </div> \
                    <div id="datos_t"> \
                      <div> \
                        Hispanos que pueden votar: \
                        <div id="hispanos_votos">'+agregarComas(+d.hisp_totvoters)+'</div> \
                      </div> \
                      <div> \
                        Hispanos como % del total que pueden votar: \
                        <div id="hispanos_votos_porc">'+(+d.hisp_pervot).toFixed(2)+'%</div> \
                      </div> \
                      <div class="iconos"></div> \
                    </div>'; 
          }        
          var iconos = "";
          if (d.competido=="1"){
            iconos="<span class='ico1'></span>";
          }
          if (d.rephisp=="1"){
            iconos=iconos+"<span class='ico2'></span>";
          }
          html = html + '<div class="iconos">'+iconos+'</div>';
          var x = d3.event.pageX;
          if (x>450){           
            x = x - 280;
          }
          var y = d3.event.pageY-200;

          if (ancho<=400){                           
              x = 10;              
              y=y-120              
          }
          d3.select("#tooltip").html(html).style({"display":"block","margin-left":x+"px","margin-top":y+"px"});          
          d3.select("#cerrar").on("click", function(){
            d3.selectAll("rect").attr("stroke","none");
            d3.select("#tooltip").style({"display":"none"});
          });
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
            /*if (ancho>400){
              d3.selectAll("#estados g").style("visibility","visible");
              d3.select(this).style("visibility","hidden");
            }*/
          })
          .on("click", function(){
            d3.select("#tooltip").style({"display":"none"});
            d3.selectAll("#estados g").style("visibility","visible");              
            d3.select(this).style("visibility","hidden"); 
            if (ancho<=400){             
              d3.select(this).attr("stroke","none");
              d3.selectAll("rect").attr("stroke","none");
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
      $("#descripcion").html(opt.descripcion);
      if (opt.titulo=="¿Qué puede pasar en 2014?"){
        d3.select(".estatica").style({"display":"block"});
        d3.select(".nota_grafica").style({"display":"block"});
      }else{
        d3.select(".estatica").style({"display":"none"});
        d3.select(".nota_grafica").style({"display":"none"});
      }
      if (opt.titulo=="¿Qué pasó en 2012?"){
        d3.select(".estatica2").style({"display":"block"});
        d3.select(".nota_grafica2").style({"display":"block"});
      }else{
        d3.select(".estatica2").style({"display":"none"});
        d3.select(".nota_grafica2").style({"display":"none"});
      }
      d3.select("#texto").html(opt.texto);
    }

    $scope.update_desc = function(desc){
      $("#descripcion").html(desc); 
    }

    $scope.validar = function(opt){      
      return (opt == $scope.opt_activa | ($scope.opt_activa == $scope.seleccionada.titulo & (opt =='Total' || opt == 'Predicciones' || opt == 'Resultados de la elección')));
    }

    $scope.update_con_select = function(){ 
      $("#zoomout").trigger("click");                    
      $scope.colorear($.inArray($scope.seleccionada, $scope.menu));
    }

    $scope.seleccionado = function(opt){      
      return (opt==$scope.seleccionada || (opt.titulo=="Fuerza hispana" && $scope.seleccionada.titulo == "Fuerza hispana"));
    }

    $scope.colorear = function(parametro){
      d3.select("#tooltip").style({"display":"none"});
      $("#search").val("");
      d3.selectAll("#estados g").style("visibility","visible");              
      d3.selectAll("rect").attr("stroke","none");
      $scope.opt_activa = parametro;
      var color = d3.scale.ordinal();    
      /*if ((parametro == "Fuerza hispana") || (parametro == "Total")){        
        $scope.rects.attr("fill", function(d){        
          color.domain([1,2,3,4,5]);       
          color.range(["#e0e0e0","#a2d8e8","#819bc8","#277CCC","#053061"]);
          d3.select(".rango2").html("<div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>0-12,000</span></div><div><span style='background-color:#a2d8e8' class='recuadro'></span><span class='texto'>12,001-21,800</span></div><div><span style='background-color:#819bc8' class='recuadro'></span><span class='texto'>21,801-42,500</span></div><div><span style='background-color:#277CCC' class='recuadro'></span><span class='texto'>42,501-80,000</span></div><div><span style='background-color:#053061' class='recuadro'></span><span class='texto'>80,001 ó más</span></div>");          
        return color(+d.hisp_totvot_quint);
        })
      }else */
      if (parametro == "Fuerza hispana"){
        $scope.rects.attr("fill", function(d){        
          color.domain([1,2,3,4,5]);       
          color.range(["#e0e0e0","#a2d8e8","#819bc8","#277CCC","#053061"]);
          d3.select(".rango2").html("<div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>0 a 2.16%</span></div><div><span style='background-color:#a2d8e8' class='recuadro'></span><span class='texto'>2.17% a 4.2%</span></div><div><span style='background-color:#819bc8' class='recuadro'></span><span class='texto'>4.3% a 8.6%</span></div><div><span style='background-color:#277CCC' class='recuadro'></span><span class='texto'>8.7% a 16.7%</span></div><div><span style='background-color:#053061' class='recuadro'></span><span class='texto'>16.8% en adelante</span></div>");          
        return color(+d.totvot_quint);

        })
      }else if (parametro == "Poder hispano"){
        $scope.rects.attr("fill", function(d){        
          /*color.domain([0,1,2,3,4,5]);       
          color.range(["#e0e0e0","#287ECB","#e0e0e0","#e0e0e0","#e0e0e0","#e0e0e0"]);*/
          d3.select(".rango2").html("<div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Representante hispano demócrata</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Representante hispano republicano</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>Representante no hispano</span></div>");         
          if (+d.rephisp==1){
            if (d.partyRH=="D"){
                return "#287ECB";
            }else{
                return "#e63e3b";
            }
          }else{
            return "#e0e0e0";
          }

        })
      }else if (parametro == "Distritos competidos"){
        $scope.rects.attr("fill", function(d){        
          color.domain([0,1,2,3,4,5]);       
          color.range(["#e0e0e0","#565656","#e0e0e0","#e0e0e0","#e0e0e0","#e0e0e0"]);
          d3.select(".rango2").html("<div><span style='background-color:#565656' class='recuadro'></span><span class='texto'>Distrito competido</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>Distrito no competido</span></div>");
          return color(d.competido);

        })
      }else if ((parametro == "¿Qué puede pasar en 2014?") || (parametro == "Predicciones")){
        $scope.rects.attr("fill", function(d){
          color.domain([0,1]);       
          color.range(["#e63e3b","#287ECB"]);
        d3.select(".rango2").html("<div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Demócrata</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republicano</span></div>");        
        return color(d.dem_14);
        })
      }else if (parametro == "Todos los hispanos"){
        $scope.rects.attr("fill", function(d){          
          d3.select(".rango2").html("<div><span style='background-color:#053061' class='recuadro'></span><span class='texto'>Demócratas no ganaban y ahora seguro ganan</span></div><div><span style='background-color:#819bc8' class='recuadro'></span><span class='texto'>Demócratas no ganaban y ahora tal vez ganan</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Demócratas ya ganaban</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republicanos ganaban y siguen ganando</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>No hay suficientes datos*</span></div>");          
          /*if (ancho>400){
            d3.selectAll(".rango2")
              .style({"width":"140px","margin-top":"-230px","margin-left":"630px"});
            d3.selectAll(".rango2 span")
              .style({"float":"left","margin-left":"0px"});
            d3.selectAll(".rango2 .texto")
              .style({"width":"110px", "text-align":"left", "margin-left":"10px"});
          }*/
          if (+d.yesWin==1){
            return "#053061";
          }else if (+d.maybeWin==1){
            return "#819bc8";
          }else if (+d.WinWinTodos==1){
            return "#287ECB";
          }else if (+d.residTodos==1){
            return "#e63e3b";
          }else{
            return "#e0e0e0";
          }
        })
      }else if (parametro == "Sin hispanos"){
        $scope.rects.attr("fill", function(d){                    
          d3.select(".rango2").html("<div><span style='background-color:#821f20' class='recuadro'></span><span class='texto'>Demócratas ganaban y ahora seguro pierden</span></div><div><span style='background-color:#f48794' class='recuadro'></span><span class='texto'>Demócratas ganaban y ahora tal vez pierden</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Demócratas ya perdían</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Demócratas ganaban y siguen ganando</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>No hay suficientes datos*</span></div>");          
          /*if (ancho>400){
            d3.selectAll(".rango2")
              .style({"width":"140px","margin-top":"-230px","margin-left":"630px"});
            d3.selectAll(".rango2 span")
              .style({"float":"left","margin-left":"0px"});
            d3.selectAll(".rango2 .texto")
              .style({"width":"110px", "text-align":"left", "margin-left":"10px"});
          }*/
          if (+d.yesLose==1){
            return "#821f20";
          }else if (+d.maybeLose==1){
            return "#f48794";
          }else if (+d.LoseLoseNo==1){
            return "#e63e3b";
          }else if (+d.residNo==1){
            return "#287ECB";
          }else{
            return "#e0e0e0";
          }
        })
      }else if ((parametro == "¿Qué pasó en 2012?") || (parametro == "Resultados de la elección")){
        $scope.rects.attr("fill", function(d){
          color.domain(["R","D"]);       
          color.range(["#e63e3b","#287ECB"]);
          d3.select(".rango2").html("<div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Demócrata</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republicano</span></div>");        
          return color(d.party2);
        })            
      }else if (parametro == "Si todos los hispanos votaran"){
        $scope.rects.attr("fill", function(d){          
          d3.select(".rango2").html("<div><span style='background-color:#053061' class='recuadro'></span><span class='texto'>Demócratas no ganaban y ahora ganan</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Demócratas no ganaban ya ganaban</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republicanos ganaban y siguen ganando</span></div>");          
          if (+d.cambio_Dmas == 1){
            return "#053061";
          }else if (+d.DwinMas == 1){
            return "#287ECB";
          }else if (+d.RwinMas == 1){
            return "#e63e3b";
          }else{
            return "gray";
          }
        })
      }else if (parametro == "Si ningún hispano votara"){
        $scope.rects.attr("fill", function(d){                    
          d3.select(".rango2").html("<div><span style='background-color:#821f20' class='recuadro'></span><span class='texto'>Demócratas ganaban y ahora pierden</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Demócratas ya perdían</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Demócratas ganaban y siguen ganando</span></div>");          
          /*if (ancho>400){
            d3.selectAll(".rango2")
              .style({"width":"140px","margin-top":"-230px","margin-left":"630px"});
            d3.selectAll(".rango2 span")
              .style({"float":"left","margin-left":"0px"});
            d3.selectAll(".rango2 .texto")
              .style({"width":"110px", "text-align":"left", "margin-left":"10px"});
          }*/
          if (+d.cambio_D0 == 1){
            return "#821f20";          
          }else if (+d.Dlose0==1){
            return "#e63e3b";
          }else if (+d.Dwin0==1){
            return "#287ECB";
          }else{
            return "#e0e0e0";
          }
        })
      }else{
        $scope.rects.attr("fill", "gray");
      }
      if (ancho>400){
            d3.selectAll(".rango2")
              .style({"width":"140px","margin-top":"-230px","margin-left":"630px"});
            d3.selectAll(".rango2 span")
              .style({"float":"left","margin-left":"0px"});
            d3.selectAll(".rango2 .texto")
              .style({"width":"110px", "text-align":"left", "margin-left":"10px"});
      }
      if ((parametro == "Todos los hispanos") || (parametro == "Sin hispanos")){
        d3.select("#referencia").style({"display":"block"});
      }else{
        d3.select("#referencia").style({"display":"none"});
      }
    }
    $scope.init();
    $scope.colorear("Fuerza hispana");
});



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

function getAncho(v){
  if (v!=""){
    return v;
  }else{
   return 0;
  }
}

function getPorcentaje(v){
  if (v!=""){
    if (+v>100){
      return "100.00%";
    }else if (+v < 0){
      return "";
    }else{
     return (+v).toFixed(2)+"%";
    }
  }else{
   return "";
  }
}