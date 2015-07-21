MODAL: 

HTML: 

 <div class="md-modal md-effect-1" id="modal-1">
 </div> 

 <button class="md-close">X</button>

 <div class="md-overlay"></div>

CSS: 

/*MODAL for US STATES*/

.md-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  max-width: 630px;
  min-width: 320px;
  height: auto;
  z-index: 2000;
  visibility: hidden;
  backface-visibility: hidden;
  transform: translateX(-50%) translateY(-50%);
}

.md-show {
  visibility: visible;
}

.md-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  visibility: hidden;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: 0;
  background: rgba(143,27,15,0.8);
  transition: all 0.3s;
}

.md-show ~ .md-overlay {
  opacity: 1;
  visibility: visible;
}


OLD HTML WITHOUT PARALLAX SCROLLING: 

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Timber</title>
	<link rel="stylesheet" href="stylesheets/main.css">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"></script>
</body>
</head>
<body>

<div class="video">
	<div id="video-wrap"> 
		<video id="welcomevid" control="false" autoplay="true" loop="true" muted="true">
			<source src="images/final_trees.mp4" type="video/mp4" width="500" height="500">
		</video>
	</div>

	<div class="video-text">
		<h2 id="vid-text1">A look at climate change</h2>
		<h2 id="vid-text2">what was, what is</h2>
		<h2 id="vid-text3">and what's to come</h2>
		<a id="scroll-button" href=".graphtext">&#10095;</a>
	</div>
</div> 

<div id="container"> 
	<div class="graphtext">

		<h3 class="text">CIMATE CHANGE</h3>
		<h1>WHAT IS AND WHAT'S TO COME</h1>
		<p>Evidence for climatic change is taken from a variety of sources that can be used to reconstruct past climates.</p>

		<div id="graphs">
			<div id="greenhouse-gas-graph">
				<p id="greenhouse-gas-text"> Seventy-two percent of greenhouse gas emissions come from ten countries China, US, EU 28, India, Russia, Japan, Brazil, Indonesia, Mexico and Iran. </p>
				<canvas id="greenhouse-gas" width="150" height="150">
				</canvas>
			</div>

			<div id="co2-emissions-graph">
				<p id="co2-emissions-text">United States CO2 emissions (measured in metric tons) from 2005 to 2011. </p>
				<canvas id="co2-emissions" width="400" height="400">
				</canvas>
			</div>
		</div>

		<div class="arrow-down"></div>
	</div>

	<div id="world-map-text">
		<h1 id="wm-text">A look at the relationship between high income countries and climate change</h1>
	</div>
		
	<div id="world-map-div">
		<object id="world-map" data="./images/world_map.svg" type="image/svg+xml" width="1000" height="750"></object>
		<!-- <div id="canada-data"></div>
		<div id="us-data"></div>
		<div id="br-data"></div>
		<div id="ru-data"></div>
		<div id="cn-data"></div>
		<div id="in-data"></div>
		<div id="id-data"></div>
		<div id="ir-data"></div>
		<div id="za-data"></div> -->
	</div>
 
	<!-- <div class="md-modal md-effect-1" id="modal-1"> -->
		<div id="canada-data"></div>
		<div id="us-data"></div>
		<div id="br-data"></div>
		<div id="ru-data"></div>
		<div id="cn-data"></div>
		<div id="in-data"></div>
		<div id="id-data"></div>
		<div id="ir-data"></div>
		<div id="za-data"></div>
	<!-- </div -->

		<script id="world-map-template"type="x-tmpl-mustache">
			<div>
					<p>{{income}}</p>
			</div>
		</script>

		<script id="world-map-template2"type="x-tmpl-mustache">
			<div>
					<p>{{income}}</p>
			</div>
		</script>

		<script id="world-map-template3"type="x-tmpl-mustache">
			<div>
					<p>{{income}}</p>
			</div>
		</script>

		<script id="world-map-template4"type="x-tmpl-mustache">
			<div>
					<p>{{income}}</p>
			</div>
		</script>

		<script id="world-map-template5"type="x-tmpl-mustache">
			<div>
					<p>{{income}}</p>
			</div>
		</script>

		<script id="world-map-template6"type="x-tmpl-mustache">
			<div>
					<p>{{income}}</p>
			</div>
		</script>

		<script id="world-map-template7"type="x-tmpl-mustache">
			<div>
					<p>{{income}}</p>
			</div>
		</script>

		<script id="world-map-template8"type="x-tmpl-mustache">
			<div>
					<p>{{income}}</p>
			</div>
		</script>

		<script id="world-map-template9"type="x-tmpl-mustache">
			<div>
					<p>{{income}}</p>
			</div>
		</script>

		<script id="world-map-template10"type="x-tmpl-mustache">
			<div>
					<p>{{income}}</p>
			</div>
		</script>

	

	<div id="us-states-text">
		<h1>A look at the minimum and maximum average temperatures in all 50 states from 2009 to 2010</h1>
	</div>

	<div id="us-states">
		<div class="img-container">
			<h3>ALABAMA</h3>
			<img id="alabama" src="images/alabama.png">
		</div>

		<div class="img-container">
			<h3>ALASKA</h3>
			<img id="alaska" src="images/alaska.png">
		</div>

		<div class="img-container">
			<h3>ARIZONA</h3>
			<img id="arizona" src="images/arizona.png">
		</div>

		<div class="img-container">
			<h3>ARKANSAS</h3>
			<img id="arkansas" src="images/arkansas.png">
		</div>

		<div class="img-container">
			<h3>CALIFORNIA</h3>
			<img id="california" src="images/california.png">
		</div>

		<div class="img-container">
			<h3>COLORADO</h3>
			<img id="colorado" src="images/colorado.png">
		</div>

		<div class="img-container">
			<h3>CONNECTICUT</h3>
			<img id="connecticut" src="images/conneticut.png">
		</div>

		<div class="img-container">
			<h3>DELAWARE</h3>
			<img id="delaware" src="images/delaware.png">
		</div>

		<div class="img-container">
			<h3>FLORIDA</h3>
			<img id="florida" src="images/florida.png">
		</div>

		<div class="img-container">
			<h3>GEORGIA</h3>
			<img id="georgia" src="images/georgia.png">
		</div>

		<div class="img-container">
			<h3>HAWAII</h3>
			<img id="hawaii" src="images/hawaii.png">
		</div>

		<div class="img-container">
			<h3>IDAHO</h3>
			<img id="idaho" src="images/idaho.png">
		</div>

		<div class="img-container">
			<h3>ILLINOIS</h3>
			<img id="illinois" src="images/illinois.png">
		</div>

		<div class="img-container">
			<h3>INDIANA</h3>
			<img id="indiana" src="images/indiana.png">
		</div>

		<div class="img-container">
			<h3>IOWA</h3>
			<img id="iowa" src="images/iowa.png">
		</div>

		<div class="img-container">
			<h3>KANSAS</h3>
			<img id="kansas" src="images/kansas.png">
		</div>

		<div class="img-container">
			<h3>KENTUCKY</h3>
			<img id="kentucky" src="images/kentucky.png">
		</div>

		<div class="img-container">
			<h3>LOUISIANA</h3>
			<img id="louisiana" src="images/louisiana.png">
		</div>

		<div class="img-container">
			<h3>MAINE</h3>
			<img id="maine" src="images/maine.png">
		</div>

		<div class="img-container">
			<h3>MARYLAND</h3>
			<img id="maryland" src="images/maryland.png">
		</div>

		<div class="img-container">
			<h3>MASSACHUSETTES</h3>
			<img id="massachusettes" src="images/massachusettes.png">
		</div>

		<div class="img-container">
			<h3>MICHIGAN</h3>
			<img id="michigan" src="images/michigan.png">
		</div>

		<div class="img-container">
			<h3>MINNESOTA</h3>
			<img id="minnesota" src="images/minnesota.png">
		</div>

		<div class="img-container">
			<h3>MISSISSIPPI</h3>
			<img id="mississippi" src="images/mississippi.png">
		</div>

		<div class="img-container">
			<h3>MISSOURI</h3>
			<img id="missouri" src="images/missouri.png">
		</div>

		<div class="img-container">
			<h3>MONTANA</h3>
			<img id="montana" src="images/montana.png">
		</div>

		<div class="img-container">
			<h3>NEBRASKA</h3>
			<img id="nebraska" src="images/nebraska.png">
		</div>

		<div class="img-container">
			<h3>NEVADA</h3>
			<img id="nevada" src="images/nevada.png">
		</div>

		<div class="img-container">
			<h3>NEW HAMPSHIRE</h3>
			<img id="new-hampshire" src="images/new-hampshire.png">
		</div>

		<div class="img-container">
			<h3>NEW JERSEY</h3>
			<img id="new-jersey" src="images/new-jersey.png">
		</div>

		<div class="img-container">
			<h3>NEW MEXICO</h3>
			<img id="new-mexico" src="images/new-mexico.png">
		</div>

		<div class="img-container">
			<h3>NEW YORK</h3>
			<img id="new-york" src="images/new-york.png">
		</div>

		<div class="img-container">
			<h3>NORTH CAROLINA</h3>
			<img id="north-carolina" src="images/north-carolina.png">
		</div>

		<div class="img-container">
			<h3>NORTH DAKOTA</h3>
			<img id="north-dakota" src="images/north-dakota.png">
		</div>

		<div class="img-container">
			<h3>OHIO</h3>
			<img id="ohio" src="images/ohio.png">
		</div>

		<div class="img-container">
			<h3>OKLAHOMA</h3>
			<img id="oklahoma" src="images/oklahoma.png">
		</div>

		<div class="img-container">
			<h3>OREGON</h3>
			<img id="oregon" src="images/oregon.png">
		</div>

		<div class="img-container">
			<h3>PENNSYLVANIA</h3>
			<img id="pennsylvania" src="images/pennsylvania.png">
		</div>

		<div class="img-container">
			<h3>RHODE ISLAND</h3>
			<img id="rhode-island" src="images/rhode-island.png">
		</div>

		<div class="img-container">
			<h3>SOUTH CAROLINA</h3>
			<img id="south-carolina" src="images/south-carolina.png">
		</div>

		<div class="img-container">
			<h3>SOUTH DAKOTA</h3>
			<img id="south-dakota" src="images/south-dakota.png">
		</div>

		<div class="img-container">
			<h3>TENNESSEE</h3>
			<img id="tennessee" src="images/tennessee.png">
		</div>

		<div class="img-container">
			<h3>TEXAS</h3>
			<img id="texas" src="images/texas.png">
		</div>

		<div class="img-container">
			<h3>UTAH</h3>
			<img id="utah" src="images/utah.png">
		</div>

		<div class="img-container">
			<h3>VERMONT</h3>
			<img id="vermont" src="images/vermont.png">
		</div>

		<div class="img-container">
			<h3>VIRGINIA</h3>
			<img id="virginia" src="images/virginia.png">
		</div>

		<div class="img-container">
			<h3>WASHINGTON</h3>
			<img id="washington" src="images/washington.png">
		</div>

		<div class="img-container">
			<h3>WEST VIRGINIA</h3>
			<img id="west-virginia" src="images/west-virginia.png">
		</div>

		<div class="img-container">
			<h3>WISCONSIN</h3>
			<img id="wisconsin" src="images/wisconsin.png">
		</div>

		<div class="img-container">
			<h3>WYOMING</h3>
			<img id="wyoming" src="images/wyoming.png">
		</div>

		<div id="results"></div>
	</div>

	<script id="noaa-template"type="x-tmpl-mustache">
		<div>
				
					<p>The extreme minimum temperature reported in a month is {{min}} degrees Fahrenheit</p>
						
				
				
				<p>The extreme maximum temperature reported in a month is {{max}} degrees Fahrenheit</p>

		</div>

	</script>

</div>


<!-- <footer>
	<p>Works Cited:</p>
	<p class="attribution">Illustrations of U.S. states are from <a href="http://www.nuts4boltsdesign.com/#about">Nuts4BoltsDesign</a> via <a href="https://thenounproject.com/nuts4bolts/">The Noun Project</a>.</p> 
	<p><a href="http://climate.nasa.gov/climate_resources/115/">NASA Climate Resources</a></p>
	<p><a href="http://www.pewglobal.org/2015/07/14/climate-change-seen-as-top-global-threat/">Pew Research Center</a></p>
	<p>Video taken from Nasa'\s <a href="https://svs.gsfc.nasa.gov/cgi-bin/details.cgi?aid=10841">Perpetual Ocean</a></p>
	<p>Scroll image from <a href="https://thenounproject.com/search/?q=triangle&i=45047">Kervin Markle</a></p>
	<p>Leaf from <a href="https://thenounproject.com/term/leaf/21492/">Anna Moreno</a></p>
</footer> -->

	<script type="text/javascript" src="js/jquery-2.1.4.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.1.0/mustache.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> 
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>' 

OLD CSS WITHOUT PARALLAX SCROLLING: 

@import url(http://fonts.googleapis.com/css?family=Raleway);

html, body {
	height: 100%;
	position: relative;
}

body {
	background-color: #3e4f44; 
}

/*INTRO*/

video {
	width: 100%;
	margin: 0 auto;
	position: relative;
}

#welcomevid {
	position: relative;
	width: 100%;
	height: auto;
	padding: 0;

}

.video-text {
	position: absolute;
	top: 40%;
	transform: translateY(-50%);
	width: 100%;
	margin: 0;
	text-align: center;
	color: white;
	text-shadow: 0 0 30px #000;
	font-size: 40px;
	font-family: 'Raleway'; 
}

.video-text h1 {
	font-size: 1.3em;
}

.video-text span {
	color: #33C3F0;
}

#scroll-button {
	transform: rotate(90deg);
	display: inline-block;
	text-decoration: none;
	transition: all 0.7s;
	color: #fff;
	height: 5px; 
	width: 5px; 
}

#scroll-button:hover {
	text-shadow: 0 0 20px rgba(89, 116, 99, 0.9);
	color: #85a18f;
}


/*#container {
	margin-left: 10em; 
	margin-right: 10em; 
}*/

footer {
	position: absolute;
	bottom: 0;
	left: 0; 
	width: 100%;
/*	height: 3.4em;
	margin-top: 1em;*/
	background-color: #eee; 


}

/*WORLD MAP*/

#world-map-text {
	margin: 6em; 
	text-align: center; 
	font-family: 'Raleway';
}

#world-map-div {
	background-color: #00B8E6; 
/*	background-image: url("http://www.netanimations.net/water_waves_ocean_ripple_high_quality_animated_gif.gif"); 
	background-size: cover;*/
	margin: 1em; 
	text-align: center; 
}

#world-map {
	margin: 2em;
}

/*modal
/*.md-modal {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 50%;
	max-width: 630px;
	min-width: 320px;
	height: auto;
	z-index: 2000;
	visibility: hidden;
	backface-visibility: hidden;
	transform: translateX(-50%) translateY(-50%);
}

.md-show {
	visibility: visible;
}

.md-overlay {
	position: fixed;
	width: 100%;
	height: 100%;
	visibility: hidden;
	top: 0;
	left: 0;
	z-index: 1000;
	opacity: 0;
	background: rgba(143,27,15,0.8);
	transition: all 0.3s;
}

.md-show ~ .md-overlay {
	opacity: 1;
	visibility: visible;
}
*/
/*CHARTS*/									


.graphtext {
	background-color: #85a18f; 
	padding: 50px; 
	text-align: center; 
	font-family: 'Raleway';
}

p {
	color: #fff;
}

canvas {
	width: 20em;
	height: 20em;
	margin: 1em; 
	z-index: 1; 
}


#graphs {
	margin-right: 10em;
	margin-left: 10em;
}


#greenhouse-gas-text {
	width: 20em;
	height: 20em;
	float: left;
	margin: 1em; 
	font-family: 'Raleway';
	font-size: 1em; 
}

#co2-emissions-text {
	width: 20em;
	height: 20em;
	float: right;
	margin: 1em; 
	font-family: 'Raleway';
	font-size: 1em; 
}


/*50 STATES*/

#us-states-text {
	text-align: center; 
	padding: 5em;
	font-family: 'Raleway';
}

#us-states {
	background-color: #85a18f; 
	height: auto;
	width: 100%;
}

.text {
	color: #fff;
	font-family: 'Raleway';
}

h1 {
	color: #fff;
}

img {
	height: 5em;
	width: 5em;
	margin: 3em;
}

.img-container {
	float:left;
	/*background-color: #fff; 
	margin: 1em;*/
	background-color: #85a18f; 
	text-align: center; 
}

.attribution {
	position: absolute;
	bottom: 0;
}







WORLD BANK API query

// <script type="text/javascript" src="js/jquery-2.1.4.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.js"></script>

	how to access ids in SVG: 
$("#world-map").contents().find("#CA").click( function(e){ 
	console.log("canadia clicked!") 
}); 


$("#world-map").contents().find("#CA").click( function(e){ 
	var tempRequestWorldBankAPI = $.ajax({
		url: 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/', 
		type: 'GET', 
		data: {
				type: 'annualavg', 
				var: 'tas', 
				start: 2012, 
				end: 2013, 
				ISO3: 'USA'
		}
	}); 
	tempRequestWorldBankAPI.done(function(response){
		console.log(response); 
	}); 
}); 

	var tempRequestWorldBankAPI = $.ajax({
		url: 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/type/var/start/end/ISO3', 
		type: 'GET', 
		data: {
				type: 'annualavg', 
				var: 'tas', 
				start: 2012, 
				end: 2013, 
				ISO3: 'USA'
		}
	}); 
	tempRequestWorldBankAPI.done(function(response){
		console.log(response); 
	}); 

http://climatedataapi.worldbank.org/climateweb/rest/v1/country/type/var/start/end/ISO3

MORE WORLD BANK API CODE: 

// $("#world-map").contents().find("#CA").click( function(e){ 
// 	var tempRequestWorldBankAPI = $.ajax({
// 		url: 'http://api.worldbank.org/countries', 
// 		type: 'GET', 
// 		data: {
// 				date: '2012:2014', 
// 				ISO3: 'CAN', 
// 				indicators: '1.1_TOTAL.FINAL.ENERGY.CONSUM'
// 		}
// 	}); 
// 	tempRequestWorldBankAPI.done(function(response){
// 		console.log(response); 
// 	}); 
// }); 

$("#world-map").contents().find("#CA").click( function(e){ 
	var tempRequestWorldBankAPI = $.ajax({
		url: 'http://api.worldbank.org/indicators/1.1_TOTAL.FINAL.ENERGY.CONSUM', 
		type: 'GET', 
		data: {
			ISO3: 'CAN', 
			format: 'JSON'
		}
	}); 
	tempRequestWorldBankAPI.done(function(response){
		console.log(response); 
	}); 
}); 

_-------
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>

	<!-- <h3>CO2 emissions (metric tons per capita)</h3>
<canvas id="co2-emissions" width="400" height="400">
</canvas> -->

	// Chart.defaults.global = {
// } // ends chart.defaults

// Chart.defaults.global.responsive = true;

CO2 emissions (metric tons per capita) CHART

var ctx = document.getElementById("co2-emissions").getContext("2d");

var data = {
	labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011'], 
	datasets: [
		{
			label: "CO2 emissions", 
			fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [4.6, 4.7, 4.7, 4.8, 4.7, 4.9, 5.0]
		}
	] // ends datasets

}; // ends data 

var options = {
	scaleShowGridLines : false
}

var myLineChart = new Chart(ctx).Line(data, options); 

<!-- <img id="nasa-gif" src="images/GisTemp_chart_v6_1440px.gif"> -->


// POSSIBLE VID
// HTML

<!-- <iframe width="500" height="500" src="http://climate.nasa.gov/embed/28" frameborder="0" allowfullscreen seamless></iframe> -->

// CSS

iframe {
	width: 100%;
	height: auto;
	margin: 0 auto;
	border: none; 
}

iframe[seamless] { 
    display: block;
}  

	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: "GHCNDMS",  
				locationid: "CITY: AF000008", 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' 
			}
		}); 
		requestNOAA.done(
			function(response){
				console.log(response); 
			}); 






// //Mean project temperature for U.S. from 2080 to 2099 in C CHART

// var data = {
// 	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
// 	datasets: [
// 		{
// 			label: "CO2 emissions", 
// 			fillColor: "rgba(220,220,220,0.2)",
// 	    strokeColor: "rgba(220,220,220,1)",
// 	    pointColor: "rgba(220,220,220,1)",
// 	    pointStrokeColor: "#fff",
// 	    pointHighlightFill: "#fff",
// 	    pointHighlightStroke: "rgba(220,220,220,1)",
// 	    data: ['-3.89', '-2.86', 1.13, 7.04, 12.78, 18.14, 21.01, 20.07, 15.81, 9.41, 2.45, '-1.94' ]
// 		}
// 	]// ends datasets 

// } // ends data

// var options = {
// 	scaleShowGridLines : false
// }

// var ctx = document.getElementById("usa-future").getContext("2d");
// var secondLineChart = new Chart(ctx).Line(data, options); 
















