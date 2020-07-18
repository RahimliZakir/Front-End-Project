$(document).ready(function () {
    //AJAX
 
       $('.loader').fadeOut(4000, function () {
          $('.loader').removeClass('gorunur')
       }
       );
 
 
 
       //AJAX   
 
 
       let navbar = $('.real-nav');
 
 
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
 
 