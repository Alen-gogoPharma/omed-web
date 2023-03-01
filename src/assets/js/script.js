(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(2000).fadeOut(500);
		}
	}
	


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="icon icon-chevron-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}

$(".default_option").click(function(){
  $(".dropdown ul").addClass("active");
});

$(".dropdown ul li").click(function(){
  var text = $(this).text();
  $(".default_option").text(text);
  $(".dropdown ul").removeClass("active");
});
	
	//Hidden Sidebar
	if ($('.hidden-bar').length) {
		var hiddenBar = $('.hidden-bar');
		var hiddenBarOpener = $('.nav-toggler');
		var hiddenBarCloser = $('.hidden-bar-closer');
		$('.hidden-bar-wrapper').mCustomScrollbar();
		
		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			hiddenBar.addClass('visible-sidebar');
		});
		
		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			hiddenBar.removeClass('visible-sidebar');
		});
	}
	
	
	// Paroller
	if($('.paroller').length){
		$('.paroller').paroller();
	}
	
	
	
	
	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// appending expander button
		menuWrap.find('.dropdown').children('a').append(function () {
			return '<button type="button" class="btn expander"><i class="icon  icon-chevron-right"></i></button>';
		});
		// hidding submenu
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('.btn.expander').each(function () {
			$(this).on('click', function () {
				$(this).parent() // return parent of .btn.expander (a)
					.parent() // return parent of a (li)
						.children('ul').slideToggle();

				// adding class to expander container
				$(this).parent().toggleClass('current');
				// toggling arrow of expander
				$(this).find('i').toggleClass('fa-angle-right fa-angle-down');

				return false;

			});
		});
	}

	hiddenBarMenuConfig();
	

	//Banner Carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			//animateOut: 'slideOutUp',
    		//animateIn: 'fadeDown',
			loop:true,
			margin:0,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="icon icon-chevron-left"></span>', '<span class="icon icon-chevron-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});    		
	}
	
	
	
	
	
	//Team Carousel
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
			animateOut: 'slideOutUp',
    		animateIn: 'fadeDown',
			loop:true,
			margin:30,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="icon icon-chevron-right"></span>', '<span class="icon icon-chevron-left"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1100:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}

	
	
	
	//
	//====================================================================//
	// Progress Bar
	//====================================================================//
	//
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	

	

	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	//Sortable Masonary with Filters
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	//Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }



	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});


    /*=============================================================
                fixed header
        =========================================================================*/


    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".xs-sticky-header").removeClass("IsSticky animated fadeInDown");
        } else {
            $(".xs-sticky-header").addClass("IsSticky animated fadeInDown");
        }

        if ($(window).width() < 991) {
            $('.xs-sticky-header').removeClass('IsSticky animated fadeInDown');
        }
    });





    // $( '.omed-navbar, .mobile-nav, .cta' ).find( 'a[href*="#"]:not([href="#"])' ).on('click', function () {
    //     if ( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) && location.hostname == this.hostname ) {
    //         var target = $( this.hash );
    //         target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
    //         if ( target.length ) {
    //             $( 'html,body' ).animate( {
    //                 scrollTop: ( target.offset().top - 100 )
    //             }, 1000 );
    //             if ( $( '.navbar-toggle' ).css( 'display' ) != 'none' ) {
    //                 $( this ).parents( '.container' ).find( ".navbar-toggle" ).trigger( "click" );
    //             }
    //             return false;
    //         }
    //     }
    // } );







})(window.jQuery);