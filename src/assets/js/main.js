jQuery(document).ready(function ($) {
    "use strict";

    function omed_event_manager(_event, _selector, _fn){
        $(document).on(_event, _selector, _fn);
    }

    omed_event_manager('click', '.omed-dropdown-has > a', function (e) {
		e.preventDefault();

		var menu = $(this).parents('.omed-navbar-nav');
		var li = $(this).parent();
		var dropdown = li.find('>.omed-dropdown');

		dropdown.find('.omed-dropdown-open').removeClass('omed-dropdown-open');

		jQuery(window).on('resize', function() {
			if (jQuery(window).width() > 991) {
				jQuery(dropdown).removeClass('omed-dropdown-open');
			}
		})
		if(dropdown.hasClass('omed-dropdown-open')){
			dropdown.removeClass('omed-dropdown-open');
		}else{
			dropdown.addClass('omed-dropdown-open');
		}

	});

	omed_event_manager('click', '.omed-menu-toggler', function (e) {
		e.preventDefault();
		var parent_conatiner = $(this).parents('.omed-menu-container').parent();
		if(parent_conatiner.length < 1){
			parent_conatiner = $(this).parent();
		}
		var off_canvas_class = parent_conatiner.find('.omed-menu-offcanvas-elements');

		jQuery(window).on('resize', function() {
			if (jQuery(window).width() > 991) {
				off_canvas_class.removeClass('active');
			}
		})
		if(off_canvas_class.hasClass('active')){
			off_canvas_class.removeClass('active');
		}else{
			off_canvas_class.addClass('active');
		}

	});


}); // end ready function