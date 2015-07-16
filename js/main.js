$(document).ready(function(){
	// var tempRequestWorldBankAPI = $.ajax({
	// 	url: 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/', 
	// 	type: 'GET', 
	// 	data: {
	// 			type: 'annualavg', 
	// 			var: 'pr', 
	// 			start: 2012, 
	// 			end: 2013
	// 	}
	// }); 
	// tempRequestWorldBankAPI.done(function(response){
	// 	console.log(response); 
	// }); 



// NOAA DATA REQUESTS

//ALASKA

	$('#alaska').on("click", function(){
	var requestNOAA = $.ajax({
			url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data', 
			type: 'GET',
			data: { 
				datasetid: 'ANNUAL',
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:02',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:01',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:05',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:04',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:06',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:08',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:09',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:11',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:10',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:12',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:13',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:15',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:19',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:16',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:17',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:18',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:20',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:21',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:22',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:25',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:24',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:23',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:26',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:27',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:29',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:28',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:30',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:37',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:38',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:31',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:33',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:34',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:35',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:32',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:36',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:39',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:40',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:41',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:42',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:44',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:45',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:46',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:47',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:48',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:49',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:51',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:50',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:53',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:55',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:54',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
				// datatypeid: 'ALL', 
				// datatypeid: 'MNTM', 
				locationid: 'FIPS:56',   
				startdate: '2009-01-01', 
				enddate: '2010-01-01', 
				includemetadata: 'false'
			}, 
			headers: {
				token: 'iTAUOsOgQNrZuFuqPorfDBUTfOKAScUJ' // put this in an environment variable 
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
		var output = Mustache.render(template, data); 
		$("#results").html(output); 
	}

}) // doc.ready









