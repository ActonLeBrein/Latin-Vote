
//-----------------------------------------------------------------------------------------------------------------------------
// Activations Performace to date
uniApp.controller('defaultCtrl', function($scope, $filter) {
  $scope.data;

  $scope.menu = [
      {"titulo":"Fuerza hispana","descripcion":"Hispanos que pueden votar como porcentaje del total de ciudadanos por distrito electoral.", "sub":[],
        "texto":" <p class='title_text'>Los distritos con más hispanos</p>\
                  <p>Los 10 distritos con más votantes latinos están en California, Texas y Florida y Nueva York.</p>\
                  <p>El primer lugar lo ocupa California 40 (CA40) ya que 77% de su electorado es hispano. Actualmente el distrito es representado por Lucille Roybal-Allard, la primera mujer , demócrata e hispana en ser electa como representante desde que el distrito fue creado en 1973. Antes, la lista de representantes sólo incluía a hombres republicanos. Quizás su victoria tenga que ver con que es uno de los distritos que más han cambiado sus fronteras geográficas debido a la intensa redistribución de los distritos. El CA40 incluía partes de Orange y San Diego, luego San Bernardino y ahora incluye partes de Los Ángeles.</p>\
                  <p>El distrito 34 de Texas (TX34), con 76% de sus electores hispanos, fue creado después del censo de 2010. Está pegado a la frontera con México e incluye partes de Brownsville y Corpus Christie. Su representante es el hispano, demócrata y católico Filemón Vela Jr, hijo del juez Filemón Bartolomé Vela Sr. y de Blanca Sánchez, la primera alcaldesa de Brownsville.</p>\
                  <p>También está el distrito 16 (TX 16) con 73% de población que puede votar hispana. Actualmente es representado por Beto O’Rourke, quien no es hispano como su nombre podría sugerir. Es más, O’Rourke es uno de siete demócratas texanos que no son hispanos; curiosamente intentó formar parte de la bancada hispana en el Congreso, pero le fue negado por no tener ascendencia latina. Sin embargo, el distrito sí ha tenido representantes hispanos como Silvestre Reyes (1997-2013).</p>\
                  <p>En Texas 15 (TX15), un distrito muy al sur del estado, el 71% de la población que vota es latina y su representante es Rubén Hinojosa, un demócrata hispano electo en 1996 y líder de la bancada hispana en el Congreso. Desde su creación este distrito siempre ha sido demócrata.</p>\
                  <p>El distrito 28 de Texas 28 (TX28) con 66% de electores hispanos, distrito que empieza en el sur de San Antonio y toca la frontera con México. Desde su creación (1993) el distrito siempre ha sido representado por hispanos demócratas: Frank Tejeda, Ciro Rodríguez y ahora Henry Cuéllar.</p>\
                  <p>El Distrito 27 (FL27) se creó en 2012 y se encuentra dentro de Miami-Dade; el 64% de la población que puede votar es hispana. Su representante es Ileana Ros-Lehtinen, una mujer hispana republicana de ascendencia cubana, que antes representaba el distrito 18.</p>\
                  <p>Sigue el distrito 20 de Texas (TX20), donde la mayoría de los latinos son de ascendencia mexicana y conforman el 64% de los electores en el distrito, va del oeste de San Antonio a Bexar. El distrito es sumamente demócrata. Desde 1956 ha votado consistentemente a favor de los candidatos demócratas a la presidencia y desde su creación, en 1935, ha tenido únicamente representantes demócratas. Entre ellos encontramos a tres hispanos: Henry B. González (que duró 38 años en el Congreso), su hijo Charlie González, y el ahora representante Joaquín Castro.</p>\
                  <p>Con 63% de la población que puede votar latina, el Distrito 25 (FL25), va de Miami hasta los Everglades. Este distrito también es representado por un cubano republicano, Mario Diaz-Balart. El distrito fue creado en 2003 y hasta ahora sólo ha sido representado por dos republicanos hispanos: David Rivera y Díaz-Balart.</p>\
                  <p>El Distrito 26 (FL26), donde los latinos suman 62% del total de ciudadanos que pueden votar, que fue creado en 2012 como resultado del censo de 2010. El distrito cubre Monroe y parte de Miami-Dade y su representante es Joe García, un demócrata de ascendencia cubana.</p>\
                  <p>El distrito 15 de Nueva York (NY15), es el más chico de Estados Unidos, y ocupa todo el Bronx. Es uno de los distritos más demócratas de Estados Unidos. John Kerry obtuvo el 90% de los votos en 2004 y Barack Obama se llevó el 96.7% en 2012. Este distrito es representado por el demócrata puertorriqueño José E. Serrano y cerca del 61% de quienes pueden elegir a sus representantes son latinos.</p>\
                "
      },
      {"titulo":"Poder hispano","descripcion":"Indica si el representante del distrito en el 2012 era o no de origen hispano.","sub":[],
        "texto":" <p class='title_text'>Distritos con representantes hispanos</p>\
                  <p>Mientras que cerca del 18% de los estadounidenses son latinos, apenas 6% de los representantes lo son. Es decir, si solo se tuviera en cuenta la raza para entender la conformación del Congreso, estaríamos ante una población claramente subrepresentada.</p> \
                  <p>Es más, sólo 10 de los 50 estados cuentan con al menos un representante hispano. El que más tiene es California con 11 representantes. Idaho, Illinois, Nueva Jersey y Washington solo tienen uno.</p>\
                  <p>Algunos de los 31 representantes hispanos llevan años en el Congreso. Es el caso de Charles Rangel, de ascendencia puertorriqueña por el lado del padre, y de madre afroamericana, quien lleva 22 mandatos, o casi 44 años en el Congreso. Ileana Ros-Lehtinen lleva 13 mandatos; ella fue la primera mujer cubano-americana en ser electa al Congreso en Florida y es hoy la mujer republicana de mayor edad en la Cámara de Representantes. José Serrano y Ed Pastor llevan 12 mandatos o 24 años en la Cámara. El primero está buscando ser reelecto y el segundo se retira al final del año.</p> \
                  <p>A pesar de los representantes longevos, el promedio de mandatos de los hispanos que hoy están en el Congreso es de ocho, lo equivalente a 16 años. Además, hay nueve los representantes hispanos que al final de año cumplirán su primer mandato en la Cámara de Representantes. Entre ellos están Filemón Vela, Gloria Negrete McLeod, Joaquín Castro, Joe García, Juan Vargas, Michelle Lujan Grisham, Pete Gallego, Raúl Ruiz y Tony Cárdenas. De todos ellos, la única que no está buscando reelegirse es Gloria Negrete.</p> \
                  <p>Sin contar a Ed Pastor y Gloria Negrete, dado que ambos se retiran al final del año, se espera que todos los hispanos mantengan su asiento en la Cámara:  23 demócratas y seis republicanos.</p> \
                  <p>Nota al margen: el número de representantes hispanos difiere de 28 hasta 33, dependiendo si se toma o no en cuenta a los de ascendencia portuguesa e italiana.</p> \
                "               
      },
      {"titulo":"Distritos competidos","descripcion":"Indica los distritos electorales en los cuales no es completamente seguro quién será el ganador. <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014?hpid=z1' target='_blank'>(Fuente: Election Lab del Washington Post).</a>", "sub":[],
        "texto":" <p class='title_text'>Distritos sin un seguro ganador</p>\
                  <p>Los distritos competidos son aquellos donde no es completamente seguro quién será el ganador (candidato o partido) de la elección de noviembre. Y en la gran mayoría la votación hispana no tiene mayor influencia.</p>\
                  <p>Según las proyecciones, tan solo 16 de los 435 distritos serán competidos este año y están dispersos entre los estados de Arizona (2), California (3), Georgia (1), Maine (1), Massachusetts (1), Minnesota (2), New Hampshire (1), Nueva York (2), Texas (1), Virginia (1) y West Virginia (1).</p>\
                  <p>¿Qué tienen en común estos distritos? No mucho.</p>\
                  <p>En algunos, como TX23, los hispanos representan el 61% de los electores que decidirán quién ganará la elección, pero en otros, como WV03, apenas representan el 0.65%.</p>\
                  <p>En tres de los 16 el representante en el poder no está buscando la reelección: ME02, NY04 y VA10. En Maine porque Mike Michaud está buscando la gubernatura del estado, y en Nueva York y Virginia porque Carolyn McCarthy y Frank Wolf se retiran después de 8 y 24 años en el Congreso, respectivamente.</p>\
                  <p>De los 13 donde sí están buscando ser reelectos, se espera que en cuatro pierdan la reelección: GA12, NY01, CA52 y WV03.</p>\
                  <p>Tim Bishop, representante de NY01 –distrito que ocupa la mayor parte de Suffolk– lleva ya 10 años en la Cámara, sin embargo en 2012 apenas logró ganar por 4.6 puntos porcentuales y el presidente Obama se llevó el distrito por una diferencia de apenas 0.5 puntos. Diversas fuentes como Cook Political y Fair Vote tienen a Bishop empatado al 50% con el republicano Lee Zeldin y otros como el Washington Post creen que Zeldin tiene cerca de 70% de probabilidad de ganar.</p>\
                  <p>John Barrow, representante de GA12 tomó posesión en 2004. Barrow fue uno de los primeros siete objetivos del Comité Congresional Republicano Nacional (NRCC por sus siglas en inglés) debido a que es un demócrata que preside un distrito que fácilmente podría ser republicano. Barrow se enfrenta a Rick Allen. Mientras que Barrow ganó la elección de 2012 con 7.6 puntos de ventaja, hoy su probabilidad de ser reelecto es de apenas 39%.</p>\
                  <p>Scott Peters es, desde el 2013, el representante del distrito 52 de California – el cual está compuesto por partes de la ciudad de San Diego. Antes de ser miembro de la Casa de Representantes, Peters fue parte del Consejo de San Diego. En la elección primaria llevada a cabo en junio, Peters obtuvo el porcentaje más alto de votos con 42%. Dado el sistema de primarias en California en el que los dos candidatos con más votos se enfrentan en la elección general, el 4 de noviembre Peters estará compitiendo con el republicano Carl DeMaio. De acuerdo a John Sides del Washington Post, Scott Peters tiene una probabilidad alta (54%) de perder la elección.</p>\
                  <p>Nick Rahall, representante de WV03, ha sido un miembro de la Casa de Representantes desde 1977 - primero del cuarto distrito de West Virginia y, desde 1993, del tercer distrito de este estado. Rahall es miembro del Partido Demócrata y forma parte del Comité de transporte e infraestructura desde el 2011. En 2012, Rahall ganó la elección con 53.3% del voto. A pesar de esto, el 4 de noviembre Rahall se enfrentará a Evan Jenkins y tiene, de acuerdo a John Siles, una probabilidad de solo 35% de ganar la elección, haciendo que WV03 sea uno de los asientos más peligrosos para los demócratas.</p>\
                "
      },
      {"titulo":"¿Qué pasó en 2012?", "descripcion":"Resultados por partido de la elección de la Cámara de Representantes en 2012.", "sub":[{"titulo":"Resultados de la elección","descripcion":"Resultados por partido de la elección de la Cámara de Representantes en 2012"},{"titulo":"Si todos los hispanos hubieran votado","descripcion":"Cómo se verían los resultados por partido de la elección de la Cámara de Representantes en 2012 si todos los hispanos mayores de 18 años, sin importar su estatus migratorio, hubieran votado."},{"titulo":"Si ningún hispano hubiera votado","descripcion":"Cómo se verían los resultados por partido de la elección de la Cámara de Representantes en 2012 si ningún hispano hubiera votado."}],
        "texto":" <p class='title_text'>Los resultados del año 2012</p>\
                  <p>El mismo año en que Barack Obama fue reelecto presidente de Estados Unidos (2012), los republicanos obtuvieron 234 asientos en la Cámara de Representantes contra 201 de los demócratas. Y los hispanos solo consiguieron el 6% del total (24 representantes demócratas y 7 republicanos).</p>\
                  <p>La tasa de participación de los hispanos en esas elecciones fue muy baja. Apenas 48% de los hispanos habilitados para participar en la contienda electoral depositaron su voto, contra 66.2% de los negros y 64.1% de los blancos no hispanos. Y muchos se preguntan qué habría pasado si la proporción de votantes hispanos hubiera sido mayor.</p>\
                  <p>Los números muestran que, dadas las características del electorado hispano (que está altamente concentrado en distritos que son poco competitivos) el impacto de una mayor participación en la composición del Congreso podría ser relativamente bajo. Lo que no quiere decir que su voto no sea importante. De hecho lo es, y mucho, sobre todo para el partido Demócrata.</p>\
                  <p>La mejor forma de probarlo, es construyendo un escenario en el que ningún hispano hubiera votado en el año 2012. En esas circunstancias, los demócratas hubieran perdido 17 distritos en 11 de los 50 estados: Arizona (3), California (3), Georgia (1), Massachusetts (1), Maine (1), Minnesota (2), New Hampshire (1), Nueva York (2), Texas (1), Virginia (1) y West Virginia (1).</p>\
                  <p class='ge3'></p>\
                  <p>En el distrito 26 de California la demócrata Julia Brownley le ganó a Tony Strickland por menos de 6 puntos; sin hispanos, Brownley no hubiera ni alcanzado el 44% de los votos.</p>\
                  <p>En CA36 el hispano nacido en México, Raúl Ruiz, también hubiera perdido la elección. Su victoria de 5.8 puntos sobre la titular del cargo en ese momento, Mary Bono Mack, se hubiera revertido. Hoy, el escaño de Ruiz sigue siendo uno de los más vulnerables de la Cámara.</p>\
                  <p>Sin el 11% del voto hispano en CA52 el demócrata Scott Peters, quien le ganó al representante Brian Bilbray por 2.4 puntos o 6,992 votos, habría perdido por cerca de 3 puntos.</p>\
                  <p>Otros grandes perdedores habrían sido Pete P. Gallego de TX23 y Joe García de FL26; ambos hispanos. Debido a que cerca del 60% de los votantes en ambos distritos son hispanos, a ambos representantes no les hubiera alcanzado ni para obtener el 35% de la votación (aunque el voto cubano en Florida se comporta un poco distinto, el voto del resto de hispanos empuja el efecto). </p>\
                  <p>Aún en el distrito 7 de Carolina del Norte, que tiene solo un 3% de electores hispanos, su no participación hubiera hecho la diferencia para el Partido Demócrata. Los 0.2 puntos que le aseguraron la reelección al demócrata Mike McIntyre hubieran sido los mismos que le asegurarían una derrota de no contar con latinos el día de la elección. En distritos muy competidos, un porcentaje muy pequeño de votantes hispanos puede hacer grandes diferencias.</p>\
                  <p>En el caso extremo de que todos los hispanos mayores de 18 años, independientemente de su estatus, hubieran votado en 2012, los resultados no habrían cambiado. Lo que quiere decir al cuestionarnos sobre el peso electoral de los hispanos, la pregunta verdaderamente relevante en este momento es ¿qué pasaría si no votaran?</p>\
                  "
      },
      {"titulo":"¿Qué puede pasar en 2014?", "descripcion":"Predicción de resultados por partido de la elección de la Cámara de Representantes en 2014 realizada por John Sides para el <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014?hpid=z1#cal%E2%80%A6' target='_blank'>Washington Post.</a>", "sub":[{"titulo":"Predicciones","descripcion":"Predicción de resultados por partido de la elección de la Cámara de Representantes en 2014 realizada por John Sides para el <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014?hpid=z1#cal%E2%80%A6' target='_blank'>Washington Post.</a>"},{"titulo":"Si todos los hispanos votaran","descripcion":"Predicción de cómo se verían los resultados por partido de la elección de la Cámara de Representantes en 2014 si todos los hispanos mayores de 18 años votaran, sin importar su estatus migratorio."},{"titulo":"Si ningún hispano votara","descripcion":"Predicción de cómo se verían los resultados por partido de la elección de la Cámara de Representantes en 2014 si ningún hispano votara."}],
        "texto": "  <p class='title_text'>Las proyecciones para el presente año</p>\
                    <p>Al repetir el ejercicio de la sección anterior (cambiando el porcentaje de votos que obtiene cada candidato por la probabilidad de que uno u otro partido gane la elección), surge de nuevo la evidencia que respalda la hipótesis de que los hispanos son ya un electorado clave para el Partido Demócrata. Y que lo más grave para ellos sería que no votaran.</p>\
                    <p>Dado que se basa en predicciones, el impacto de los hispanos parece ser mayor respecto a 2012; pero es posible que esta diferencia se reduzca conforme se acerque la elección y las probabilidades de triunfo de cada partido cambien.</p>\
                    <p>En este caso resulta que de votar todos los hispanos, los demócratas ganarían nueve distritos que de otra forma perderían: CA10, CA42, CA48, FL16, GA07, GA10, NJ07, VA10 y TX24 (ver nota metodológica).</p>\
                    <p>En algunos casos, como en los distritos californianos, los latinos pasarían de 31% a 39% de los votantes, mientras en otros, como NJ09, el incremento sería de menos de 3% (y la elección sigue muy reñida).</p>\
                    <p>Pero si ningún hispano saliera a votar, los demócratas podrían perder hasta 32 distritos, 17 de ellos con una altísima probabilidad.</p>\
                    <p>De estos 17, cuatro corresponden a representantes hispanos del partido Demócrata que están buscando la reelección: Rubén Hinojosa (TX15) que se enfrenta a Eddie Zamora; Pete Gallego (TX23) que se enfrenta a Will Hurd; Filemón Vela (TX34), que se enfrenta a Larry Smith; y, Luis Gutiérrez (IL04) que se enfrenta a Héctor Concepción.</p>\
                    <p>Para los 15 restantes la derrota sin hispanos no es segura, pero probable. Entre ellos están: Jim Costa (CA16), Raúl Ruiz (CA36), Raúl Grijalva (AZ03), Joe García (FL26) y Juan Vargas (CA51).</p>\
                    <p>Sin esos 32 distritos, los demócratas, que se predice obtendrán 191 asientos en el Congreso, se quedarían con apenas 159.</p>\
                "
      }
  ];
  $scope.seleccionada = {"titulo":"Fuerza hispana","descripcion":"Hispanos mayores de 18 años que son ciudadanos como porcentaje del total de la población de 18 años o más con ciudadanía", "sub":[],
        "texto":"<p>Los 10 distritos con más latinos votantes están en California, Texas y Florida y Nueva York.</p> \
                 <p>El primer lugar lo ocupa California 40 (CA40) ya que 77% de su electorado es hispano. Actualmente el distrito es representado por Lucille Roybal-Allard, la primera mujer, demócrata e hispana en ser electa como representante desde que el distrito fue creado en 1973. Antes, la lista de representantes sólo incluía a hombres republicanos. Quizás su victoria tenga que ver con que es uno de los distritos que más han cambiado sus fronteras geográficas debido a la intensa redistritación. El distrito pasó de incluir partes de Orange y San Diego, luego San Bernardino y ahora incluye partes de Los Ángeles.</p> \
                 <p>Después le siguen cinco distritos texanos con un promedio de 70% de votantes hispanos, esto significa que 13% de los distritos de Texas se encuentren entre los que más votantes hispanos concentran en todo el país.</p> \
                 <p>Tenemos a Texas 34 (TX34), distrito que apenas fue creado debido al censo de 2010, pegado a la frontera con México y que incluye partes de Brownsville y Corpus Christie y cuyo representante es el hispano, demócrata y católico Filemón Vela Jr, hijo del juez Filemón Bartolomé Vela Sr. y de Blanca Sánchez, la primera mujer alcalde de Brownsville.</p> \
                 <p>En Texas 15 (TX15), un distrito muy al sur del estado, el 80% de su población es latina y su representante es Rubén Hinojosa, un demócrata hispano electo en 1996 y líder de la bancada hispana en el Congreso. Desde su creación este distrito siempre ha sido demócrata.</p> \
                 <p>También se encuentra Texas 16 (TX 16) con 78% de población hispana. Actualmente es representado por Beto O’Rourke, quien no es hispano como su nombre podría aparentar. Es más, O’Rourke es uno de siete demócratas texanos que no son hispanos; curiosamente intentó formar parte de la bancada hispana en el Congreso, pero le fue negado por no tener ascendencia latina. Sin embargo, el distrito sí ha tenido representantes hispanos como Silvestre Reyes (1997-2013).</p> \
                 <p>El distrito 20 de Texas (TX20), donde la mayoría de los latinos son de ascendencia mexicana, va del oeste de San Antonio a Bexar. El distrito es sumamente demócrata, desde 1956 ha votado consistentemente a favor de los candidatos demócratas a la presidencia y desde su creación, en 1935, ha tenido únicamente representantes demócratas. Entre ellos encontramos a tres hispanos: Henry B. González (que duró 38 años en el Congreso) , su hijo Charlie González, y el ahora representante Joaquín Castro.</p> \
                 <p>Por último tenemos a Texas 28 (TX28), distrito muy al sur del estado que empieza en el sur de San Antonio y toca con la frontera con México. Desde su creación (1993) el distrito siempre ha sido representado por hispanos demócratas: Frank Tejeda, Ciro Rodríguez y ahora Henry Cuellar.</p> \
                 <p>Los siguientes tres distritos se encuentran en Florida, donde aproximadamente 63% de su electorado es latino. El Distrito 27 (FL27) que se creó en 2012 posterior a los resultados del censo de 2010 y se encuentra dentro de Miami-Dade. Su representante es Ileana Ros-Lehtinen, una mujer hispana republicana de descendencia cubana, que antes representaba el distrito 18.</p> \
                 <p>Con 71% de población latina también está el Distrito 25 (FL25), que va de Miami hasta los Everglades. Este distrito también es representado por un cubano republicano, Mario Diaz-Balart –hijo del político cubano Rafael Díaz-Balart y cuya tía, Mirta Díaz-Balart, fue la primera esposa de Fidel Castro. El distrito fue creado en 2003 y hasta ahora sólo ha sido por dos republicanos hispanos: David Rivera y Díaz-Balart.</p> \
                 <p>También el Distrito 26 (FL26), que fue creado en 2012 como resultado del censo de 2010. El distrito ocupa Monroe y parte de Miami-Dade y su representante es Joe García, un demócrata de ascendencia cubana.</p> \
                 <p>En el décimo lugar llega Nueva York 15 (NY15), el distrito que por su tamaño es el más chico de todo Estados Unidos, y ocupa todo el Bronx. Es uno de los distritos más demócratas de Estados Unidos; John Kerry, por ejemplo, ganó 90% de los votos en 2004 y en 2012 Obama se llevó 96.7%. Este distrito es representado por el demócrata puertorriqueño José E. Serrano.</p> \
                "
      };
  $scope.opt_activa = "Fuerza hispana";
  $scope.svg;
  $scope.groups;  
  $scope.group;
  $scope.rects;
  $scope.estados = ["CA","OR","WA","MT","ND","SD","WY","ID","NV","UT","TX","NM","AZ","MO","NE","CO","KS",
                    "OK","LA","AR","IN","OH","MI","WI","IL","MN","IA","MS","FL","SC","GA","AL","TN","NC",
                    "VA","WV","KY","MD","DC","PA","NY","NJ","CT","RI","MA","VT","NH","ME","DE","AK","HI"];
  $scope.instrucciones = false;
  $scope.acerca = false;
  $scope.modal = false;


  /*if (lang=="eng"){
    $scope.menu = [{"titulo":"Hispanic Force","descripcion":"Total hispanic population over 18 years of age and with citizenship status and therefore can vote"},{"titulo":"Hispanic Force (%)","descripcion":"Hispanic population over 18 years of age and with citizenship status as a percentage of the total population over 18 years of age with US citizenship"},{"titulo":"Hispanic Power","descripcion":"Indicates if the district representative was of hispanic origin in 2012"},{"titulo":"Coin-toss Districts","descripcion":"Indicates if the district is competed between the major parties. This means that both parties have a probability close to 50% of winning the election.(Source: http://cookpolitical.com/house/charts/scatterplot)"},{"titulo":"What happened in 2012?","descripcion":"House of Representatives election results 2012"},{"titulo":"House of Representatives election results 2012","descripcion":"Shows how the 2012 House of Representatives election results would've turned out if no hispanics would've voted"},{"titulo":"What would've happened in 2012 if all hispanics had voted?","descripcion":"Shows how the 2012 House of Representatives election results would've turned out if all hispanics would've voted"}];
    $scope.seleccionada= {"titulo":"Hispanic Force","descripcion":"Total hispanic population over 18 years of age and with citizenship status and therefore can vote"};
  }*/

  $scope.getOptClass = function(){
    if ($scope.seleccionada != ""){
      if ($scope.seleccionada.titulo == "Distritos competidos"){
        return "doble";
      }else{
        return "uno";
      }
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
        //d3.select("#texto").html($scope.seleccionada.texto);
        $scope.update($scope.menu[0]);
        $scope.colorear($scope.seleccionada.titulo);
      
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
          if (ancho>400){
              d3.selectAll("rect").attr("stroke","none");              
              d3.select(this).attr("stroke","black");
              var x, y, k;                        
              x = +d.x+130;
              y = +d.y+150;
              k = 2;                     

              d3.select("#principal").transition()
                  .duration(750)
                  .attr("transform", "scale(" + k + ")translate(" + -x + "," + -y + ")");

              d3.select("#univision").transition()
                  .duration(750)
                  .style({"float":"right","width":"445px"});

              /*d3.select(".zoomout")
                .style({"visibility":"visible","text-aling":"center"})
                .on("click",function(){                    
                    d3.select(this).style("visibility","hidden");                                   
                    d3.select("#principal").transition()
                      .duration(750)
                      .attr("transform", "scale(" + 1 + ")translate(" + 0 + "," + 0 + ")");                    
                    d3.select("#univision").transition()
                      .duration(750)
                      .style({"float":"none","width":"775px"});
                    d3.selectAll("#estados g").style("visibility","visible");              
                    d3.selectAll("rect").attr("stroke","none");
                    d3.select("#tooltip").style({"display":"none"});   
                    d3.select(".rango2").style({"display":"block"});
                });*/
            }
            d3.select(".rango2").style({"display":"none"});
            createTooltip(d);            
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
      zoomout();
      $scope.seleccionada = opt;
      $("#descripcion").html(opt.descripcion);
      if (opt.titulo=="¿Qué puede pasar en 2014?"){
        d3.select(".estatica").style({"display":"block"});
        //d3.select(".nota_grafica").style({"display":"block"});
      }else{
        d3.select(".estatica").style({"display":"none"});
        //d3.select(".nota_grafica").style({"display":"none"});
      }
      if (opt.titulo=="¿Qué pasó en 2012?"){
        d3.select(".estatica2").style({"display":"block"});
        //d3.select(".nota_grafica2").style({"display":"block"});
      }else{
        d3.select(".estatica2").style({"display":"none"});
        //d3.select(".nota_grafica2").style({"display":"none"});
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
      return (opt==$scope.seleccionada);
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
          color.range(["#e5f7c9","#98c57b","#8baa3f","#548a36","#064708"]);
          d3.select(".rango2").html("<div><span style='background-color:#e5f7c9' class='recuadro'></span><span class='texto'>0 a 2.16%</span></div><div><span style='background-color:#98c57b' class='recuadro'></span><span class='texto'>2.17% a 4.2%</span></div><div><span style='background-color:#8baa3f' class='recuadro'></span><span class='texto'>4.3% a 8.6%</span></div><div><span style='background-color:#548a36' class='recuadro'></span><span class='texto'>8.7% a 16.7%</span></div><div><span style='background-color:#064708' class='recuadro'></span><span class='texto'>16.8% en adelante</span></div>");          
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
          color.range(["#98c57b","#064708","#98c57b","#98c57b","#98c57b","#98c57b"]);
          d3.select(".rango2").html("<div><span style='background-color:#064708' class='recuadro'></span><span class='texto'>Distrito competido</span></div><div><span style='background-color:#98c57b' class='recuadro'></span><span class='texto'>Distrito no competido</span></div>");
          return color(d.competido);

        })
      }else if ((parametro == "¿Qué puede pasar en 2014?") || (parametro == "Predicciones")){
        $scope.rects.attr("fill", function(d){
          color.domain([0,1]);       
          color.range(["#e63e3b","#287ECB"]);
        d3.select(".rango2").html("<div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Demócrata</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republicano</span></div>");        
        return color(d.dem_14);
        })
      }else if (parametro == "Si todos los hispanos votaran"){
        $scope.rects.attr("fill", function(d){          
          d3.select(".rango2").html("<div><span style='background-color:#053061' class='recuadro'></span><span class='texto'>Demócratas no ganaban y ahora seguro ganan</span></div><div><span style='background-color:#819bc8' class='recuadro'></span><span class='texto'>Demócratas no ganaban y ahora tal vez ganan</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Demócratas ya ganaban</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republicanos ganaban y siguen ganando</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>Sin datos</span></div>");                    
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
      }else if (parametro == "Si ningún hispano votara"){
        $scope.rects.attr("fill", function(d){                    
          d3.select(".rango2").html("<div><span style='background-color:#821f20' class='recuadro'></span><span class='texto'>Demócratas ganaban y ahora seguro pierden</span></div><div><span style='background-color:#f48794' class='recuadro'></span><span class='texto'>Demócratas ganaban y ahora tal vez pierden</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Demócratas ya perdían</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Demócratas ganaban y siguen ganando</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>Sin datos</span></div>");          
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
      }else if (parametro == "Si todos los hispanos hubieran votado"){
        $scope.rects.attr("fill", function(d){          
          d3.select(".rango2").html("<div><span style='background-color:#053061' class='recuadro'></span><span class='texto'>Demócratas no ganaban y ahora ganan</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Demócratas ya ganaban y siguen ganando</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republicanos ya ganaban y siguen ganando</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>Sin datos</span></div>");          
          if (+d.cambio_Dmas == 1){
            return "#053061";
          }else if (+d.DwinMas == 1){
            return "#287ECB";
          }else if (+d.RwinMas == 1){
            return "#e63e3b";
          }else{
            return "#e0e0e0";
          }
        })
      }else if (parametro == "Si ningún hispano hubiera votado"){
        $scope.rects.attr("fill", function(d){                    
          d3.select(".rango2").html("<div><span style='background-color:#821f20' class='recuadro'></span><span class='texto'>Demócratas ganaban y ahora pierden</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Demócratas ya perdían</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Demócratas ganaban y siguen ganando</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>Sin datos</span></div>");          
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
      /*if ((parametro == "Todos los hispanos") || (parametro == "Sin hispanos")){
        d3.select("#referencia").style({"display":"block"});
      }else{
        d3.select("#referencia").style({"display":"none"});
      }*/
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

function createTooltip(d){
        var scope = angular.element($('#control')).scope();         
        console.log(d);
        var html = "";
        if (scope.seleccionada.titulo=="Fuerza hispana" || (scope.seleccionada.titulo=="Poder hispano" & d.partyRH=="")){
          html = '<div id="titulo_tooltip" class="titulo_tooltip">'+d.state+'<span style="color:#000;">'+d.cd+'</span></div> \
          <div class="row"><div class="c1">Distrito</div><div class="c2">'+d.district+'</div></div> \
          <h3>HISPANOS VOTANTES</h3> \
          <div class="row"><div class="c1">Total</div><div class="c2">'+agregarComas(+d.hisp_totvoters)+'</div></div> \
          <div class="row"><div class="c1">%</div><div class="c2">'+(+d.hisp_pervot).toFixed(2)+'%</div></div> \
          <div class="zoomout">Regresar al mapa</div> \
        ';
        }else if (scope.seleccionada.titulo=="Poder hispano"){
          html = '<div id="titulo_tooltip" class="titulo_tooltip">'+d.state+'<span style="color:#000;">'+d.cd+'</span></div> \
          <div class="row"><div class="c1">Distrito</div><div class="c2">'+d.district+'</div></div> \
          <div class="row"><div class="c1 negro">Rep: '+d.name+'</div><div class="c2"><div class="cpartido p'+d.partyRH+'"></div></div></div> \
          <div class="row"><div class="c1">Año que entró</div><div class="c2">'+d.yearinRH+'</div></div> \
          <div class="row"><div class="c1">Mandato(s)</div><div class="c2">'+d.termsRH+'</div></div> \
          <h3>HISPANOS VOTANTES</h3> \
          <div class="row"><div class="c1">Total</div><div class="c2">'+agregarComas(+d.hisp_totvoters)+'</div></div> \
          <div class="row"><div class="c1">%</div><div class="c2">'+(+d.hisp_pervot).toFixed(2)+'%</div></div> \
          <div class="zoomout">Regresar al mapa</div> \
        ';
        }else if (scope.seleccionada.titulo=="¿Qué pasó en 2012?"){
          var l = "";
          if (scope.opt_activa=="Si todos los hispanos hubieran votado" && (+d.cambio_Dmas != 1) && (+d.DwinMas != 1) && (+d.RwinMas != 1)){
            l = "<p>Sin datos se refiere a que el modelo no alcanza a predecir los escenarios hipotéticos</p>";
          }
          if (scope.opt_activa=="Si ningún hispano hubiera votado" && (+d.cambio_D0 != 1) && (+d.Dlose0 != 1) && (+d.Dwin0 !=1 )){
            l = "<p>Sin datos se refiere a que el modelo no alcanza a predecir los escenarios hipotéticos</p>";
          }
          html = '<div id="titulo_tooltip" class="titulo_tooltip">'+d.state+'<span style="color:#000;">'+d.cd+'</span></div> \
          <div class="row"><div class="c1">Distrito</div><div class="c2">'+d.district+'</div></div> \
          <div class="row"><div class="c1 negro">Rep: '+d.name+'</div><div class="c2"><div class="cpartido p'+d.party2+'"></div></div></div> \
          <div class="barchart"> \
              <h4>Resultado</h4> \
              <div class="grafibarra">\
                <div class="dosc"><div class="cd"><div class="barra" style="width:'+getAncho(d.votes_D)+'%"></div></div><div class="cr"><div class="barra" style="width:'+getAncho(d.votes_R)+'%"></div></div></div>\
                <div class="dosc"><div class="cd"><div style="width:'+getAncho(d.votes_D)+'%">'+getPorcentaje(d.votes_D)+'</div></div><div class="cr"><div style="width:'+getAncho(d.votes_R)+'%">'+getPorcentaje(d.votes_R)+'</div></div></div>\
                <h5>Todos los hispanos</h5> \
                <div class="dosc"><div class="cd"><div class="barra" style="width:'+getAncho(d.Dtodoshisp_mean)+'%"></div></div><div class="cr"><div class="barra" style="width:'+getAncho(d.Rtodoshisp)+'%"></div></div></div>\
                <div class="dosc"><div class="cd"><div style="width:'+getAncho(d.Dtodoshisp_mean)+'%">'+getPorcentaje(d.Dtodoshisp_mean)+'</div></div><div class="cr"><div style="width:'+getAncho(d.Rtodoshisp)+'%">'+getPorcentaje(d.Rtodoshisp)+'</div></div></div>\
                <h5>Ningún hispano</h5> \
                <div class="dosc"><div class="cd"><div class="barra" style="width:'+getAncho(d.Dnohisp_mean)+'%"></div></div><div class="cr"><div class="barra" style="width:'+getAncho(d.Rnohisp)+'%"></div></div></div>\
                <div class="dosc"><div class="cd"><div style="width:'+getAncho(d.Dnohisp_mean)+'%">'+getPorcentaje(d.Dnohisp_mean)+'</div></div><div class="cr"><div style="width:'+getAncho(d.Rnohisp)+'%">'+getPorcentaje(d.Rnohisp)+'</div></div></div>\
              </div>\
          </div> \
          <h3>HISPANOS VOTANTES</h3> \
          <div class="row"><div class="c1">Total</div><div class="c2">'+agregarComas(+d.hisp_totvoters)+'</div></div> \
          <div class="row"><div class="c1">%</div><div class="c2">'+(+d.hisp_pervot).toFixed(2)+'%</div></div>'+l+' \
          <div class="zoomout">Regresar al mapa</div> \
        ';
        }else if (scope.seleccionada.titulo=="¿Qué puede pasar en 2014?"){          
          var l = "";
          if (scope.opt_activa=="Si todos los hispanos votaran" && (+d.yesWin != 1) && (+d.maybeWin != 1) && (+d.WinWinTodos != 1) && (+d.residTodos != 1)){            
            l = "<p>Sin datos se refiere a que el modelo no alcanza a predecir los escenarios hipotéticos</p>";
          }
          if (scope.opt_activa=="Si ningún hispano votara" && (+d.yesLose != 1) && (+d.maybeLose != 1) && (+d.LoseLoseNo != 1) && (+d.residNo != 1)){
            l = "<p>Sin datos se refiere a que el modelo no alcanza a predecir los escenarios hipotéticos</p>";
          }
          var extra="";
          if ((d.cincumbent!="") && (d.cincumbent!= null)){
            extra = '<div class="row"><div class="c1" style="font-weight:bold; color:#000;">Incumbent: '+d.cincumbent+'</div><div class="c2" style="border-bottom:0px;"><div class="cpartido p'+d.cincumbentpartyid+'"></div></div></div>';
            if ((d.candidato1 != "") && (d.candidato1 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Retador: '+d.candidato1+'</div><div class="c2"><div class="cpartido p'+d.candidato1partyid+'"></div></div></div>';
            }
            if ((d.candidato2 != "") && (d.candidato2 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Retador: '+d.candidato2+'</div><div class="c2"><div class="cpartido p'+d.candidato2partyid+'"></div></div></div>';
            }
          }else{
            if ((d.candidato1 != "") && (d.candidato1 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Candidato: '+d.candidato1+'</div><div class="c2"><div class="cpartido p'+d.candidato1partyid+'"></div></div></div>';
            }
            if ((d.candidato2 != "") && (d.candidato2 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Candidato: '+d.candidato2+'</div><div class="c2"><div class="cpartido p'+d.candidato2partyid+'"></div></div></div>';
            }
          }


          var general, todos, sin_hispanos;
          if (d.dem_14==""){
              general = 'G';
          }else if (d.dem_14=="1"){
               general = 'D';
          }else{
               general = 'R';                
          }
          if (d.partyTodos=="Sin datos"){
              todos = 'G';
          }else if (d.partyTodos!="R"){
              todos = 'D';
          }else{
              todos = 'R';               
          }
          if (d.partyNo=="Sin datos"){
              sin_hispanos= 'G';
          }else if (d.partyNo!="R"){
              sin_hispanos= 'D';                                
          }else{
              sin_hispanos= 'R';                
          }                                        
          html = '<div id="titulo_tooltip" class="titulo_tooltip">'+d.state+'<span style="color:#000;">'+d.cd+'</span></div> \
          <div class="row"><div class="c1">Distrito</div><div class="c2">'+d.district+'</div></div>'+extra+' <br/><br/>\
          <div class="row"><div class="c1">Predicción</div><div class="c2"><div class="cpartido p'+general+'"></div></div></div> \
          <div class="row"><div class="c1">Todos los hispanos</div><div class="c2"><div class="cpartido p'+todos+'"></div></div></div> \
          <div class="row"><div class="c1">Ningún hispano</div><div class="c2"><div class="cpartido p'+sin_hispanos+'"></div></div></div> \
          <h3>HISPANOS VOTANTES</h3> \
          <div class="row"><div class="c1">Total</div><div class="c2">'+agregarComas(+d.hisp_totvoters)+'</div></div> \
          <div class="row"><div class="c1">%</div><div class="c2">'+(+d.hisp_pervot).toFixed(2)+'%</div></div> '+l+'\
          <div class="zoomout">Regresar al mapa</div> \
          ';
        }else if (scope.seleccionada.titulo=="Distritos competidos"){  
          var extra="";
          if ((d.cincumbent!="") && (d.cincumbent!= null)){
            extra = '<div class="row"><div class="c1" style="font-weight:bold; color:#000;">Incumbent: '+d.cincumbent+'</div><div class="c2" style="border-bottom:0px;"><div class="cpartido p'+d.cincumbentpartyid+'"></div></div></div>';
            if ((d.candidato1 != "") && (d.candidato1 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Retador: '+d.candidato1+'</div><div class="c2"><div class="cpartido p'+d.candidato1partyid+'"></div></div></div>';
            }
            if ((d.candidato2 != "") && (d.candidato2 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Retador: '+d.candidato2+'</div><div class="c2"><div class="cpartido p'+d.candidato2partyid+'"></div></div></div>';
            }
          }else{
            if ((d.candidato1 != "") && (d.candidato1 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Candidato: '+d.candidato1+'</div><div class="c2"><div class="cpartido p'+d.candidato1partyid+'"></div></div></div>';
            }
            if ((d.candidato2 != "") && (d.candidato2 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Candidato: '+d.candidato2+'</div><div class="c2"><div class="cpartido p'+d.candidato2partyid+'"></div></div></div>';
            }
          }


          html = '<div id="titulo_tooltip" class="titulo_tooltip">'+d.state+'<span style="color:#000;">'+d.cd+'</span></div> \
          <div class="row"><div class="c1">Distrito</div><div class="c2">'+d.district+'</div></div>'+extra+'\
          <h3>HISPANOS VOTANTES</h3> \
          <div class="row"><div class="c1">Total</div><div class="c2">'+agregarComas(+d.hisp_totvoters)+'</div></div> \
          <div class="row"><div class="c1">%</div><div class="c2">'+(+d.hisp_pervot).toFixed(2)+'%</div></div> \
          <div class="zoomout">Regresar al mapa</div> \
          ';
        }





        d3.select("#tooltip").html(html).style({"display":"block", "visibility":"visible"});

        d3.select(".zoomout")
          .style({"visibility":"visible","text-aling":"center"})
          .on("click",function(){                    
              zoomout();
          });

    }

    function zoomout(){
      d3.select("#tooltip").style("visibility","hidden");                                   
              d3.select("#principal").transition()
                .duration(750)
                .attr("transform", "scale(" + 1 + ")translate(" + 0 + "," + 0 + ")");                    
              d3.select("#univision").transition()
                .duration(750)
                .style({"width":"775px"});
              $("#univision").css("float","none");
              d3.selectAll("#estados g").style("visibility","visible");              
              d3.selectAll("rect").attr("stroke","none");
              d3.select("#tooltip").style({"display":"none"});   
              d3.select(".rango2").style({"display":"block"});
    }