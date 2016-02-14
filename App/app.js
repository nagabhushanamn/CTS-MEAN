/**
 * http://usejsdoc.org/
 */

// JS using DOM API , find Elements to something on-event

// plain-script

//document.addEventListener('DOMContentLoaded', function(e) {
//	
//	console.log('DOM ready...');
//
//	var box = document.querySelector('.jumbotron');
//	var showBtn = document.querySelector('.btn-success');
//	var hideBtn = document.querySelector('.btn-danger');
//
//	showBtn.addEventListener('click', function(e) {
//		box.style.display = 'block';
//	});
//	hideBtn.addEventListener('click', function(e) {
//		box.style.display = 'none';
//	});
//
//});

//
// window.onload=function(){
// console.log('window loaded everthing.. DOM , CSS , images , farmes ...');
// };



// jquery

$(document).ready(function(){
	var box=$('.jumbotron');
	$('.btn-success').click(function(event){
		box.css('display','block');
	});	
	$('.btn-danger').click(function(event){
		box.css('display','none');
	});	
});






