var nytg = nytg || {};
  nytg.budget_array_data = [
  {"name":"Pay transportations costs associated with the rise in apprehensions of unaccompanied","positions":{},"cantidad":116000000,"total":1104000000,"id_depto":0},
  {"name":"Provide for immigration and customs enforcement efforts","positions":{},"cantidad":109000000,"total":1104000000,"id_depto":0},
  {"name":"Pay for the detention and removal of apprehended undocumented adults traveling with children","positions":{},"cantidad":879000000,"total":1104000000,"id_depto":0},
  
  {"name":"Pay for operational costs of responding to the significant rise in apprehensions of unaccompanied children","positions":{},"cantidad":364000000,"total":432400000,"id_depto":1},
  {"name":"Expand CBP role in Border Enforcement Security Task Force programs","positions":{},"cantidad":29000000,"total":432400000,"id_depto":1},
  {"name":"Increase air surveillance capabilities","positions":{},"cantidad":39400000,"total":432400000,"id_depto":1},
  
  {"name":"Hire approximately 40 additional immigration judge teams","positions":{},"cantidad":45400000,"total":64000000,"id_depto":2},
  {"name":"Expand the legal orientation program","positions":{},"cantidad":42500000,"total":64000000,"id_depto":2},
  {"name":"Provide direct legal representation services to children in immigration proceedings","positions":{},"cantidad":15000000,"total":64000000,"id_depto":2},
  {"name":"Hire additional immigration litigation attorneys to support Federal agencies involved","positions":{},"cantidad":1100000,"total":64000000,"id_depto":2},

  {"name":"Support efforts to repatriate and reintegrate migrants to Central America, help the governments control their borders and address the underlying root causes driving migration","positions":{},"cantidad":295000000,"total":300000000,"id_depto":3},
  {"name":"Media campaigns in Mexico, Guatemala, El salvador and Honduras, targeting potential migrants and their families","positions":{},"cantidad":5000000,"total":300000000,"id_depto":3},

  {"name":"Provide the appropriate care for unaccompanied children","positions":{},"cantidad":1800000000,"total":1800000000,"id_depto":4},
  ];    
  $paises = [];  
  

var nytg = nytg || {};

nytg.Chart = function(data){
  
  return {
    $j : jQuery,
    //defaults
    width           : 775,
    height          : 550,
    groupPadding    : 10,
    totalValue      : 3700000000,
    deficitValue    : 901000000,
    // CONST
    MANDATORY       : "Mandatory",
    DISCRETIONARY   : "Discretionary",
    NET_INTEREST    : "Net interest",
    
    //will be calculated later
    boundingRadius  : null,
    maxRadius       : null,
    centerX         : null,
    centerY         : null,
    scatterPlotY    : null,
        
    //d3 settings
    defaultGravity  : 0.1,
    defaultCharge   : function(d){
                        if (d.value < 0) {
                          return 0
                        } else {
                          return -Math.pow(d.radius,2.0)/8 
                        };
                      },
    links           : [],
    nodes           : [],
    positiveNodes   : [],
    force           : {},
    svg             : {},
    circle          : {},
    gravity         : null,
    charge          : null,
    changeTickValues: [-0.25, -0.15, -0.05, 0.05, 0.15, 0.25],
    categorizeChange: function(c){            
                        if (isNaN(c)) { return 0;
                        } else if ( c < 2) { return -4;
                        } else if ( c < 3){ return -3;
                        } else if ( c < 4){ return -2;
                        } else if ( c < 5){ return -1;
                        } else if ( c < 6){ return 0;
                        } else if ( c < 7){ return 1;
            } else if ( c < 8){ return 2;
            } else if ( c <= 17){ return 3;
                        } else { return 4; }
                      },
    fillColor       : d3.scale.ordinal().domain([-4,-3,-2,-1,0,1,2,3,4]).range(["#006DA4", "#2A9289","#7CA843","#BEBD37","#E8CD29", "#E2AC2C","#DB7D0F","#D44A17","#D80F16"]),
    strokeColor     : d3.scale.ordinal().domain([-4,-3,-2,-1,0,1,2,3,4]).range(["#006DA4", "#2A9289","#7CA843","#BEBD37","#E8CD29", "#E2AC2C","#DB7D0F","#D44A17","#D80F16"]),
    getFillColor    : null,
    getStrokeColor  : null,
    pFormat         : d3.format("+.1%"),
    pctFormat       : function(){return false},
    tickChangeFormat: d3.format("+%"),
    simpleFormat    : d3.format(","),
    simpleDecimal   : d3.format(",.2f"),

    bigFormat       : function(n){return nytg.formatNumber(n*1000)},
    nameFormat      : function(n){return n},
    discretionFormat: function(d){
                        if (d == 'Discretionary' || d == 'Mandatory') {
                          return d + " spending"
                        } else {return d}
                      },  
    
    rScale          : d3.scale.pow().exponent(0).domain([0,1000000000]).range([1,90]),
    radiusScale     : null,
    changeScale     : d3.scale.linear().domain([0,0.28]).range([620,180]).clamp(true),
    sizeScale       : d3.scale.linear().domain([0,110]).range([0,1]),
    groupScale      : {},
    
    //data settings
    currentYearDataColumn   : 'cantidad',    
    data                    : data,
    categoryPositionLookup  : {},
    categoriesList          : [],
    
    // 
    // 
    // 
    init: function() {
      var that = this;
      
      this.scatterPlotY = this.changeScale(0);
      
      this.pctFormat = function(p){
        if (p === Infinity ||p === -Infinity) {
          return "N.A."
        } else {
          return that.pFormat(p)
        }
        
      }
      
      this.radiusScale = function(n){ return that.rScale(Math.abs(n)); };
      this.getStrokeColor = function(d){
        // if (d.isNegative) {
        //   return "#333"
        // }
        return that.strokeColor(d.changeCategory);
      };
      this.getFillColor = function(d){
    
        if (d.isNegative) {
          return "#fff"
        }
        return that.fillColor(d.changeCategory);
    
      };
      
      this.boundingRadius = this.radiusScale(this.totalValue);
      this.centerX = this.width / 2;
      this.centerY = 300;
      
      
      //calculates positions of the category clumps
      //it is probably overly complicated
      var columns = [4, 7, 9, 9]
          rowPadding = [150, 100, 90, 80, 70],
          rowPosition = [220, 450, 600, 720, 817],
          rowOffsets = [130, 80, 60, 45, 48]
          currentX = 0,
          currentY = 0;
      
    
      //
      this.groupScale = d3.scale.ordinal().domain(this.categoriesList).rangePoints([0,1]);
      
      // Builds the nodes data array from the original data
      for (var i=0; i < this.data.length; i++) {
        var n = this.data[i];
        var out = {
          sid: n['id'],
          radius: getRadius(n[this.currentYearDataColumn]),                    
          changeCategory: this.categorizeChange(n['cantidad']),
          value: n[this.currentYearDataColumn],
          name: n['name'],
          discretion: n['discretion'],
          isNegative: (n[this.currentYearDataColumn] < 0),
          positions: n.positions,
          x:Math.random() * 1000,
          y:Math.random() * 1000,
          id_depto: n['id_depto'],
          total: n['total']
        }
        if (n.positions.total) {
          out.x = n.positions.total.x + (n.positions.total.x - (that.width / 2)) * 0.5;
          out.y = n.positions.total.y + (n.positions.total.y - (150)) * 0.5;
        };
        /*if ((n[this.currentYearDataColumn] > 0)) {          
          out.changeCategory = 0;
        };*/
        this.nodes.push(out)
      };
      
      this.nodes.sort(function(a, b){  
        return Math.abs(b.value) - Math.abs(a.value);  
      });
      
      for (var i=0; i < this.nodes.length; i++) {
        if(!this.nodes[i].isNegative ){
          this.positiveNodes.push(this.nodes[i])
        }
      };
      jQuery("#nytg-chartCanvas").text("");
      this.svg = d3.select("#nytg-chartCanvas").append("svg:svg")
        .attr("width", this.width)
         .append("g")
        .attr("class","grupo")
        .attr("transform","translate(0,0)");

      // This is the every circle
      this.circle = this.svg.selectAll("circle")
          .data(this.nodes, function(d) { return d.sid; });
          
      this.circle.enter().append("svg:circle")
        .attr("r", function(d) { return 0; } )
        .style("fill", function(d) { var colores = ["FFE183","FCC515","EF990D","E96B19","C70C28"]; return colores[d.id_depto]; })
        .style("stroke-width", 1)
        .attr('id',function(d){ return 'nytg-circle'+d.sid })
        .style("stroke", function(d){ var colores = ["FFC743","F99802","E05C01","D52D02","9B0106"]; return colores[d.id_depto]; })
        .on("mouseover",function(d,i) { 
          var el = d3.select(this)
          var xpos = Number(el.attr('cx'))-20;
          var ypos = (el.attr('cy') + d.radius + 50)
          xpos = d3.event.pageX;
          ypos = d3.event.pageY;
          if ( xpos > 775/2 ) xpos = d3.event.pageX - 300;
          el.style("stroke","#000").style("stroke-width",3);
          d3.select("#nytg-tooltip").style('margin-top',ypos+"px").style('margin-left',xpos+"px").style('display','block')
            .classed('nytg-plus', (d.changeCategory > 0))
            .classed('nytg-minus', (d.changeCategory < 0));
      d3.select("#nytg-tooltip .nytg-anio").html($j("#anio").text())          
          d3.select("#nytg-tooltip .nytg-name").html(that.nameFormat(d.name))          
          d3.select("#nytg-tooltip .nytg-value").html(agregarComas(d.value))
          d3.select("#nytg-tooltip .nytg-total").html(agregarComas(d.total))
        })
        .on("mouseout",function(d,i) { 
          d3.select(this)
          .style("stroke-width",1)
          .style("stroke", function(d){ var colores = ["FFC743","F99802","E05C01","D52D02","9B0106"]; return colores[d.id_depto]; })
          d3.select("#nytg-tooltip").style('display','none')
      });
      
            
      this.circle.transition().duration(2000).attr("r", function(d){return d.radius})
      
    },
    
    
    
    
    // 
    // 
    // 
    getCirclePositions: function(){
      var that = this
      var circlePositions = {};
      this.circle.each(function(d){
        
        circlePositions[d.sid] = {
          x:Math.round(d.x),
          y:Math.round(d.y)
        }
        
        
      })
      return JSON.stringify(circlePositions)
    },
    
    
    
    // 
    // 
    // 
    start: function() {
      var that = this;

      this.force = d3.layout.force()
        .nodes(this.nodes)
        .size([this.width, this.height])
        
      // this.circle.call(this.force.drag)
      
    },

    totalLayout: function() {
      var that = this;
      this.force
        .gravity(-0.01)
        .charge(that.defaultCharge)
        .friction(0.9)
        .on("tick", function(e){
          that.circle
            .each(that.totalSort(e.alpha))
            .each(that.buoyancy(e.alpha))
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
        })
        .start();    
      
    },
  
    
    // ----------------------------------------------------------------------------------------
    // FORCES
    // ----------------------------------------------------------------------------------------

    totalSort: function(alpha) {
      var that = this;
      return function(d){
        var targetY = that.centerY;
        var targetX = that.width / 2;
        
        
        if (d.isNegative) {
          if (d.changeCategory > 0) {
            d.x = - 200
          }
          else {
            d.x =  1100
          }
        }
        
        // if (d.positions.total) {
        //   targetX = d.positions.total.x
        //   targetY = d.positions.total.y
        // };
        
        
        
        // 
        d.y = d.y + (targetY - d.y) * (that.defaultGravity + 0.02) * alpha
        d.x = d.x + (targetX - d.x) * (that.defaultGravity + 0.02) * alpha
        
      };
    },
    
    // 
    // 
    // 
    buoyancy: function(alpha) {
      var that = this;
      return function(d){
          // d.y -= 1000 * alpha * alpha * alpha * d.changeCategory
          
          // if (d.changeCategory >= 0) {
          //   d.y -= 1000 * alpha * alpha * alpha
          // } else {
          //   d.y += 1000 * alpha * alpha * alpha
          // }
          
          
          var targetY = that.centerY - (d.changeCategory / 3) * that.boundingRadius
          d.y = d.y + (targetY - d.y) * (that.defaultGravity) * alpha * alpha * alpha * 100
      };
    }        
  }
};



/********************************
 ** FILE: base.js
 ********************************/

var $j = jQuery;


  
nytg.ready = function() {
  var that = this;  
  this.highlightedItems = [];
  var currentOverlay = undefined;  
  nytg.c = new nytg.Chart(nytg.budget_array_data);  
  nytg.c.init();
    nytg.c.start();
  nytg.c.totalLayout();
    this.currentOverlay = $j("#nytg-totalOverlay");
    this.currentOverlay.delay(300).fadeIn(100);     
}

function getRadius(r){
 var escala = d3.scale.linear().domain([0,880000000]).range([1,100]);
   
  if ( r > 295000000 ) var escala = d3.scale.linear().domain([0,880000000]).range([1,80]);
  else var escala = d3.scale.linear().domain([0,116000000]).range([15,50]);
  
  radius = escala(r);



   //if ( radius < 10 ) return 10; 

   return radius;
}


if (!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect){
  $j(document).ready($j.proxy(nytg.ready, this));
} else {
  $j("#nytg-chartFrame").hide();
  // $j("#nytg-error").show();
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