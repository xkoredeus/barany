$(function() {
  //preloader
  $(window).on('load', function () {
      $('.preloader').fadeOut();
  });
  $('.life__in').owlCarousel({
      items: 1,
      loop: false,
      margin: 30,
      navText: [
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 56" width="33" height="56"><use xlink:href="#slider_arrow-left"></use></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 56" width="33" height="56"><use xlink:href="#slider_arrow-right"></use></svg>',
      ],
      responsive : {
        0   : {
            items: 1,
            nav: false,
            dots: true,
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 2,
            dots: false,
            nav: true,
        },
        1040 : {
            items: 3
        }
      }
  });
  $('.weight__slider').owlCarousel({
      items: 1,
      loop: false,
      margin: 30,
      nav: true,
      dots: false,
      navText: [
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 56" width="33" height="30"><use xlink:href="#slider_arrow-left"></use></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 56" width="33" height="30"><use xlink:href="#slider_arrow-right"></use></svg>',
      ]
  });
  // tabs 
  $(document).ready(function () {
    $(".tabs__content-item:not(:first-child)").hide();
    $(".tabs__container div.tabs__content-item.active-tab").show();
    $('ul.tabs__list > li').click(function () {
      if (!($(this).hasClass('active'))) {
        var thisLi = $(this);
        var numLi = thisLi.index();
        thisLi.addClass('active').siblings().removeClass('active');
        thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
      }
    });
  });
  //hamb
  $(".hamburger__checkbox").change(function() {
    $('.header__menu').toggleClass('active');
    $('.hamburger__wrp').toggleClass('active');
    if ( $(window).width() < 1200 ) {
      $('body').toggleClass('fixed');
    }
  });
  //sell acc
  $('.btn__more').on('click', function(e){
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').find('span').html('Развернуть');
      $('.sale__descr p:not(:first-child)').slideUp();
    } else {
      $(this).addClass('active').find('span').html('Свернуть');
      $('.sale__descr p:not(:first-child)').slideDown();
    }
  });
  //quest acc
  $('.quest__item-btn').on('click', function(e){
    e.preventDefault();
    $(this)
    .toggleClass('active')
    .parents('.quest__item')
    .toggleClass('active')
    .find('.quest__item-bot')
    .slideToggle();
  });
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
  $(".anchor-link").on('click', function (e) {
      e.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
  });//hamb
  $(".hamburger__checkbox").change(function() {
    $('.header__top').toggleClass('active');
    $('.menu').toggleClass('active');
    $('body').toggleClass('fixed');
  });
});