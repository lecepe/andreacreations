$(document).ready(function(){
    $('.parallax').parallax({
      responsiveThreshold: 50,
    });
  });

  $(document).ready(function(){
    $('.slider').slider({
      indicators: true,
    });
  });

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
  });

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  $(document).ready(function() {
    M.updateTextFields();
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
        
  $(document).ready(function(){
    $('.modal').modal({
      opacity: 0.8,
      preventScrolling: false,
    });
  });

  $(document).ready(function() {
		if($('#contact_form').length>0){
			$('#contact_form')[0].reset(); 
		}
  });
	
$().ready(function() {
  $("#contact_form").validate({
  rules : {
    first_name : {
      required : true
    },
    last_name : {
      required : true
    },
    email : {
      required : true
    },
    message : {
      required : true
    },
  },
 });
});

  var toastEVI = '<span class="center"><b>Expérience de Vie Imminente</b> <br> Représentations prochainement!</span><a href="evi.html" class="btn-flat toast-action">RÉSERVER</a>';
