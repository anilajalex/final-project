$(document).ready(function(){

	NOAA_TOKEN = ENV['NOAA_TOKEN']

//WORLD MAP

//CANADA

$("#world-map").contents().find("#CA").click( function(e){ 
	var requestCanada = $.ajax({
		url: 'http://api.worldbank.org/countries', 
		type: 'GET', 
		data: {  
			per_page: 300,  
			format: 'JSON'
		}
	}); 
	requestCanada.done(function(response){
		renderCanada(response);  
		console.log(response); 
	}); 
}); 

var renderCanada = function(data) {
	$("#canada-data").empty(); 
	var template = $("#world-map-template").html(); 
	var output = Mustache.render(template, {income: data[1][36].incomeLevel.value}); 
	$("#canada-data").html(output); 
} // ends render

//USA

$("#world-map").contents().find("#US").click( function(e){ 
	var requestUS = $.ajax({
		url: 'http://api.worldbank.org/countries', 
		type: 'GET', 
		data: {  
			per_page: 300,  
			format: 'JSON'
		}
	}); 
	requestUS.done(function(response){
		renderUS(response);  
		console.log(response); 
	}); 
}); 

var renderUS = function(data) {
	$("#us-data").empty(); 
	var template = $("#world-map-template2").html(); 
	var output = Mustache.render(template, {income: data[1][250].incomeLevel.value}); 
	$("#us-data").html(output); 
} // ends render

//BRAZIL
$("#world-map").contents().find("#BR").click( function(e){ 
	var requestBR = $.ajax({
		url: 'http://api.worldbank.org/countries', 
		type: 'GET', 
		data: {  
			per_page: 300,  
			format: 'JSON'
		}
	}); 
	requestBR.done(function(response){
		renderBR(response);  
		console.log(response); 
	}); 
}); 

var renderBR = function(data) {
	$("#br-data").empty(); 
	var template = $("#world-map-template3").html(); 
	var output = Mustache.render(template, {income: data[1][29].incomeLevel.value}); 
	$("#br-data").html(output); 
} // ends render

//GREAT BRITAIN
$("#world-map").contents().find("#GB").click( function(e){ 
	var requestGB = $.ajax({
		url: 'http://api.worldbank.org/countries', 
		type: 'GET', 
		data: {  
			per_page: 300,  
			format: 'JSON'
		}
	}); 
	requestGB.done(function(response){
		renderGB(response);  
		console.log(response); 
	}); 
}); 

var renderGB = function(data) {
	$("#gb-data").empty(); 
	var template = $("#world-map-template4").html(); 
	var output = Mustache.render(template, {income: data[1][29].incomeLevel.value}); 
	$("#gb-data").html(output); 
} // ends render

//Russia
$("#world-map").contents().find("#RU").click( function(e){ 
	var requestRU = $.ajax({
		url: 'http://api.worldbank.org/countries', 
		type: 'GET', 
		data: {  
			per_page: 300,  
			format: 'JSON'
		}
	}); 
	requestRU.done(function(response){
		renderRU(response);  
		console.log(response); 
	}); 
}); 

var renderRU = function(data) {
	$("#ru-data").empty(); 
	var template = $("#world-map-template5").html(); 
	var output = Mustache.render(template, {income: data[1][204].incomeLevel.value}); 
	$("#ru-data").html(output); 
} // ends render

//China
$("#world-map").contents().find("#CN").click( function(e){ 
	var requestCN = $.ajax({
		url: 'http://api.worldbank.org/countries', 
		type: 'GET', 
		data: {  
			per_page: 300,  
			format: 'JSON'
		}
	}); 
	requestCN.done(function(response){
		renderCN(response);  
		console.log(response); 
	}); 
}); 

var renderCN = function(data) {
	$("#cn-data").empty(); 
	var template = $("#world-map-template6").html(); 
	var output = Mustache.render(template, {income: data[1][204].incomeLevel.value}); 
	$("#cn-data").html(output); 
} // ends render

//India

$("#world-map").contents().find("#IN").click( function(e){ 
	var requestIN = $.ajax({
		url: 'http://api.worldbank.org/countries', 
		type: 'GET', 
		data: {  
			per_page: 300,  
			format: 'JSON'
		}
	}); 
	requestIN.done(function(response){
		renderIN(response);  
		console.log(response); 
	}); 
}); 

var renderIN = function(data) {
	$("#in-data").empty(); 
	var template = $("#world-map-template7").html(); 
	var output = Mustache.render(template, {income: data[1][108].incomeLevel.value}); 
	$("#in-data").html(output); 
} // ends render

//Indonesia

$("#world-map").contents().find("#ID").click( function(e){ 
	var requestID = $.ajax({
		url: 'http://api.worldbank.org/countries', 
		type: 'GET', 
		data: {  
			per_page: 300,  
			format: 'JSON'
		}
	}); 
	requestID.done(function(response){
		renderID(response);  
		console.log(response); 
	}); 
}); 

var renderID = function(data) {
	$("#id-data").empty(); 
	var template = $("#world-map-template8").html(); 
	var output = Mustache.render(template, {income: data[1][106].incomeLevel.value}); 
	$("#id-data").html(output); 
} // ends render

//IRAN

$("#world-map").contents().find("#IR").click( function(e){ 
	var requestIR = $.ajax({
		url: 'http://api.worldbank.org/countries', 
		type: 'GET', 
		data: {  
			per_page: 300,  
			format: 'JSON'
		}
	}); 
	requestIR.done(function(response){
		renderIR(response);  
		console.log(response); 
	}); 
}); 

var renderIR = function(data) {
	$("#ir-data").empty(); 
	var template = $("#world-map-template9").html(); 
	var output = Mustache.render(template, {income: data[1][111].incomeLevel.value}); 
	$("#ir-data").html(output); 
} // ends render

//South Africa

$("#world-map").contents().find("#ZA").click( function(e){ 
	var requestZA = $.ajax({
		url: 'http://api.worldbank.org/countries', 
		type: 'GET', 
		data: {  
			per_page: 300,  
			format: 'JSON'
		}
	}); 
	requestZA.done(function(response){
		renderZA(response);  
		console.log(response); 
	}); 
}); 

var renderZA = function(data) {
	$("#za-data").empty(); 
	var template = $("#world-map-template10").html(); 
	var output = Mustache.render(template, {income: data[1][111].incomeLevel.value}); 
	$("#za-data").html(output); 
} // ends render

//CHARTS PORTION

//Mean project temperature for U.S. from 2080 to 2099 in C CHART

var ctx = document.getElementById("usa-future").getContext("2d");

var data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
	datasets: [
		{
			label: "CO2 emissions", 
			fillColor: "rgba(220,220,220,0.2)",
	    strokeColor: "rgba(220,220,220,1)",
	    pointColor: "rgba(220,220,220,1)",
	    pointStrokeColor: "#fff",
	    pointHighlightFill: "#fff",
	    pointHighlightStroke: "rgba(220,220,220,1)",
	    data: ['-3.89', '-2.86', 1.13, 7.04, 12.78, 18.14, 21.01, 20.07, 15.81, 9.41, 2.45, '-1.94' ]
		}
	]// ends datasets 

} // ends data

var options = {
	scaleShowGridLines : false
}

var secondLineChart = new Chart(ctx).Line(data, options); 

//Top 10 global emissions CHART

var data = [
	{
		value: 27, 
		color:"#F7464A",
    highlight: "#FF5A5E",
    label: "Top 10 countries"
	}, 
	{
		value: 73, 
		color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Others"
	}
] // data

var options = {
	percentageInnerCutout : 50,
	animationSteps : 100,
	animationEasing : "easeOutBounce",
	animateRotate : true,
	animateScale : false,
}

ctx = $("#greenhouse-gas").get(0).getContext("2d"); 
var myDoughnutChart = new Chart(ctx).Doughnut(data,options);


// NOAA DATA REQUESTS

//ALASKA

	$('#alaska').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:02',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//ALABAMA

	$('#alabama').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:01',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//ARKANSAS

	$('#arkansas').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:05',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//ARIZONA

	$('#arizona').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:04',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//CALIFORNIA

	$('#california').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:06',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//COLORADO

	$('#colorado').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:08',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//CONNECTCUT

		$('#connecticut').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:09',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//DC

	$('#dc').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:11',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//DELAWARE

	$('#delaware').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:10',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//FLORIDA

	$('#florida').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:12',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//GEORGIA

	$('#georgia').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:13',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//HAWAII

	$('#hawaii').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:15',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//IOWA

	$('#iowa').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:19',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//IDAHO

	$('#idaho').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:16',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//ILLINOIS

	$('#illinois').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:17',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//INDIANA

	$('#indiana').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:18',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//KANSAS

	$('#kansas').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:20',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//KENTUCKY

	$('#kentucky').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:21',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//LOUISIANA

	$('#louisiana').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:22',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//MASSACHUSETTS

	$('#massachusetts').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:25',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//MARYLAND

	$('#maryland').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:24',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//MAINE

	$('#maine').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:23',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//MICHIGAN

	$('#michigan').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:26',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//MINNESOTA

	$('#massachusetts').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:27',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//MISSOURI

	$('#missouri').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:29',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//MISSISSIPPI

	$('#mississippi').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:28',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//MONTANA

	$('#montana').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:30',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//NORTH CAROLINA

	$('#north-carolina').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:37',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//NORTH DAKOTA

	$('#north-dakota').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:38',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//NEBRASKA

	$('#nebraska').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:31',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//NEW HAMPSHIRE

	$('#new-hampshire').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:33',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//NEW JERSEY

	$('#new-jersey').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:34',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//NEW MEXICO

	$('#new-mexico').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:35',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//NEVADA

	$('#nevada').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:32',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//NEW YORK

	$('#new-york').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:36',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//OHIO

	$('#ohio').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:39',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

			//OKLAHOMA

	$('#oklahoma').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:40',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//OREGON

	$('#oregon').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:41',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//PENNSYLVANIA

	$('#pennsylvania').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:42',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//RHODE ISLAND

	$('#rhode-island').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:44',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//SOUTH CAROLINA

	$('#south-carolina').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:45',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//SOUTH DAKOTA

	$('#south-dakota').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:46',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//TENNESSEE

	$('#tennessee').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:47',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//TEXAS

	$('#texas').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:48',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//UTAH

	$('#utah').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:49',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//VIRGINIA

	$('#virginia').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:51',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//VERMONT

	$('#vermont').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:50',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//WASHINGTON

	$('#washington').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:53',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//WISCONSIN

	$('#wisconsin').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:55',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//WEST VIRGINIA

	$('#west-virginia').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:54',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

		//WYOMING

	$('#wyoming').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',  
				locationid: 'FIPS:56',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: NOAA_TOKEN // put this in an environment variable 
			}
		}); 
		requestNOAA.done(
			function(response){
				renderNOAAData(response); 
				console.log(response); 
			}); 
}); //ends onclick

	//DISPLAY 50 STATES DATA 

	var renderNOAAData = function(data) {
		$("#results").empty(); 
		var template = $("#noaa-template").html(); 
		var output = Mustache.render(template, { min: data.results[11].value, max: data.results[13].value}); 
		$("#results").html(output); 
	}

}) // doc.ready









