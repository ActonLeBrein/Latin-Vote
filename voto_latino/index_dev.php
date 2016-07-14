<?php include('data.php') ?>
<!DOCTYPE HTML>
<html lang="en" ng-app="uniApp">
<head>
    <meta charset='utf-8'>
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Voto latino</title>	
	<link rel="stylesheet" type="text/css" href="../fonts/stylesheet.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css" />

	<script src="../sources/jquery.min1.11.1.js"></script>
	<script src="../sources/d3.v3.min.js"></script>
	<script src="../sources/angular.min.js"></script>

	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css">
	<script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>  

	<script>
		var json = <?php echo $json; ?>;		
		var ancho = $(window).width();
	</script>

	<script src="js/app.js"></script>
	<script src="js/controllers2.js"></script>
	
</head>
<body ng-controller="defaultCtrl">
	<div class="content">
		<div class="header">
			<div>
				<h1>EL VOTO LATINO</h1>
				<h2>inclinando la balanza electoral</h2>
			</div>
			<div class="balazo">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
		</div>
		<div class="menu">
			<ul class="web">
				<li id="opt-{{$index}}" ng-repeat="opt in menu" ng-click="update(opt);colorear($index);" ng-class="{activo:seleccionado(opt)}">{{opt.titulo}}</li>
			</ul>
			<select ng-init="seleccionada = menu[0]" class="movil" id="select_menu" ng-model="seleccionada"
				data-ng-options="opt as opt.titulo for opt in menu" 
				ng-change="update_con_select();">                
			</select>
			<div class="descripcion" ng-class="getOptClass();">
				{{seleccionada.descripcion}}
			</div>
		</div>		
		<div id="tooltip" style="display:none">
			<div id="titulo_tooltip" class="titulo_tooltip">Distrito 5, California <span>CA5</span></div>
			Representante: <span id="nombre">Mike Thompson</span>
			<div id="chart_t">
				<h3>2012</h3>
				<div class="barras" id="b_2012"><div class="democratas" style="width:70%">70%</div><div class="republicanos" style="width:30%">30%</div></div>
				<h3>2012 Todos</h3>
				<div class="barras" id="b_2012_todos"><div class="democratas" style="width:70%">70%</div><div class="republicanos" style="width:30%">30%</div></div>
				<h3>2012 Ninguno</h3>
				<div class="barras" id="b_2012_ninguno"><div class="democratas" style="width:70%">70%</div><div class="republicanos" style="width:30%">30%</div></div>
			</div>
			<div id="datos_t">
				<div>
					Hispanos que pueden votar:
					<div id="hispanos_votos">10,000</div>
				</div>
				<div>
					Hispanos como % total que pueden votar:
					<div id="hispanos_votos_porc">10%</div>
				</div>
				<div class="iconos"></div>
			</div>
		</div>
		<div id="zoomout" style="visibility:hidden">Alejar</div>
		<svg  id="univision">
		  	<g id="principal">
				<g id="representantes"></g>
				<g id="estados">
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M88.536,215.722h-78.34v198.652H49.98v40.006h38.509v-20h19.896v-20.006v-17.697V255.972H88.536V215.722z"/>
						<text transform="matrix(1 0 0 1 50.6641 338.7168)" font-family="'OpenSans-Bold'" font-size="13">CA</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M10.196,195.717h98.192v18.622H10.196V195.717z"/>
						<text transform="matrix(1 0 0 1 49.8281 208.6934)" font-family="'OpenSans-Bold'" font-size="13">OR</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M10.196,155.711h98.192v38.622H10.196V155.711z"/>
						<text transform="matrix(1 0 0 1 48.5234 178.6875)" font-family="'OpenSans-Bold'" font-size="13">WA</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M129.549,195.717h18.621v18.622h-18.621V195.717z"/>
						<text transform="matrix(1 0 0 1 131.7646 209.3926)" font-family="'OpenSans-Bold'" font-size="10">MT</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M149.442,195.717h18.621v18.622h-18.621V195.717z"/>					
							<text transform="matrix(1 0 0 1 151.3799 209.3926)" font-family="'OpenSans-Bold'" font-size="10">ND</text>
						
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M149.442,215.722h18.621v18.62h-18.621V215.722z"/>					
							<text transform="matrix(1 0 0 1 152.6455 228.7334)" font-family="'OpenSans-Bold'" font-size="10">SD</text>
						
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M129.549,215.722h18.621v18.62h-18.621V215.722z"/>					
							<text transform="matrix(1 0 0 1 131.1045 228.7334)" font-family="'OpenSans-Bold'" font-size="10">WY</text>
						
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M89.765,215.722h38.514v18.62H89.765V215.722z"/>
						<text transform="matrix(1 0 0 1 102.3926 230.2236)" font-family="'OpenSans-Bold'" font-size="13">ID</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M89.765,235.725h78.298v18.617H89.765V235.725z"/>
						<text transform="matrix(1 0 0 1 119.2461 249.2871)" font-family="'OpenSans-Bold'" font-size="13">NV</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M109.658,255.729h38.512v38.622h-38.512V255.729z"/>
						<text transform="matrix(1 0 0 1 120.2368 278.7061)" font-family="'OpenSans-Bold'" font-size="13">UT</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M327.198,315.742H189.227v58.625h19.892v20.003h19.89v20.004h19.896v40.006h38.509v-40.006h19.893V394.37h19.891v-20.003h19.893
							v-38.622h-19.893V315.742z"/>
						<text transform="matrix(1 0 0 1 260.0596 388.7266)" font-family="'OpenSans-Bold'" font-size="13">TX</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M169.336,295.735h18.614v58.625h-18.614V295.735z"/>
							<text transform="matrix(1 0 0 1 169.8638 327.8682)" font-family="'OpenSans-Bold'" font-size="10">NM</text>
						
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M109.658,295.735h58.405v58.625h-58.405V295.735z"/>
						<text transform="matrix(1 0 0 1 130.6118 328.7139)" font-family="'OpenSans-Bold'" font-size="13">AZ</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M268.793,235.725h78.298v38.623h-78.298V235.725z"/>
						<text transform="matrix(1 0 0 1 296.6401 258.7021)" font-family="'OpenSans-Bold'" font-size="13">MO</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M209.119,255.729h58.401v18.617h-58.401V255.729z"/>
						<text transform="matrix(1 0 0 1 229.3945 268.7041)" font-family="'OpenSans-Bold'" font-size="13">NE</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M207.847,275.732v-20.003h-58.405v38.622h51.846h6.559h19.888v-18.619H207.847z"/>
						<text transform="matrix(1 0 0 1 169.8638 278.7061)" font-family="'OpenSans-Bold'" font-size="13">CO</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M229.009,275.732h78.298v18.619h-78.298V275.732z"/>
						<text transform="matrix(1 0 0 1 259.3193 290.4258)" font-family="'OpenSans-Bold'" font-size="13">KS</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M189.227,295.735h98.187v18.619h-98.187V295.735z"/>
						<text transform="matrix(1 0 0 1 228.8311 308.7109)" font-family="'OpenSans-Bold'" font-size="13">OK</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M288.686,295.735v18.619h39.785v20.006h38.514v-20.006v-3.9v-14.719H288.686z"/>
						<text transform="matrix(1 0 0 1 339.3555 318.7139)" font-family="'OpenSans-Bold'" font-size="13">LA</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M308.58,275.732h78.291v18.619H308.58V275.732z"/>
						<text transform="matrix(1 0 0 1 339.5254 290.4258)" font-family="'OpenSans-Bold'" font-size="13">AR</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M486.334,195.717v-20.001h-78.292v38.623h69.849h8.443h19.895v-18.622H486.334z"/>
						<text transform="matrix(1 0 0 1 440.2578 199.3613)" font-family="'OpenSans-Bold'" font-size="13">IN</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M546.014,195.717v-60.009h-98.19v38.622h39.786v20.003h19.892v20.006h58.404v-18.622H546.014z"/>
						<text transform="matrix(1 0 0 1 501.5664 169.8906)" font-family="'OpenSans-Bold'" font-size="13">OH</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M348.365,95.699v38.622h59.677v40.009h38.515v-40.009v-10.717V95.699H348.365z"/>
						<text transform="matrix(1 0 0 1 419.6133 120.709)" font-family="'OpenSans-Bold'" font-size="13">MI</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M308.58,135.708v38.622h18.761v-20.005h40.914v20.005h38.513v-38.622H308.58z"/>
						<text transform="matrix(1 0 0 1 349.3027 149.8027)" font-family="'OpenSans-Bold'" font-size="13">WI</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M366.985,175.716v-1.386v-4.088v-14.531h-38.514v18.619h19.991v100.017h14.907h3.616h21.161v20.005h18.621v-20.005v-98.631H366.985
							z"/>
						<text transform="matrix(1 0 0 1 372.2598 230.2236)" font-family="'OpenSans-Bold'" font-size="13">IL</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M268.793,175.716h78.298v38.623h-78.298V175.716z"/>
						<text transform="matrix(1 0 0 1 296.5293 198.6934)" font-family="'OpenSans-Bold'" font-size="13">MN</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M268.793,215.722h78.298v18.62h-78.298V215.722z"/>
						<text transform="matrix(1 0 0 1 301.3057 228.6982)" font-family="'OpenSans-Bold'" font-size="13">IA</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M368.255,295.735h38.513v38.625h-38.513V295.735z"/>
						<text transform="matrix(1 0 0 1 377.8022 318.7139)" font-family="'OpenSans-Bold'" font-size="13">MS</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M585.795,355.75v-1.39v-6.72v-11.896H467.719v18.615h39.782v40.01h39.785v60.01h39.781v40.009h18.622V454.38v-16.758V355.75
							H585.795z"/>
						<text transform="matrix(1 0 0 1 568.5146 397.9688)" font-family="'OpenSans-Bold'" font-size="13">FL</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M625.581,295.735h-78.295v11.013v7.606v20.006h58.403v-20.006h19.892V295.735z"/>
						<text transform="matrix(1 0 0 1 570.748 319.1201)" font-family="'OpenSans-Bold'" font-size="13">SC</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M526.12,295.735v-20.003h-78.297v58.628h55.729h22.567h19.894v-38.625H526.12z"/>
						<text transform="matrix(1 0 0 1 481.0938 310.4551)" font-family="'OpenSans-Bold'" font-size="13">GA</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M446.557,275.732h-38.515v42.262v16.366v20h18.615v-20h19.899V275.732z"/>
						<text transform="matrix(1 0 0 1 419.2031 311.8359)" font-family="'OpenSans-Bold'" font-size="13">AL</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M486.334,255.729v-20.005h-78.292v38.622h66.903h11.389h19.895v-18.617H486.334z"/>
						<text transform="matrix(1 0 0 1 441.3057 258.9277)" font-family="'OpenSans-Bold'" font-size="13">TN</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M536.703,255.729h-9.309h-19.894v18.617h19.894v20.005h118.078v-38.622H536.703z"/>
						<text transform="matrix(1 0 0 1 573.3066 278.6494)" font-family="'OpenSans-Bold'" font-size="13">NC</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M587.067,215.722v20.003h-99.458v18.617h157.863v-5.059v-13.559v-20.003H587.067z"/>
						<text transform="matrix(1 0 0 1 607.5 240.9326)" font-family="'OpenSans-Bold'" font-size="13">VA</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M527.395,215.722h58.399v18.62h-58.399V215.722z"/>
						<text transform="matrix(1 0 0 1 546.0156 230.2236)" font-family="'OpenSans-Bold'" font-size="13">WV</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M408.042,215.722H526.12v18.62H408.042V215.722z"/>
						<text transform="matrix(1 0 0 1 457.8271 229.8389)" font-family="'OpenSans-Bold'" font-size="13">KY</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M587.067,195.717v18.622h59.68v20.003h19.892v20h18.617v-40.003v-9.31v-9.312H587.067z"/>					
							<text transform="matrix(1 0 0 1 658.6191 217.3877)" font-family="'OpenSans-Bold'" font-size="13">MD</text>					
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M567.178,195.717h18.617v18.622h-18.617V195.717z"/>
							<text transform="matrix(1 0 0 1 569.3906 208.29)" font-family="'OpenSans-Bold'" font-size="10">DC</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M605.689,135.708h-1.041h-57.362v58.625h57.362h1.041h59.677v-58.625H605.689z"/>
						<text transform="matrix(1 0 0 1 598.1162 169.8906)" font-family="'OpenSans-Bold'" font-size="13">PA</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M606.966,35.688v13.01v5.609v1.387h-59.68v13.2v5.416v60.012h118.08V74.31v-5.416v-13.2v-1.387v-5.609v-13.01H606.966z"/>
						<text transform="matrix(1 0 0 1 601.252 94.3154)" font-family="'OpenSans-Bold'" font-size="13">NY</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M705.149,135.708v-20.006h-38.511v20.006v3.602v35.021h98.188v-38.622H705.149z"/>
						<text transform="matrix(1 0 0 1 702.7686 158.4775)" font-family="'OpenSans-Bold'" font-size="13">NJ</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M725.044,115.702v-1.384v-10.783v-7.836h-58.405v18.619h39.783v1.384v18.619h18.622h19.892v-18.619H725.044z"/>
						<text transform="matrix(1 0 0 1 697.377 109.5674)" font-family="'OpenSans-Bold'" font-size="13">CT</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M746.205,95.699h18.622v38.622h-18.622V95.699z"/>
						<text transform="matrix(1 0 0 1 748.2998 120.709)" font-family="'OpenSans-Bold'" font-size="13">RI</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M764.827,75.696h-39.783V55.693h-58.405v38.622h44.37h14.035h1.272v20.003h18.619V94.315h19.892V75.696z"/>
						<text transform="matrix(1 0 0 1 685.2598 78.7949)" font-family="'OpenSans-Bold'" font-size="13">MA</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M666.639,35.688h18.617v18.619h-18.617V35.688z"/>	
							<text transform="matrix(1 0 0 1 669.9932 49.9951)" font-family="'OpenSans-Bold'" font-size="10">VT</text>					
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M686.533,35.688h38.511v18.619h-38.511V35.688z"/>
						<text transform="matrix(1 0 0 1 694.7959 49.8896)" font-family="'OpenSans-Bold'" font-size="13">NH</text>
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M706.422,15.685h38.515v18.617h-38.515V15.685z"/>
						<text transform="matrix(1 0 0 1 715.7344 29.4443)" font-family="'OpenSans-Bold'" font-size="13">ME</text>
					</g>
					<g>
						<path fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M666.639,175.716h18.617v18.62h-18.617
							V175.716z"/>
						<text transform="matrix(1 0 0 1 669.5244 188.8193)" font-family="'OpenSans-Bold'" font-size="10">DE</text>						
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M30.086,475.77h18.623v18.621H30.086V475.77z"/>					
							<text transform="matrix(1 0 0 1 32.8652 489.1104)" font-family="'OpenSans-Bold'" font-size="10">AK</text>					
					</g>
					<g>
						<path opacity="0.8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" enable-background="new    " d="
							M69.871,475.771h38.515v18.622H69.871V475.771z"/>
						<text transform="matrix(1 0 0 1 82.3994 489.1104)" font-family="'OpenSans-Bold'" font-size="13">HI</text>
					</g>
				</g>
			</g>
		</svg>
		<div class="rango2"></div>
		<div class="rango1">
			<div class="competido">Distrito competido</div>
			<div class="rep_hispano">Distrito con representante hispano</div>
		</div>
		<p>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
		</p>
		<div class="estatica"></div>
		<div class="nota">
			<div class="titulo_nota">
				Nota Metodológica
			</div>
			<div class="parrafo">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec
			</div>
			<div class="boton">
				Descargar Datos
			</div>
		</div>
		<div class="footer">			
			<div class="d4">
				<span>D4 para Univision Noticias.</span>
				<a href="http://www.data4.mx" target="_blank">http://www.data4.mx</a>					
			</div>	
		</div>
	</div>
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="775px" height="510.055px" viewBox="-227.5 -149.726 775 510.055" enable-background="new -227.5 -149.726 775 510.055"
	 xml:space="preserve" style="display:none">
<g id="Mapa">
	<g id="mapa">
		<rect id="WA06" x="-218.156" y="2.872" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="WA03" x="-218.156" y="22.878" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="OR01" x="-218.156" y="42.883" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="CA06" x="-218.156" y="62.886" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA08" x="-218.156" y="82.891" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="CA12" x="-218.156" y="102.894" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA14" x="-218.156" y="122.897" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="CA23" x="-218.156" y="142.903" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA24" x="-218.156" y="162.906" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA30" x="-218.156" y="182.91" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="CA33" x="-218.156" y="202.913" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA36" x="-218.156" y="222.916" fill="#E6E6E6" width="18.621" height="18.62"/>
		<rect id="CA46" x="-218.156" y="242.924" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="WA01" x="-198.265" y="2.872" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="WA09" x="-198.265" y="22.878" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="OR02" x="-198.265" y="42.883" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="CA01" x="-198.265" y="62.886" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA07" x="-198.265" y="82.891" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="CA09" x="-198.265" y="102.894" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA15" x="-198.265" y="122.897" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="CA17" x="-198.265" y="142.903" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA22" x="-198.265" y="162.906" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA27" x="-198.265" y="182.91" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="CA34" x="-198.265" y="202.913" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA35" x="-198.265" y="222.916" fill="#E6E6E6" width="18.621" height="18.62"/>
		<rect id="CA47" x="-198.265" y="242.924" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="WA02" x="-178.374" y="2.872" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="WA07" x="-178.374" y="22.878" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="OR03" x="-178.374" y="42.883" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="CA02" x="-178.374" y="62.886" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="CA05" x="-178.374" y="82.891" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="CA13" x="-178.374" y="102.894" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="CA16" x="-178.374" y="122.897" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="CA20" x="-178.374" y="142.903" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="CA26" x="-178.374" y="162.906" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="CA28" x="-178.374" y="182.91" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="CA32" x="-178.374" y="202.913" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="CA37" x="-178.374" y="222.916" fill="#E6E6E6" width="18.62" height="18.62"/>
		<rect id="CA48" x="-178.374" y="242.924" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="CA50" x="-178.374" y="262.925" fill="#E6E6E6" width="18.62" height="18.621"/>
		<rect id="CA53" x="-178.374" y="282.928" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="WA04" x="-158.478" y="2.872" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="WA08" x="-158.478" y="22.878" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="OR04" x="-158.478" y="42.883" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="CA04" x="-158.478" y="62.886" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="CA03" x="-158.478" y="82.891" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="CA10" x="-158.478" y="102.894" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="CA18" x="-158.478" y="122.897" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="CA21" x="-158.478" y="142.903" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="CA43" x="-158.478" y="162.906" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="CA29" x="-158.478" y="182.91" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="CA38" x="-158.478" y="202.913" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="CA39" x="-158.478" y="222.916" fill="#E6E6E6" width="18.62" height="18.62"/>
		<rect id="CA44" x="-158.478" y="242.924" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="CA49" x="-158.478" y="262.925" fill="#E6E6E6" width="18.62" height="18.621"/>
		<rect id="CA52" x="-158.478" y="282.928" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="WA05" x="-138.587" y="2.872" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="WA10" x="-138.587" y="22.878" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="OR05" x="-138.587" y="42.883" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="ID01" x="-138.587" y="62.886" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="NV02" x="-138.587" y="82.891" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="CA11" x="-138.587" y="102.894" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA19" x="-138.587" y="122.897" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="CA25" x="-138.587" y="142.903" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA41" x="-138.587" y="162.906" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA31" x="-138.587" y="182.91" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="CA42" x="-138.587" y="202.913" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CA40" x="-138.587" y="222.916" fill="#E6E6E6" width="18.621" height="18.62"/>
		<rect id="CA45" x="-138.587" y="242.924" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="CA51" x="-138.587" y="262.925" fill="#E6E6E6" width="18.621" height="18.621"/>
		<rect id="ID02" x="-118.695" y="62.886" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="NV01" x="-118.695" y="82.891" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="UT01" x="-118.695" y="102.894" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="UT04" x="-118.695" y="122.897" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="AZ04" x="-118.695" y="142.903" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="AZ08" x="-118.695" y="162.906" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="AZ03" x="-118.695" y="182.91" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="MT00" x="-98.805" y="42.883" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="WY00" x="-98.805" y="62.886" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="NV03" x="-98.805" y="82.891" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="UT02" x="-98.805" y="102.894" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="UT03" x="-98.805" y="122.897" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="AZ06" x="-98.805" y="142.903" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="AZ07" x="-98.805" y="162.906" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="AZ09" x="-98.805" y="182.91" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="ND00" x="-78.909" y="42.883" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="SD00" x="-78.909" y="62.886" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="NV04" x="-78.909" y="82.891" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="CO02" x="-78.909" y="102.894" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CO03" x="-78.909" y="122.897" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="AZ01" x="-78.909" y="142.903" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="AZ05" x="-78.909" y="162.906" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="AZ02" x="-78.909" y="182.91" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="CO01" x="-59.018" y="102.894" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="CO05" x="-59.018" y="122.897" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="NM03" x="-59.018" y="142.903" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="NM01" x="-59.018" y="162.906" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="NM02" x="-59.018" y="182.91" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="CO07" x="-39.126" y="102.894" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="CO06" x="-39.126" y="122.897" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="OK03" x="-39.126" y="142.903" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="TX13" x="-39.126" y="162.906" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="TX19" x="-39.126" y="182.91" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="NE03" x="-19.236" y="102.894" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="CO04" x="-19.236" y="122.897" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="OK04" x="-19.236" y="142.903" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="TX24" x="-19.236" y="162.906" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="TX12" x="-19.236" y="182.91" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="TX17" x="-19.236" y="202.913" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="TX16" x="-19.236" y="222.916" fill="#E6E6E6" width="18.62" height="18.62"/>
		<rect id="NE01" x="0.661" y="102.894" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="KS01" x="0.661" y="122.897" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="OK05" x="0.661" y="142.903" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="TX26" x="0.661" y="162.906" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="TX11" x="0.661" y="182.91" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="TX35" x="0.661" y="202.913" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="TX23" x="0.661" y="222.916" fill="#E6E6E6" width="18.619" height="18.62"/>
		<rect id="TX21" x="0.661" y="242.924" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="NE02" x="20.551" y="102.894" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="KS04" x="20.551" y="122.897" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="OK01" x="20.551" y="142.903" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="TX30" x="20.551" y="162.906" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="TX33" x="20.551" y="182.91" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="TX36" x="20.551" y="202.913" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="TX10" x="20.551" y="222.916" fill="#E6E6E6" width="18.621" height="18.62"/>
		<rect id="TX20" x="20.551" y="242.924" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="TX28" x="20.551" y="262.925" fill="#E6E6E6" width="18.621" height="18.621"/>
		<rect id="TX15" x="20.551" y="282.928" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="MN02" x="40.442" y="22.878" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="MN08" x="40.442" y="42.883" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="IA04" x="40.442" y="62.886" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="MO06" x="40.442" y="82.891" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="MO05" x="40.442" y="102.894" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="KS02" x="40.442" y="122.897" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="OK02" x="40.442" y="142.903" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="TX32" x="40.442" y="162.906" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="TX03" x="40.442" y="182.91" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="TX25" x="40.442" y="202.913" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="TX29" x="40.442" y="222.916" fill="#E6E6E6" width="18.62" height="18.62"/>
		<rect id="TX31" x="40.442" y="242.924" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="TX34" x="40.442" y="262.925" fill="#E6E6E6" width="18.62" height="18.621"/>
		<rect id="TX27" x="40.442" y="282.928" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="MN04" x="60.335" y="22.878" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="MN07" x="60.335" y="42.883" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="IA03" x="60.335" y="62.886" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="MO03" x="60.335" y="82.891" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="MO04" x="60.335" y="102.894" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="KS03" x="60.335" y="122.897" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="LA03" x="60.335" y="142.903" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="TX04" x="60.335" y="162.906" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="TX06" x="60.335" y="182.91" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="TX22" x="60.335" y="202.913" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="TX18" x="60.335" y="222.916" fill="#E6E6E6" width="18.621" height="18.62"/>
		<rect id="TX14" x="60.335" y="242.924" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="WI07" x="80.229" y="-17.126" fill="#E6E6E6" width="18.618" height="18.617"/>
		<rect id="WI03" x="80.229" y="2.872" fill="#E6E6E6" width="18.618" height="18.622"/>
		<rect id="MN03" x="80.229" y="22.878" fill="#E6E6E6" width="18.618" height="18.622"/>
		<rect id="MN06" x="80.229" y="42.883" fill="#E6E6E6" width="18.618" height="18.622"/>
		<rect id="IA01" x="80.229" y="62.886" fill="#E6E6E6" width="18.618" height="18.619"/>
		<rect id="MO02" x="80.229" y="82.891" fill="#E6E6E6" width="18.618" height="18.617"/>
		<rect id="MO07" x="80.229" y="102.894" fill="#E6E6E6" width="18.618" height="18.619"/>
		<rect id="AR04" x="80.229" y="122.897" fill="#E6E6E6" width="18.618" height="18.622"/>
		<rect id="LA02" x="80.229" y="142.903" fill="#E6E6E6" width="18.618" height="18.619"/>
		<rect id="TX01" x="80.229" y="162.906" fill="#E6E6E6" width="18.618" height="18.619"/>
		<rect id="TX05" x="80.229" y="182.91" fill="#E6E6E6" width="18.618" height="18.617"/>
		<rect id="TX07" x="80.229" y="202.913" fill="#E6E6E6" width="18.618" height="18.619"/>
		<rect id="TX08" x="80.229" y="222.916" fill="#E6E6E6" width="18.618" height="18.62"/>
		<rect id="WI08" x="100.12" y="-17.126" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="IL16" x="100.12" y="2.872" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="MN01" x="100.12" y="22.878" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="MN05" x="100.12" y="42.883" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="IA02" x="100.12" y="62.886" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="MO01" x="100.12" y="82.891" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="MO08" x="100.12" y="102.894" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="AR03" x="100.12" y="122.897" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="LA04" x="100.12" y="142.903" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="LA06" x="100.12" y="162.906" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="TX02" x="100.12" y="182.91" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="TX09" x="100.12" y="202.913" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="MI01" x="120.01" y="-57.136" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="MI02" x="120.01" y="-37.134" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="WI06" x="120.01" y="-17.126" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="IL08" x="120.01" y="2.872" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="IL06" x="120.01" y="22.878" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="IL13" x="120.01" y="42.883" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="IL14" x="120.01" y="62.886" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="IL17" x="120.01" y="82.891" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="IL18" x="120.01" y="102.894" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="AR02" x="120.01" y="122.897" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="LA05" x="120.01" y="142.903" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="LA01" x="120.01" y="162.906" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="MI04" x="139.904" y="-57.136" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="MI03" x="139.904" y="-37.134" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="WI02" x="139.904" y="-17.126" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="WI01" x="139.904" y="2.872" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="IL10" x="139.904" y="22.878" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="IL07" x="139.904" y="42.883" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="IL03" x="139.904" y="62.886" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="IL01" x="139.904" y="82.891" fill="#E6E6E6" width="18.621" height="18.617"/>
		<rect id="IL15" x="139.904" y="102.894" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="AR01" x="139.904" y="122.897" fill="#E6E6E6" width="18.621" height="18.622"/>
		<rect id="MS02" x="139.904" y="142.903" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="MS03" x="139.904" y="162.906" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="MI05" x="159.797" y="-57.136" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="MI06" x="159.797" y="-37.134" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="WI05" x="159.797" y="-17.126" fill="#E6E6E6" width="18.617" height="18.617"/>
		<rect id="WI04" x="159.797" y="2.872" fill="#E6E6E6" width="18.617" height="18.622"/>
		<rect id="IL09" x="159.797" y="22.878" fill="#E6E6E6" width="18.617" height="18.622"/>
		<rect id="IL05" x="159.797" y="42.883" fill="#E6E6E6" width="18.617" height="18.622"/>
		<rect id="IL04" x="159.797" y="62.886" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="IL02" x="159.797" y="82.891" fill="#E6E6E6" width="18.617" height="18.617"/>
		<rect id="IL11" x="159.797" y="102.894" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="IL12" x="159.797" y="122.897" fill="#E6E6E6" width="18.617" height="18.622"/>
		<rect id="MS01" x="159.797" y="142.903" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="MS04" x="159.797" y="162.906" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="MI08" x="179.689" y="-57.136" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="MI07" x="179.689" y="-37.134" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="MI11" x="179.689" y="-17.126" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="MI14" x="179.689" y="2.872" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="IN01" x="179.689" y="22.878" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="IN08" x="179.689" y="42.883" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="KY01" x="179.689" y="62.886" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="TN08" x="179.689" y="82.891" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="TN09" x="179.689" y="102.894" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="AL05" x="179.689" y="122.897" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="AL06" x="179.689" y="142.903" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="AL07" x="179.689" y="162.906" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="AL01" x="179.689" y="182.91" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="MI10" x="199.581" y="-57.136" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="MI09" x="199.581" y="-37.134" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="MI12" x="199.581" y="-17.126" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="MI13" x="199.581" y="2.872" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="IN02" x="199.581" y="22.878" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="IN04" x="199.581" y="42.883" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="KY02" x="199.581" y="62.886" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="TN05" x="199.581" y="82.891" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="TN07" x="199.581" y="102.894" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="AL04" x="199.581" y="122.897" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="AL03" x="199.581" y="142.903" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="AL02" x="199.581" y="162.906" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="OH05" x="219.475" y="-17.126" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="OH08" x="219.475" y="2.872" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="IN03" x="219.475" y="22.878" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="IN07" x="219.475" y="42.883" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="KY03" x="219.475" y="62.886" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="TN06" x="219.475" y="82.891" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="TN03" x="219.475" y="102.894" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="GA10" x="219.475" y="122.897" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="GA11" x="219.475" y="142.903" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="GA08" x="219.475" y="162.906" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="OH04" x="239.366" y="-17.126" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="OH01" x="239.366" y="2.872" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="IN05" x="239.366" y="22.878" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="IN09" x="239.366" y="42.883" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="KY04" x="239.366" y="62.886" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="TN04" x="239.366" y="82.891" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="TN02" x="239.366" y="102.894" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="GA07" x="239.366" y="122.897" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="GA04" x="239.366" y="142.903" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="GA02" x="239.366" y="162.906" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="FL01" x="239.366" y="182.91" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="OH09" x="259.258" y="-17.126" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="OH03" x="259.258" y="2.872" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="OH02" x="259.258" y="22.878" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="IN06" x="259.258" y="42.883" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="KY05" x="259.258" y="62.886" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="VA09" x="259.258" y="82.891" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="TN01" x="259.258" y="102.894" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="GA13" x="259.258" y="122.897" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="GA05" x="259.258" y="142.903" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="GA01" x="259.258" y="162.906" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="FL02" x="259.258" y="182.91" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="OH11" x="279.147" y="-17.126" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="OH10" x="279.147" y="2.872" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="OH12" x="279.147" y="22.878" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="OH15" x="279.147" y="42.883" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="KY06" x="279.147" y="62.886" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="VA06" x="279.147" y="82.891" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="NC11" x="279.147" y="102.894" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="GA14" x="279.147" y="122.897" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="GA06" x="279.147" y="142.903" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="GA03" x="279.147" y="162.906" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="FL06" x="279.147" y="182.91" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="FL09" x="279.147" y="202.913" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="FL10" x="279.147" y="222.916" fill="#E6E6E6" width="18.622" height="18.62"/>
		<rect id="OH14" x="299.041" y="-17.126" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="OH13" x="299.041" y="2.872" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="OH16" x="299.041" y="22.878" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="OH07" x="299.041" y="42.883" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="WV03" x="299.041" y="62.886" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="VA05" x="299.041" y="82.891" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="NC10" x="299.041" y="102.894" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="NC09" x="299.041" y="122.897" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="GA09" x="299.041" y="142.903" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="GA12" x="299.041" y="162.906" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="FL04" x="299.041" y="182.91" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="FL05" x="299.041" y="202.913" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="FL11" x="299.041" y="222.916" fill="#E6E6E6" width="18.622" height="18.62"/>
		<rect id="NY27" x="318.936" y="-97.147" fill="#E6E6E6" width="18.617" height="18.622"/>
		<rect id="NY13" x="318.936" y="-77.139" fill="#E6E6E6" width="18.617" height="18.622"/>
		<rect id="NY07" x="318.936" y="-57.136" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="NY01" x="318.936" y="-37.134" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="PA14" x="318.936" y="-17.126" fill="#E6E6E6" width="18.617" height="18.617"/>
		<rect id="PA18" x="318.936" y="2.872" fill="#E6E6E6" width="18.617" height="18.622"/>
		<rect id="PA09" x="318.936" y="22.878" fill="#E6E6E6" width="18.617" height="18.622"/>
		<rect id="OH06" x="318.936" y="42.883" fill="#E6E6E6" width="18.617" height="18.622"/>
		<rect id="WV01" x="318.936" y="62.886" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="VA07" x="318.936" y="82.891" fill="#E6E6E6" width="18.617" height="18.617"/>
		<rect id="NC05" x="318.936" y="102.894" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="NC12" x="318.936" y="122.897" fill="#E6E6E6" width="18.617" height="18.622"/>
		<rect id="SC03" x="318.936" y="142.903" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="SC07" x="318.936" y="162.906" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="FL03" x="318.936" y="182.91" fill="#E6E6E6" width="18.617" height="18.617"/>
		<rect id="FL08" x="318.936" y="202.913" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="FL13" x="318.936" y="222.916" fill="#E6E6E6" width="18.617" height="18.62"/>
		<rect id="FL14" x="318.936" y="242.924" fill="#E6E6E6" width="18.617" height="18.622"/>
		<rect id="FL18" x="318.936" y="262.925" fill="#E6E6E6" width="18.617" height="18.621"/>
		<rect id="FL21" x="318.936" y="282.928" fill="#E6E6E6" width="18.617" height="18.619"/>
		<rect id="NY26" x="338.827" y="-97.147" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="NY14" x="338.827" y="-77.139" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="NY08" x="338.827" y="-57.136" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="NY02" x="338.827" y="-37.134" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="PA12" x="338.827" y="-17.126" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="PA17" x="338.827" y="2.872" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="PA04" x="338.827" y="22.878" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="DC00" x="338.827" y="42.883" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="WV02" x="338.827" y="62.886" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="VA04" x="338.827" y="82.891" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="NC13" x="338.827" y="102.894" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="NC06" x="338.827" y="122.897" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="SC02" x="338.827" y="142.903" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="SC06" x="338.827" y="162.906" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="FL07" x="338.827" y="182.91" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="FL15" x="338.827" y="202.913" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="FL12" x="338.827" y="222.916" fill="#E6E6E6" width="18.619" height="18.62"/>
		<rect id="FL23" x="338.827" y="242.924" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="FL19" x="338.827" y="262.925" fill="#E6E6E6" width="18.619" height="18.621"/>
		<rect id="FL22" x="338.827" y="282.928" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="NY22" x="358.719" y="-97.147" fill="#E6E6E6" width="18.624" height="18.622"/>
		<rect id="NY15" x="358.719" y="-77.139" fill="#E6E6E6" width="18.624" height="18.622"/>
		<rect id="NY09" x="358.719" y="-57.136" fill="#E6E6E6" width="18.624" height="18.619"/>
		<rect id="NY03" x="358.719" y="-37.134" fill="#E6E6E6" width="18.624" height="18.619"/>
		<rect id="PA03" x="358.719" y="-17.126" fill="#E6E6E6" width="18.624" height="18.617"/>
		<rect id="PA08" x="358.719" y="2.872" fill="#E6E6E6" width="18.624" height="18.622"/>
		<rect id="PA15" x="358.719" y="22.878" fill="#E6E6E6" width="18.624" height="18.622"/>
		<rect id="MD06" x="358.719" y="42.883" fill="#E6E6E6" width="18.624" height="18.622"/>
		<rect id="VA10" x="358.719" y="62.886" fill="#E6E6E6" width="18.624" height="18.619"/>
		<rect id="VA03" x="358.719" y="82.891" fill="#E6E6E6" width="18.624" height="18.617"/>
		<rect id="NC04" x="358.719" y="102.894" fill="#E6E6E6" width="18.624" height="18.619"/>
		<rect id="NC08" x="358.719" y="122.897" fill="#E6E6E6" width="18.624" height="18.622"/>
		<rect id="SC04" x="358.719" y="142.903" fill="#E6E6E6" width="18.624" height="18.619"/>
		<rect id="SC05" x="358.719" y="162.906" fill="#E6E6E6" width="18.624" height="18.619"/>
		<rect id="FL24" x="358.719" y="202.913" fill="#E6E6E6" width="18.624" height="18.619"/>
		<rect id="FL16" x="358.719" y="222.916" fill="#E6E6E6" width="18.624" height="18.62"/>
		<rect id="FL17" x="358.719" y="242.924" fill="#E6E6E6" width="18.624" height="18.622"/>
		<rect id="FL20" x="358.719" y="262.925" fill="#E6E6E6" width="18.624" height="18.621"/>
		<rect id="FL26" x="358.719" y="282.928" fill="#E6E6E6" width="18.624" height="18.619"/>
		<rect id="FL27" x="358.719" y="302.933" fill="#E6E6E6" width="18.624" height="18.619"/>
		<rect id="FL25" x="358.719" y="322.934" fill="#E6E6E6" width="18.624" height="18.621"/>
		<rect id="NY25" x="378.61" y="-117.145" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="NY21" x="378.61" y="-97.147" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="NY16" x="378.61" y="-77.139" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="NY10" x="378.61" y="-57.136" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="NY04" x="378.61" y="-37.134" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="PA05" x="378.61" y="-17.126" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="PA13" x="378.61" y="2.872" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="PA16" x="378.61" y="22.878" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="MD08" x="378.61" y="42.883" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="VA11" x="378.61" y="62.886" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="VA01" x="378.61" y="82.891" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="NC02" x="378.61" y="102.894" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="NC07" x="378.61" y="122.897" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="SC01" x="378.61" y="142.903" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="NY24" x="398.505" y="-117.145" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="NY20" x="398.505" y="-97.147" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="NY17" x="398.505" y="-77.139" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="NY11" x="398.505" y="-57.136" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="NY05" x="398.505" y="-37.134" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="PA11" x="398.505" y="-17.126" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="PA02" x="398.505" y="2.872" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="PA06" x="398.505" y="22.878" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="MD05" x="398.505" y="42.883" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="VA08" x="398.505" y="62.886" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="VA02" x="398.505" y="82.891" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="NC01" x="398.505" y="102.894" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="NC03" x="398.505" y="122.897" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="NY23" x="418.396" y="-117.145" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="NY19" x="418.396" y="-97.147" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="NY18" x="418.396" y="-77.139" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="NY12" x="418.396" y="-57.136" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="NY06" x="418.396" y="-37.134" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="PA10" x="418.396" y="-17.126" fill="#E6E6E6" width="18.619" height="18.617"/>
		<rect id="PA01" x="418.396" y="2.872" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="PA07" x="418.396" y="22.878" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="MD02" x="418.396" y="42.883" fill="#E6E6E6" width="18.619" height="18.622"/>
		<rect id="MD04" x="418.396" y="62.886" fill="#E6E6E6" width="18.619" height="18.619"/>
		<rect id="VT00" x="438.29" y="-117.145" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="MA01" x="438.29" y="-97.147" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="MA02" x="438.29" y="-77.139" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="CT05" x="438.29" y="-57.136" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="NJ05" x="438.29" y="-37.134" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="NJ07" x="438.29" y="-17.126" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="NJ02" x="438.29" y="2.872" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="DE00" x="438.29" y="22.878" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="MD07" x="438.29" y="42.883" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="MD03" x="438.29" y="62.886" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="MD01" x="438.29" y="82.891" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="NH02" x="458.182" y="-117.145" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="MA05" x="458.182" y="-97.147" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="MA03" x="458.182" y="-77.139" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="CT04" x="458.182" y="-57.136" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="NJ11" x="458.182" y="-37.134" fill="#E6E6E6" width="18.62" height="18.619"/>
		<rect id="NJ06" x="458.182" y="-17.126" fill="#E6E6E6" width="18.62" height="18.617"/>
		<rect id="NJ01" x="458.182" y="2.872" fill="#E6E6E6" width="18.62" height="18.622"/>
		<rect id="ME01" x="478.073" y="-137.151" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="NH01" x="478.073" y="-117.145" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="MA06" x="478.073" y="-97.147" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="MA07" x="478.073" y="-77.139" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="CT01" x="478.073" y="-57.136" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="CT03" x="478.073" y="-37.134" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="NJ10" x="478.073" y="-17.126" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="NJ03" x="478.073" y="2.872" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="ME02" x="497.963" y="-137.151" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="MA08" x="497.963" y="-77.139" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="MA04" x="497.963" y="-57.136" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="CT02" x="497.963" y="-37.134" fill="#E6E6E6" width="18.622" height="18.619"/>
		<rect id="NJ08" x="497.963" y="-17.126" fill="#E6E6E6" width="18.622" height="18.617"/>
		<rect id="NJ04" x="497.963" y="2.872" fill="#E6E6E6" width="18.622" height="18.622"/>
		<rect id="MA09" x="517.857" y="-77.139" fill="#E6E6E6" width="18.626" height="18.622"/>
		<rect id="RI01" x="517.857" y="-57.136" fill="#E6E6E6" width="18.626" height="18.619"/>
		<rect id="RI02" x="517.857" y="-37.134" fill="#E6E6E6" width="18.626" height="18.619"/>
		<rect id="NJ09" x="517.857" y="-17.126" fill="#E6E6E6" width="18.626" height="18.617"/>
		<rect id="NJ12" x="517.857" y="2.872" fill="#E6E6E6" width="18.626" height="18.622"/>
		<rect id="AK00" x="-198.265" y="322.934" fill="#E6E6E6" width="18.621" height="18.619"/>
		<rect id="HI01" x="-158.478" y="322.934" fill="#E6E6E6" width="18.62" height="18.621"/>
		<rect id="HI02" x="-138.587" y="322.934" fill="#E6E6E6" width="18.621" height="18.621"/>
	</g>
</g>
</svg>
	
</body>
</html>




