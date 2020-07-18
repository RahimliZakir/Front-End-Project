$(document).ready(function () {
    //AJAX
 
    $.ajax({
       type: "GET",
       url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors",
 
 
       success: function (response) {
          $.each(response, function (indexInArray, item) {
 
             let owlItem = $('<div/>', {
                class: 'card item our-expert-doctors-cards'
             });
 
             let ajaxCards = `
         <div class="our-expert-doctors-img-div">
             <div class="clip-path-area"></div>
             <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/${item.image}" class="card-img-top" alt="Demo">
             <div class="our-expert-doctors-img-div-hover">
                 <ul>
                     <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                     <li class="mx-1"><a href="#"><i class="fab fa-twitter"></i></a></li>
                     <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                 </ul>
             </div>
         </div>
         <div class="card-body our-expert-doctors-cards-body">
             <h5>${item.name}</h5>
             <p class="spaciality">${item.profession}</p>
             <p class="card-text text-center">
                 ${item.description}
             </p>
         </div>`
 
 
 
             $(owlItem).html(ajaxCards);
             $('.our-expert-doctors-bottom').append(owlItem);
 
 
          });
       },
 
 
    }).done(function () {
       $('.our-expert-doctors-bottom').owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
          mouseDrag: false,
          autoplay: true,
          autoplayHoverPause: true,
          dots: false,
          autoplayTimeout: 7500,
          responsive: {
             0: {
                items: 1
             },
             768: {
                items: 2
             },
             1200: {
                items: 3
             }
          }
       })
       $('.loader').fadeOut(2000, function () {
          $('.loader').removeClass('gorunur')
       }
       );
 
 
 
       //AJAX   


       //MagnificPopUp

      $('.popup-youtube').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false
      });
 
 
 
       //PluginCounterUp
       $('.saygac').counterUp(
          {
             time: 2500
          }
       );
       //PluginCounterUp
 
 
       let navbar = $('.real-nav');
 
 
       //OwlCarousel2
 
       
 
       //Owl2CarouselPatientFeedback
 
       $('.patient-feedback-owl').owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
          mouseDrag: false,
          autoplay: true,
          autoplayHoverPause: true,
          center: true,
          dots: false,
          autoplayTimeout: 7500,
          responsive: {
             0: {
                items: 1
             },
             768: {
                items: 2
             },
             1200: {
                items: 3
             }
          }
       })
 
       //Owl2CarouselPatientFeedback
 
 
       //ValidatorPlugin
       $('#join-from').validate();
 
       let inputEmail = $('.join-our-newsletter-form');
       let ReGex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       let formGroup = $('.join-our-newsletter-group');
       let formButton = $('#join-btn');
 
       formButton.on('click', function (e) {
          e.preventDefault();
          if (ReGex.test(inputEmail.val()) == false) {
             formGroup.addClass('input-animation');
             setTimeout(() => {
                formGroup.removeClass('input-animation');
             }, 1000);
          }
          else if (inputEmail.val() == 0) {
             formGroup.addClass('input-animation');
             setTimeout(() => {
                formGroup.removeClass('input-animation');
             }, 1000);
          }
          else {
             alert(`${inputEmail.val()} adlı istifadəçi, abunəliyiniz təsdiqləndi, xoş gəlmisiniz!`); inputEmail.val("");
          }
       })
 
       //ValidatorPlugin
 
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
 
 });
 