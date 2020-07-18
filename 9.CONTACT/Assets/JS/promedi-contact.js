$(document).ready(function () {
   //AJAX

   $('.loader').fadeOut(2000, function () {
      $('.loader').removeClass('gorunur')
   }
   );




   //AJAX   

   //ButtonClickTextShow

   let prevButton = $("#owl-top .owl-prev");
   let nextButton = $("#owl-top .owl-next");
   let h1Text = $('.normalh1')

   prevButton.on('click', function () {
      h1Text.removeClass('up-h1');
      setTimeout(() => {
         h1Text.addClass('up-h1');
      }, 250);

   });

   nextButton.on('click', function () {
      h1Text.removeClass('up-h1');
      setTimeout(() => {
         h1Text.addClass('up-h1');
      }, 250);

   });


   let ReGex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   $('#git-form').on('submit', function (e) {

      if ($('#inputText4').val().length <= 2) {
         $('#inputText4').removeClass('is-valid');
         $('#inputText4').addClass('is-invalid');
         $('#git-form').addClass('input-animation')
         setTimeout(() => {
            $('#git-form').removeClass('input-animation')
         }, 750);
         return false;
      }
      else {
         $('#inputText4').removeClass('is-invalid');
         $('#inputText4').addClass('is-valid');
      }

      if (ReGex.test($('#inputEmail4').val()) == false || $('#inputEmail4').val().length == 0) {
         $('#inputEmail4').removeClass('is-valid');
         $('#inputEmail4').addClass('is-invalid');
         $('#git-form').addClass('input-animation')
         setTimeout(() => {
            $('#git-form').removeClass('input-animation')
         }, 750);
         return false;
      }
      else {
         $('#inputEmail4').removeClass('is-invalid');
         $('#inputEmail4').addClass('is-valid');
      }

      if ($('#inputSubject4').val().length <= 3) {
         $('#inputSubject4').removeClass('is-valid');
         $('#inputSubject4').addClass('is-invalid');
         $('#git-form').addClass('input-animation')
         setTimeout(() => {
            $('#git-form').removeClass('input-animation')
         }, 750);
         return false;
      }
      else {
         $('#inputSubject4').removeClass('is-invalid');
         $('#inputSubject4').addClass('is-valid');
      }

      if ($('#inputNumber4').val().length < 10) {
         $('#inputNumber4').removeClass('is-valid');
         $('#inputNumber4').addClass('is-invalid');
         $('#git-form').addClass('input-animation')
         setTimeout(() => {
            $('#git-form').removeClass('input-animation')
         }, 750);
         return false;
      }
      else {
         $('#inputNumber4').removeClass('is-invalid');
         $('#inputNumber4').addClass('is-valid');
      }

      if ($('#exampleFormControlTextarea1').val().length == 0) {
         $('#exampleFormControlTextarea1').removeClass('is-valid');
         $('#exampleFormControlTextarea1').addClass('is-invalid');
         $('#git-form').addClass('input-animation')
         setTimeout(() => {
            $('#git-form').removeClass('input-animation')
         }, 750);
         return false;
      }
      else {
         $('#exampleFormControlTextarea1').removeClass('is-invalid');
         $('#exampleFormControlTextarea1').addClass('is-valid');
            alert('Submitted!')
      }

   })


   //ButtonClickTextShow


   let navbar = $('.real-nav');


   //OwlCarousel2


   $(window).on('scroll', function () {
      let diff = $(window).scrollTop();
      // let navbarDiff = $(navbar).offsetTop();
      if (diff >= 170) {
         $(navbar).addClass('nav-scroll');
         $('.query-nav').addClass('nav-scroll');
      }

      else {
         $(navbar).removeClass('nav-scroll');
         $('.query-nav').removeClass('nav-scroll');
      }
   })

   $('.query-i button').on('click', () => {

      if ($('.query-nav-click').hasClass('query-nav-block')) {
         $('.query-nav-click').removeClass('query-nav-block');
         $('.query-nav-click').addClass('query-nav-none');
      }
      else {
         $('.query-nav-click').removeClass('query-nav-none');
         $('.query-nav-click').addClass('query-nav-block');
      }

   })

   $(window).on('scroll', function () {
      let scrollTop = $('.scroll-top');
      let diff = $(window).scrollTop();

      if (diff >= 100) {
         scrollTop.addClass('show');
      }
      else {
         scrollTop.removeClass('show');
      }
   })

   //THIS
   let queryA = $('.query-a');

   queryA.on('click', function () {

      let navbarX = $(this).siblings();
      let result = navbarX.hasClass('navbar-collapse-block')

      $(queryA).siblings().removeClass('navbar-collapse-block');
      $(queryA).removeClass('navbarx-collapse-blue');

      if (result) {
         $(this).removeClass('navbarx-collapse-blue');
         $(navbarX).removeClass('navbar-collapse-block');
      }
      else {
         $(this).addClass('navbarx-collapse-blue');
         $(navbarX).addClass('navbar-collapse-block');
      }

   })


   //THIS



});
