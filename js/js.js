$(document).ready(function() {

   $('.menu__link_m_f').magnificPopup();

   $('.order__btn').magnificPopup();
   $('.become__btn').magnificPopup();
   $('.directory__exepted_btn').magnificPopup();
   $('.footer__link').magnificPopup();

 /* $('.menu__link_m2').magnificPopup();*/

  $('.slickp-slider').slick({
  arrows: true,
  dots: false,
  infinite: false,
  speed: 300,

  prevArrow: '<button type="button" class="slider__btn_left"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow: '<button type="button" class="slider__btn_right"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  })

  $('.slickp-slider1').slick({
  arrows: false,
  dots: true,
  })

  $('.contractor__exit').on('click', function(){
    $('.order__video').hide();
  })


	$('.menu__link_active').on('click', function(e){
    e.preventDefault();
  	$('.menu__mobile').slideToggle();
  })

  $('.view__more_btn').on('click', function(e){
    e.preventDefault();
    $('.tarif__plan_hide').slideToggle();
  })

  $('.img__cancel').on('click', function(e){
    e.preventDefault();
  	$('.menu__mobile').slideToggle();
  })

	$('.menu__link_m').on('click', function(e){
    e.preventDefault();
  	$('.menu__mobile').slideUp();
  })  

  $('.implementers___link1').on('click', function(e){
  	e.preventDefault();
  	$('.implementers__block1').show();
  	$('.implementers__block2').hide();
  	$('.implementers__block3').hide();
  	$('.implementers__block4').hide();
  	$('.implementers__block5').hide();
  	$('.implementers__block6').hide();
  })

    $('.implementers___link2').on('click', function(e){
  	e.preventDefault();
  	$('.implementers__block2').show();
  	$('.implementers__block1').hide();
  	$('.implementers__block3').hide();
  	$('.implementers__block4').hide();
  	$('.implementers__block5').hide();
  	$('.implementers__block6').hide();
  })

    $('.implementers___link3').on('click', function(e){
  	e.preventDefault();
  	$('.implementers__block3').show();
  	$('.implementers__block1').hide();
  	$('.implementers__block2').hide();
  	$('.implementers__block4').hide();
  	$('.implementers__block5').hide();
  	$('.implementers__block6').hide();
  })

  $('.implementers___link4').on('click', function(e){
  	e.preventDefault();
  	$('.implementers__block4').show();
  	$('.implementers__block1').hide();
  	$('.implementers__block2').hide();
  	$('.implementers__block3').hide();
  	$('.implementers__block5').hide();
  	$('.implementers__block6').hide();
  })

  $('.implementers___link5').on('click', function(e){
  	e.preventDefault();
  	$('.implementers__block5').show();
  	$('.implementers__block1').hide();
  	$('.implementers__block2').hide();
  	$('.implementers__block4').hide();
  	$('.implementers__block3').hide();
  	$('.implementers__block6').hide();
  })

  $('.implementers___link6').on('click', function(e){
  	e.preventDefault();
  	$('.implementers__block6').show();
  	$('.implementers__block1').hide();
  	$('.implementers__block2').hide();
  	$('.implementers__block4').hide();
  	$('.implementers__block5').hide();
  	$('.implementers__block3').hide();
  })

   /*--------animate------*/
   
   $(window).scroll(function() {
    $('.footer_c').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('rubberBand');
      }
    });
  }); 

   $(window).scroll(function() {
    $('.footer_b').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('rubberBand');
      }
    });
  }); 

   $(window).scroll(function() {
    $('.footer_a').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('rubberBand');
      }
    });
  }); 

   $(window).scroll(function() {
    $('.plan_a').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('rubberBand');
      }
    });
  }); 

  $(window).scroll(function() {
    $('.plan__title').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInUp');
      }
    });
  }); 

  $(window).scroll(function() {
    $('.service_a').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('rubberBand');
      }
    });
  });

  $(window).scroll(function() {
    $('.service__title').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInUp');
      }
    });
  });

   $(window).scroll(function() {
    $('.advantage__2_a').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('bounceInDown');
      }
    });
  });


   $(window).scroll(function() {
    $('.advantage__2__title').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInUp');
      }
    });
  });

  $(window).scroll(function() {
    $('.advantage_1__img3').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('zoomInLeft');
      }
    });
  });

   $(window).scroll(function() {
    $('.advantage_1__img2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('zoomInRight');
      }
    });
  });

   $(window).scroll(function() {
    $('.advantage_1__title').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInUp');
      }
    });
  });

   $(window).scroll(function() {
    $('.implementers___link').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('zoomIn');
      }
    });
  });

   $(window).scroll(function() {
    $('.implementers_1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInLeft');
      }
    });
  });




 

});


$(document).ready(function() {
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});


var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
  var label  = input.nextElementSibling,
    labelVal = label.innerHTML;

  input.addEventListener( 'change', function( e )
  {
    var fileName = '';
    if( this.files && this.files.length > 1 )
      fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    else
      fileName = e.target.value.split( '\\' ).pop();

    if( fileName )
      label.querySelector( 'span' ).innerHTML = fileName;
    else
      label.innerHTML = labelVal;
  });
});


/*--------Плавный скролл--------*/

$(document).ready(function(){
      $("#menu").on("click","a", function (event) {
          //отменяем стандартную обработку нажатия по ссылке
          event.preventDefault();
   
          //забираем идентификатор бока с атрибута href
          var id  = $(this).attr('href'),
   
          //узнаем высоту от начала страницы до блока на который ссылается якорь
              top = $(id).offset().top;
           
          //анимируем переход на расстояние - top за 1500 мс
          $('body,html').animate({scrollTop: top-69}, 1500);
      });
  });