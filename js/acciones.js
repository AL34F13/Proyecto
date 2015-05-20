// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){

$('#btnhome').on('tap',function() {
 $('#inicio').show()
});
$('#btnjugar').on('tap',function(){
	$('#juego').show()
	$('#naruto').play()});
$('#btninicio').on('tap',function(){
	$('#inicio').show()});	
$('#uno').on('tap', function() {
	$('#click').append('1')
	}); 
$('#dos').on('tap', function() {
	$('#click').append('2')
	}); 
$('#tres').on('tap', function() {
	$('#click').append('3')
	}); 			
$('#cuatro').on('tap', function() {
	$('#click').append('4')
	}); 
	

});
//}); 



