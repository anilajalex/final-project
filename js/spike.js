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






















