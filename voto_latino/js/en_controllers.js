
//-----------------------------------------------------------------------------------------------------------------------------
// Activations Performace to date
uniApp.controller('defaultCtrl', function($scope, $filter) {
  $scope.data;

  $scope.menu = [
      {"titulo":"Hispanic force","descripcion":"Hispanics that may vote as a percentage of total population per electoral district.", "sub":[],
        "texto":" <p class='title_text'>Districts with more Hispanics</p>\
                  <p>California, Texas, Florida and New York together are home to the ten federal congressional districts with the highest concentrations of Latino voters in the U.S.</p>\
                  <p>The single highest concentration is CA40, where close to 77% of the electorate is Hispanic. Lucille Roybal-Allard, currently representing the district, is its first female, first Hispanic and first Democratic representative since the district was created in 1973. Prior to Roybal-Allard, the district had only been represented by male Republicans. Her win could be the result of the shifting of the boundaries of the district which first covered parts of San Diego and Orange counties, then San Bernardino and which now encompasses parts of Los Angeles.</p>\
                  <p>TX34, where 76% of the electorate is Hispanic, was created after the 2010 census and is next to the Mexico border. It includes parts of Brownsville and Corpus Christie and Filemon Vela Jr. is the current representative. Vela is the son of longtime federal judge, Filemon Bartolome Vela Sr. and Blanca Sanchez, Brownsville’s first female mayor.</p>\
                  <p>73% of TX16’s electorate is Hispanic, too. Beto O’Rourke currently represents the district, and though his name may lead you to think otherwise, O’Rourke is not Hispanic but a fourth generation native of El Paso. O’Rourke is one of seven Texas Democratic representatives who are not Hispanics. He even tried to gain membership to the Hispanic Caucus but was denied do to a lack of Hispanic heritage. The district was been previously represented by Hispanic, Silvestre Reyes (1997-2013), among others.</p>\
                  <p>TX15, in the deep south of Texas, is has 71% of Latino voters and Ruben Hinojosa, a Democrat elected in 1996 and leader of the Hispanic Caucus, is its current representative. Since the creation of TX15 in 1903, a democrat has always represented the district.</p>\
                  <p>TX28 starts south of San Antonio and also touches the U.S.-Mexico border; here nearly 66% of the electorate is Hispanic. Since the demarcation of the district in 1993, been consistently blue and Hispanic. The list of representatives include Frank Tejeda, Ciro Rodriguez and now, Henry Cuellar.</p>\
                  <p>FL27 was created in 2012 and Hispanics represent nearly , after the 2010 census, and is entirely within Miami-Dade County. Ileana Ros-Lehtinen, a Cuban-American and a Republican who previously represented the 18th district, is the current representative.</p>\
                  <p>TX20, where most Hispanics are of Mexican descent and sum 64% of total voters, spans San Antonio to Bexar. The district has also been consistently Democratic. Since 1956, all Democratic presidential candidates have won here, and three representatives have been Hispanics too: Henry B. Gonzalez (who occupied the seat for 38 years), his son Charlie Gonzalez, and the current representative, Joaquin Castro.</p>\
                  <p>With a 63% Hispanic electorate, FL25 spans from Miami to the Everglades in the west. Cuban-American and Republican, Mario Díaz Balart, represents this district. Balart is the son of Cuban politician, Rafael Diaz-Balart. His aunt, Mirta Diaz-Balart, was Fidel Castro’s first wife. The district, created in 2003, was previously represented by one other Hispanics, also a Republican, David Rivera.</p>\
                  <p>Also created in 2012 after the 2010 census, FL26 occupies parts of Monroe and Miami-Dade counties; here 62% of the electorate is Latino. Joe Garcia, a Democrat of Cuban heritage, is its current representative.</p>\
                  <p>Lastly the 10th most highly concentrated population of Hispanic voters (61% of all voters) hail from NY15, the smallest congressional district the US. NY15 is located entirely within The Bronx. It is one of the most democratic districts of the country. John Kerry won with 90% of votes in 2004 and Obama won with 96.7% in 2012. Jose E. Serrano, a Democrat and Puerto Rican, is the current representative.</p>\
                "
      },
      {"titulo":"Hispanic power","descripcion":"Indicates if the district representative was of hispanic origin in 2012","sub":[],
        "texto":" <p class='title_text'>Districts with hispanic representatives</p>\
                  <p>While close to 18% of people living in the U.S. are of Hispanic heritage, barely 6% of the U.S. House of Representative is. If Congress mirrored ethnicity perfectly, Hispanics would be largely underrepresented.</p>\
                  <p>Only 10 of 50 states have at least one Hispanic representative. The highest number hail from California with 11 and Idaho, Illinois, New Jersey and Washington are represented by 1 each.</p>\
                  <p>Some of the 31 Hispanic congressmen have occupied their seats for many years. This is the case of Charles Rangel, an African-American and Hispanic fulfilling his 22nd term – his 44th year in Congress. Ileana Ros-Lehtinen is in the midst of her 13th term. The first Cuban-American female elected to Congress, she’s now the oldest Republican female in the House of Representatives. Jose Serrano and Ed Pastor each have 24 years in Congress. The former is seeking reelection once more this year and the latter will retire.</p>\
                  <p>The average terms for Hispanics in Congress is eight. Still, 9 congressmen are only in their first terms, among them Filemon Vela, Gloria Negrete McLeod, Joaquin Castro, Joe Garcia, Juan Vargas, Michelle Lujan Grisham, Pete Gallego, Raul Ruiz and Tony Cardenas. Of these nine, only Gloria Negrete is not seeking reelection.</p>\
                  <p>Beyond Ed Pastor and Gloria Negrete, both of whom will retire, all Hispanic representatives (23 Democrats and six Republicans) are expected to win re-election.</p>\
                "               
      },
      {"titulo":"Battleground Districts","descripcion":"Indicates the electoral districts in which it is not entirely sure who will win. <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014?hpid=z1' target='_blank'>(Source: Washington Post</a>)", "sub":[],
        "texto":" <p class='title_text'>Districts without a sure winner</p>\
                  <p>Battleground districts are those in which no clear winner can be predicted, a toss-up between both candidates and both parties.</p>\
                  <p>Only 16 of the 435 districts are considered battleground districts in the coming 2014 election. They’re found in the states of Arizona (2), California (3), Georgia (1), Maine (1), Massachusetts (1), Minnesota (2), New Hampshire (1), New York (2), Texas (1), Virginia (1) and West Virginia (1).</p>\
                  <p>What do they have in common? Not much.</p>\
                  <p>In some, such as TX23, Hispanics represent close to 61% of the electorate and they help to determine the winner. In others, such as WV03, Hispanics make up less than 0.65% of the population.</p>\
                  <p>In 3 of the 16 battleground districts, current incumbents are not seeking reelection: ME02, NY04 and VA10. In Maine, Representative Mike Michaud is running for governor. In New York and Virginia, Carolyn McCarthy and Frank Wolf will retire, after 8 and 24 years in Congress respectively, at the end of this year.</p>\
                  <p>Of the 13 battleground incumbents seeking reelection, only 4 are expected to lose: CA52, GA12, NY01 y WV03.</p>\
                  <p>Scott Peters has been the representative for the 52nd district in California – which is comprised of parts of San Diego – since 2013. Before being a member of the House, Peters served two terms in the Sand Diego City Council. This year in the primary elections he got the largest vote percentage with 42%, and because of the California has a 'top two' primary system he is running against republican candidate Carl DeMaio in November. Even after placing first in the primary, analysts like John Sides of the Washington Post, predict a loss for Peters with only a 46% chance of winning.</p>\
                  <p>Tim Bishop, representing NY01 – covering most of Suffolk County on eastern Long Island – has been in the House for more than 10 years, but his victories have not been easy. In 2012 he won by a margin of 4.6 points, when President Obama won the district by barely half a percentage point. Cook Political and Fair Vote have predicted a tie between Bishop and Republican, Lee Zeldin, in this year’s elections. The Washington Post gives Zeldin a 69% chance of winning over Bishop.</p>\
                  <p>In GA12, Democrat John Barrow entered the House in 2004. One of seven early targets of the National Republican Congressional Committee (NRCC) because the district is seen as strongly Republican, Barrow will confront Rick Allen in the 2014 election. While Barrow won by 7.6 points in 2012, his probability of winning this year is 39%.</p>\
                  <p>Nick Rahall, representative of the WV03, has been a member of the House of Representatives since 1977 – first representing the 4th district of West Virginia and, since 1993, the 3rd district of this state. Rahall is a member of the Democratic Party and is a ranking member of the Committee on Transportation and Infrastructure since 2011. In 2012, Rahall won the election with 53.3% of the vote. Nonetheless, in the November election Rahall is running against republican candidate Evan Jenkins and has, according to John Siles, a 35% probability of winning, making WV03 one of the most dangerous House seats for the democrats.</p>\
                "
      },
      {"titulo":"What could’ve happened in 2012?", "descripcion":"House of Representatives election results in 2012", "sub":[{"titulo":"Election results","descripcion":"House of Representatives election results in 2012"},{"titulo":"If all Hispanics would've voted","descripcion":"Shows how the 2012 House of Representatives election results would've turned out if all Hispanics over 18 years of age would've voted"},{"titulo":"If no Hispanics would've voted","descripcion":"Shows how the 2012 House of Representatives election results would've turned out if no Hispanics voted"}],
        "texto":" <p class='title_text'>The results of the year 2012</p>\
                  <p>The same year Barack Obama was re-elected president, Republicans gained 234 of 435 seats in the House. They took the majority and inaugurated a divided government.</p>\
                  <p>But what if no Hispanics had voted in 2012? Or consider that all Hispanics over 18 had voted, even irrespective of their eligibility. These questions are extremely relevant to the present debate over the size and character of the Hispanic political voice. While population numbers are growing – take, for instance, in California where they are already the majority – Hispanics have not been able to turn their numbers into political victories.</p>\
                  <p>Nate Cohn, in “The Upshot” on The New York Times website, has argued that this is due to the fact that there is no group more politically marginalized than Hispanics in the U.S. Most Hispanics are undocumented immigrants (close to 11 million) and among citizens the great majority are either too young or too geographically concentrated. In 2012 while 66.2% of eligible blacks and 64.1% of whites voted, barely 48% of Hispanics did. According to Cohn, only time will turn this around for Hispanics.</p>\
                  <p>The question analysts like Cohn are presenting, though, is incorrect. It is not that Hispanics will be the key to determining which party wins the battleground districts (with the exception of TX23) but that they already are a key electorate for the Democratic Party.</p>\
                  <p>How do we know? By simulating a scenario in which no Hispanics voted in 2012.</p>\
                  <p class='en_ge3'></p>\
                  <p>The results are astounding. Democrats would’ve lost 12 districts in 11 of 50 states: Arizona (3), California (3), Georgia (1), Massachusetts (1), Maine (1), Minnesota (2), New Hampshire (1), New York (2), Texas (1), Virginia (1) and West Virginia (1).</p>\
                  <p>In CA26, Democrat Julia Brownley won against Tony Strickland with a 6-point margin. Lacking Hispanic support, she would’ve come up short by some 44%.</p>\
                  <p>In CA36, Mexican-born Raul Ruiz would’ve lost the election. His 5.8-point victory over incumbent Mary Bono Mach would have vanished. Ruiz is still among the incumbents most vulnerable to losing reelection.</p>\
                  <p>CA52, another key battleground in the upcoming election, would’ve also been lost to a Republican. In this district, Democrat Scott Peters won by a mere 6,992 votes over Brian Bilbray. Without his 11% Hispanic voters, Peters would’ve lost by some 3 points.</p>\
                  <p>Other big losers in the scenario include Pete Gallego (TX23) and Joe Garcia (FL26), both Hispanics, both Democrats. With electorates close to 60% Hispanic, both representatives would be left with a pitiable 35% of votes absent those key Hispanic voters.</p>\
                  <p>Without Garcia, Gallego and Ruiz, then, only 26 Hispanics would’ve made it into the House of Representatives at all.</p>\
                  <p>One other district where an absence Hispanics would have been felt, despite their representing a mere 3% of the electorate, was NC07. The 0.2 margin of victory by which Mike McIntyre was reelected would be sorely missed.</p>\
                  <p>If though, in the 2012 election, all Hispanics over 18 years of age would’ve voted, party results would’ve stayed pretty much the same. This seems to confirm the reasoning behind the framing of the question as to the relevance of the Hispanic vote – not in terms of how Hispanics will change the future – but in how they already do.</p>\
                "
      },
      {"titulo":"What could happen in 2014?", "descripcion":"Electoral predictions for the 2014 House of Representatives mid-term elections generated by John Sides for The <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014?hpid=z1#cal…' target='_blank'>Washington Post</a>", "sub":[{"titulo":"Predictions","descripcion":"Electoral predictions for the 2014 House of Representatives mid-term elections generated by John Sides for The <a href='http://www.washingtonpost.com/wp-dre/politics/election-lab-2014?hpid=z1#cal…' target='_blank'>Washington Post</a>"},{"titulo":"If all Hispanics vote","descripcion":"Predictions of how the 2014 election results would look if all Hispanics over 18 years of age, regardless of citizenship status, voted"},{"titulo":"If no Hispanics vote","descripcion":"Predictions of how the 2014 election results would look if no Hispanics voted"}],
        "texto": "  <p class='title_text'>Projections for this year</p>\
                    <p>We already know that Hispanics made a difference for the Democratic Party in 2012. Should we expect the same in 2014?</p>\
                    <p>This time, we’re simulating the probability that a candidate of either the Republican or Democratic Party will win the election. Hispanics, once more, do make a difference in determining who is most probable to win their district. They even seem to be far stronger in 2014, but this is due to the fact that we are looking at probabilities and not at votes.</p>\
                    <p>If all Hispanics voted in the 2014 election, Democrats would be likely (between 50% and 75% likely) to win 9 districts that Republicans would win otherwise CA10, CA42, CA48, FL16, GA07, GA10, NJ07, VA10 and TX24.</p>\
                    <p>More surprising, though, is that democrats, with no Hispanic votes in November, would face defeat in 32 districts, 17 of them with a probability higher than 75%.</p>\
                    <p>Among those 17, sure losses are 4 Hispanic representatives seeking reelection: Ruben Hinojosa (TX15) facing challenger Eddie Zamora; Pete Gallego (TX23) up against Will Hurd; Filemon Vela (TX34), facing Larry Smith; and Luis Gutierrez (IL04) who will run against Hector Concepcion.</p>\
                    <p>Among the 15 districts where Democrats have a lesser probability of losing are those represented by Jim Costa (CA16), Raul Ruiz (CA36), Joe García (FL26) and Juan Vargas (CA51).</p>\
                    <p>Without these 32 districts, Democrats would hold onto but 159 of 435 seats in the House of Representatives.</p>\
                  "
      }
  ];
  $scope.seleccionada = "";
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
  $scope.modal = false;


  /*if (lang=="eng"){
    $scope.menu = [{"titulo":"Hispanic Force","descripcion":"Total hispanic population over 18 years of age and with citizenship status and therefore can vote"},{"titulo":"Hispanic Force (%)","descripcion":"Hispanic population over 18 years of age and with citizenship status as a percentage of the total population over 18 years of age with US citizenship"},{"titulo":"Hispanic Power","descripcion":"Indicates if the district representative was of hispanic origin in 2012"},{"titulo":"Battleground Districts","descripcion":"Indicates if the district is competed between the major parties. This means that both parties have a probability close to 50% of winning the election.(Source: http://cookpolitical.com/house/charts/scatterplot)"},{"titulo":"What happened in 2012?","descripcion":"House of Representatives election results 2012"},{"titulo":"House of Representatives election results 2012","descripcion":"Shows how the 2012 House of Representatives election results would've turned out if no hispanics would've voted"},{"titulo":"What would've happened in 2012 if all hispanics had voted?","descripcion":"Shows how the 2012 House of Representatives election results would've turned out if all hispanics would've voted"}];
    $scope.seleccionada= {"titulo":"Hispanic Force","descripcion":"Total hispanic population over 18 years of age and with citizenship status and therefore can vote"};
  }*/

  $scope.getOptClass = function(){
    if ($scope.seleccionada != ""){
      if ($scope.seleccionada.titulo == "Battleground Districts"){
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
      if (opt.titulo=="What could happen in 2014?"){
        d3.select(".estatica").style({"display":"block"});
        //d3.select(".nota_grafica").style({"display":"block"});
      }else{
        d3.select(".estatica").style({"display":"none"});
        //d3.select(".nota_grafica").style({"display":"none"});
      }
      if (opt.titulo=="What could’ve happened in 2012?"){
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
      return (opt == $scope.opt_activa | ($scope.opt_activa == $scope.seleccionada.titulo & (opt =='Total' || opt == 'Predicciones' || opt == 'Resultados de la elección' || opt == 'Predictions' || opt == 'Election results')));
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
      /*if ((parametro == "Hispanic force") || (parametro == "Total")){        
        $scope.rects.attr("fill", function(d){        
          color.domain([1,2,3,4,5]);       
          color.range(["#e0e0e0","#a2d8e8","#819bc8","#277CCC","#053061"]);
          d3.select(".rango2").html("<div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>0-12,000</span></div><div><span style='background-color:#a2d8e8' class='recuadro'></span><span class='texto'>12,001-21,800</span></div><div><span style='background-color:#819bc8' class='recuadro'></span><span class='texto'>21,801-42,500</span></div><div><span style='background-color:#277CCC' class='recuadro'></span><span class='texto'>42,501-80,000</span></div><div><span style='background-color:#053061' class='recuadro'></span><span class='texto'>80,001 ó más</span></div>");          
        return color(+d.hisp_totvot_quint);
        })
      }else */
      if (parametro == "Hispanic force"){
        $scope.rects.attr("fill", function(d){        
          color.domain([1,2,3,4,5]);       
          color.range(["#e5f7c9","#98c57b","#8baa3f","#548a36","#064708"]);
          d3.select(".rango2").html("<div><span style='background-color:#e5f7c9' class='recuadro'></span><span class='texto'>0 to 2.16%</span></div><div><span style='background-color:#98c57b' class='recuadro'></span><span class='texto'>2.17% to 4.2%</span></div><div><span style='background-color:#8baa3f' class='recuadro'></span><span class='texto'>4.3% to 8.6%</span></div><div><span style='background-color:#548a36' class='recuadro'></span><span class='texto'>8.7% to 16.7%</span></div><div><span style='background-color:#064708' class='recuadro'></span><span class='texto'>16.8% or more</span></div>");          
        return color(+d.totvot_quint);

        })
      }else if (parametro == "Hispanic power"){
        $scope.rects.attr("fill", function(d){        
          /*color.domain([0,1,2,3,4,5]);       
          color.range(["#e0e0e0","#287ECB","#e0e0e0","#e0e0e0","#e0e0e0","#e0e0e0"]);*/
          d3.select(".rango2").html("<div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Democratic Hispanic Representative</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republican Hispanic Representative</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>Non-Hispanic Representative</span></div>");         
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
      }else if (parametro == "Battleground Districts"){
        $scope.rects.attr("fill", function(d){        
          color.domain([0,1,2,3,4,5]);       
          color.range(["#98c57b","#064708","#98c57b","#98c57b","#98c57b","#98c57b"]);
          d3.select(".rango2").html("<div><span style='background-color:#064708' class='recuadro'></span><span class='texto'>Battleground Districts</span></div><div><span style='background-color:#98c57b' class='recuadro'></span><span class='texto'>Not Battleground Districts</span></div>");
          return color(d.competido);

        })
      }else if ((parametro == "What could happen in 2014?") || (parametro == "Predictions")){
        $scope.rects.attr("fill", function(d){
          color.domain([0,1]);       
          color.range(["#e63e3b","#287ECB"]);
        d3.select(".rango2").html("<div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Democrat</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republican</span></div>");        
        return color(d.dem_14);
        })
      }else if (parametro == "If all Hispanics vote"){
        $scope.rects.attr("fill", function(d){          
          d3.select(".rango2").html("<div><span style='background-color:#053061' class='recuadro'></span><span class='texto'>Democrats lost and now win</span></div><div><span style='background-color:#819bc8' class='recuadro'></span><span class='texto'>Democrats lost and may now win</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Democrats won and still do</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republicans won and still do</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>No data</span></div>");                    
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
      }else if (parametro == "If no Hispanics vote"){
        $scope.rects.attr("fill", function(d){                    
          d3.select(".rango2").html("<div><span style='background-color:#821f20' class='recuadro'></span><span class='texto'>Democrats won and now lose</span></div><div><span style='background-color:#f48794' class='recuadro'></span><span class='texto'>Democrats won and may now lose</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Democrats lost and still do</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Democrats won and still do</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>No data</span></div>");          
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
      }else if ((parametro == "What could’ve happened in 2012?") || (parametro == "Election results")){
        $scope.rects.attr("fill", function(d){
          color.domain(["R","D"]);       
          color.range(["#e63e3b","#287ECB"]);
          d3.select(".rango2").html("<div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Democrat</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republican</span></div>");        
          return color(d.party2);
        })            
      }else if (parametro == "If all Hispanics would've voted"){
        $scope.rects.attr("fill", function(d){          
          d3.select(".rango2").html("<div><span style='background-color:#053061' class='recuadro'></span><span class='texto'>Democrats lost and now win</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Democrats won and still do</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Republicans won and still do</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>No data</span></div>");          
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
      }else if (parametro == "If no Hispanics would've voted"){
        $scope.rects.attr("fill", function(d){                    
          d3.select(".rango2").html("<div><span style='background-color:#821f20' class='recuadro'></span><span class='texto'>Democrats won and now lose</span></div><div><span style='background-color:#e63e3b' class='recuadro'></span><span class='texto'>Democrats lost and still do</span></div><div><span style='background-color:#287ECB' class='recuadro'></span><span class='texto'>Democrats won and still do</span></div><div><span style='background-color:#e0e0e0' class='recuadro'></span><span class='texto'>No data</span></div>");          
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
      /*if ((parametro == "With all Hispanics") || (parametro == "With no Hispanics")){
        d3.select("#referencia").style({"display":"block"});
      }else{
        d3.select("#referencia").style({"display":"none"});
      }*/
    }
    $scope.init();
    $scope.colorear("Hispanic force");
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
        if (scope.seleccionada.titulo=="Hispanic force" || (scope.seleccionada.titulo=="Hispanic power" & d.partyRH=="")){
          html = '<div id="titulo_tooltip" class="titulo_tooltip">'+d.state+'<span style="color:#000;">'+d.cd+'</span></div> \
          <div class="row"><div class="c1">District</div><div class="c2">'+d.district+'</div></div> \
          <h3>HISPANIC VOTERS</h3> \
          <div class="row"><div class="c1">Total</div><div class="c2">'+agregarComas(+d.hisp_totvoters)+'</div></div> \
          <div class="row"><div class="c1">%</div><div class="c2">'+(+d.hisp_pervot).toFixed(2)+'%</div></div> \
          <div class="zoomout">Back to map</div> \
        ';
        }else if (scope.seleccionada.titulo=="Hispanic power"){
          html = '<div id="titulo_tooltip" class="titulo_tooltip">'+d.state+'<span style="color:#000;">'+d.cd+'</span></div> \
          <div class="row"><div class="c1">District</div><div class="c2">'+d.district+'</div></div> \
          <div class="row"><div class="c1 negro">Rep: '+d.name+'</div><div class="c2"><div class="cpartido p'+d.partyRH+'"></div></div></div> \
          <div class="row"><div class="c1">Year of entry</div><div class="c2">'+d.yearinRH+'</div></div> \
          <div class="row"><div class="c1">Term (s)</div><div class="c2">'+d.termsRH+'</div></div> \
          <h3>HISPANIC VOTERS</h3> \
          <div class="row"><div class="c1">Total</div><div class="c2">'+agregarComas(+d.hisp_totvoters)+'</div></div> \
          <div class="row"><div class="c1">%</div><div class="c2">'+(+d.hisp_pervot).toFixed(2)+'%</div></div> \
          <div class="zoomout">Back to map</div> \
        ';
        }else if (scope.seleccionada.titulo=="What could’ve happened in 2012?"){
          var l = "";
          if (scope.opt_activa=="If all Hispanics would've voted" && (+d.cambio_Dmas != 1) && (+d.DwinMas != 1) && (+d.RwinMas != 1)){
            l = "<p>No data means the model is not able to predict the results for the hypothetical scenarios</p>";
          }
          if (scope.opt_activa=="If no Hispanics would've voted" && (+d.cambio_D0 != 1) && (+d.Dlose0 != 1) && (+d.Dwin0 !=1 )){
            l = "<p>No data means the model is not able to predict the results for the hypothetical scenarios</p>";
          }
          html = '<div id="titulo_tooltip" class="titulo_tooltip">'+d.state+'<span style="color:#000;">'+d.cd+'</span></div> \
          <div class="row"><div class="c1">District</div><div class="c2">'+d.district+'</div></div> \
          <div class="row"><div class="c1 negro">Rep: '+d.name+'</div><div class="c2"><div class="cpartido p'+d.party2+'"></div></div></div> \
          <div class="barchart"> \
              <h4>Result</h4> \
              <div class="grafibarra">\
                <div class="dosc"><div class="cd"><div class="barra" style="width:'+getAncho(d.votes_D)+'%"></div></div><div class="cr"><div class="barra" style="width:'+getAncho(d.votes_R)+'%"></div></div></div>\
                <div class="dosc"><div class="cd"><div style="width:'+getAncho(d.votes_D)+'%">'+getPorcentaje(d.votes_D)+'</div></div><div class="cr"><div style="width:'+getAncho(d.votes_R)+'%">'+getPorcentaje(d.votes_R)+'</div></div></div>\
                <h5>All Hispanics</h5> \
                <div class="dosc"><div class="cd"><div class="barra" style="width:'+getAncho(d.Dtodoshisp_mean)+'%"></div></div><div class="cr"><div class="barra" style="width:'+getAncho(d.Rtodoshisp)+'%"></div></div></div>\
                <div class="dosc"><div class="cd"><div style="width:'+getAncho(d.Dtodoshisp_mean)+'%">'+getPorcentaje(d.Dtodoshisp_mean)+'</div></div><div class="cr"><div style="width:'+getAncho(d.Rtodoshisp)+'%">'+getPorcentaje(d.Rtodoshisp)+'</div></div></div>\
                <h5>None Hispanics</h5> \
                <div class="dosc"><div class="cd"><div class="barra" style="width:'+getAncho(d.Dnohisp_mean)+'%"></div></div><div class="cr"><div class="barra" style="width:'+getAncho(d.Rnohisp)+'%"></div></div></div>\
                <div class="dosc"><div class="cd"><div style="width:'+getAncho(d.Dnohisp_mean)+'%">'+getPorcentaje(d.Dnohisp_mean)+'</div></div><div class="cr"><div style="width:'+getAncho(d.Rnohisp)+'%">'+getPorcentaje(d.Rnohisp)+'</div></div></div>\
              </div>\
          </div> \
          <h3>HISPANIC VOTERS</h3> \
          <div class="row"><div class="c1">Total</div><div class="c2">'+agregarComas(+d.hisp_totvoters)+'</div></div> \
          <div class="row"><div class="c1">%</div><div class="c2">'+(+d.hisp_pervot).toFixed(2)+'%</div></div>'+l+' \
          <div class="zoomout">Back to map</div> \
        ';
        }else if (scope.seleccionada.titulo=="What could happen in 2014?"){          
          var l = "";
          if (scope.opt_activa=="If all Hispanics vote" && (+d.yesWin != 1) && (+d.maybeWin != 1) && (+d.WinWinTodos != 1) && (+d.residTodos != 1)){            
            l = "<p>Sin datos se refiere a que el modelo no alcanza a predecir los escenarios hipotéticos</p>";
          }
          if (scope.opt_activa=="If no Hispanics vote" && (+d.yesLose != 1) && (+d.maybeLose != 1) && (+d.LoseLoseNo != 1) && (+d.residNo != 1)){
            l = "<p>Sin datos se refiere a que el modelo no alcanza a predecir los escenarios hipotéticos</p>";
          }
          var extra="";
          var a1 = d.candidato1;
          if (a1 == "Elección pendiente"){
              a1 = "Pending Election";
          }
          if (a1 == "No hay candidato"){
              a1 = "No contesting candidate";
          }
          var a2 = d.candidato2;
          if (a2 == "Elección pendiente"){
              a2 = "Pending Election";
          }
          if (a2 == "No hay candidato"){
              a2 = "No contesting candidate";
          }
          if ((d.cincumbent!="") && (d.cincumbent!= null)){
            extra = '<div class="row"><div class="c1" style="font-weight:bold; color:#000;">Incumbent: '+d.cincumbent+'</div><div class="c2" style="border-bottom:0px;"><div class="cpartido p'+d.cincumbentpartyid+'"></div></div></div>';
            if ((d.candidato1 != "") && (d.candidato1 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Challenger: '+a1+'</div><div class="c2"><div class="cpartido p'+d.candidato1partyid+'"></div></div></div>';
            }
            if ((d.candidato2 != "") && (d.candidato2 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Challenger: '+a2+'</div><div class="c2"><div class="cpartido p'+d.candidato2partyid+'"></div></div></div>';
            }
          }else{
            if ((d.candidato1 != "") && (d.candidato1 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Candidate: '+a1+'</div><div class="c2"><div class="cpartido p'+d.candidato1partyid+'"></div></div></div>';
            }
            if ((d.candidato2 != "") && (d.candidato2 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Candidate: '+a2+'</div><div class="c2"><div class="cpartido p'+d.candidato2partyid+'"></div></div></div>';
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
          <div class="row"><div class="c1">District</div><div class="c2">'+d.district+'</div></div>'+extra+' <br/><br/>\
          <div class="row"><div class="c1">Prediction</div><div class="c2"><div class="cpartido p'+general+'"></div></div></div> \
          <div class="row"><div class="c1">All Hispanics</div><div class="c2"><div class="cpartido p'+todos+'"></div></div></div> \
          <div class="row"><div class="c1">None Hispanics</div><div class="c2"><div class="cpartido p'+sin_hispanos+'"></div></div></div> \
          <h3>HISPANIC VOTERS</h3> \
          <div class="row"><div class="c1">Total</div><div class="c2">'+agregarComas(+d.hisp_totvoters)+'</div></div> \
          <div class="row"><div class="c1">%</div><div class="c2">'+(+d.hisp_pervot).toFixed(2)+'%</div></div> '+l+'\
          <div class="zoomout">Back to map</div> \
          ';
        }else if (scope.seleccionada.titulo=="Battleground Districts"){  
          var extra="";
          var a1 = d.candidato1;
          if (a1 == "Elección pendiente"){
              a1 = "Pending Election";
          }
          if (a1 == "No hay candidato"){
              a1 = "No contesting candidate";
          }
          var a2 = d.candidato2;
          if (a2 == "Elección pendiente"){
              a2 = "Pending Election";
          }
          if (a2 == "No hay candidato"){
              a2 = "No contesting candidate";
          }
          if ((d.cincumbent!="") && (d.cincumbent != null)){            
            extra = '<div class="row"><div class="c1" style="font-weight:bold; color:#000;">Incumbent: '+d.cincumbent+'</div><div class="c2" style="border-bottom:0px;"><div class="cpartido p'+d.cincumbentpartyid+'"></div></div></div>';
            if ((d.candidato1 != "") && (d.candidato1 != null)){              
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Challenger: '+a1+'</div><div class="c2"><div class="cpartido p'+d.candidato1partyid+'"></div></div></div>';
            }
            if ((d.candidato2 != "") && (d.candidato2 != null)){              
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Challenger: '+a2+'</div><div class="c2"><div class="cpartido p'+d.candidato2partyid+'"></div></div></div>';
            }
          }else{
            if ((d.candidato1 != "") && (d.candidato1 != null) ){              
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Candidate: '+a1+'</div><div class="c2"><div class="cpartido p'+d.candidato1partyid+'"></div></div></div>';
            }
            if ((d.candidato2 != "") && (d.candidato2 != null)){
              extra = extra+'<div class="row"><div class="c1" style="font-weight:bold">Candidate: '+a2+'</div><div class="c2"><div class="cpartido p'+d.candidato2partyid+'"></div></div></div>';
            }
          }


          html = '<div id="titulo_tooltip" class="titulo_tooltip">'+d.state+'<span style="color:#000;">'+d.cd+'</span></div> \
          <div class="row"><div class="c1">District</div><div class="c2">'+d.district+'</div></div>'+extra+'\
          <h3>HISPANIC VOTERS</h3> \
          <div class="row"><div class="c1">Total</div><div class="c2">'+agregarComas(+d.hisp_totvoters)+'</div></div> \
          <div class="row"><div class="c1">%</div><div class="c2">'+(+d.hisp_pervot).toFixed(2)+'%</div></div> \
          <div class="zoomout">Back to map</div> \
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