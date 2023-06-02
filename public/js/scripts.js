(function(jQuery){
	
	var docW = 0;

	jQuery(function() {
		
		// --------------------------------------------------------------------
		// SITE MENUS: Handler for the Mobile Menu button
		// --------------------------------------------------------------------
		
		jQuery('.mobile-menu button').on("click", function(){
			if(jQuery('#nav').is(":visible")) {
				jQuery('#nav').slideUp();
			} else {
				docW = jQuery(document).width();
				jQuery('#nav').slideDown();
			}
		});

		// --------------------------------------------------------------------
		// WINDOW EVENTS: Handler for browser resizing
		// --------------------------------------------------------------------
		jQuery(window).resize(function() {
			scale();
		});
		
		
	});
	

	// --------------------------------------------------------------------
	// SITE MENUS: Support Functions
	// --------------------------------------------------------------------
	
	// Clear display formatting on the primary menu
	function resetMobileMenu() {
		jQuery('#nav').css('display','');
	}
	
	// --------------------------------------------------------------------
	// WINDOW EVENTS: Handler for browser resizing
	// --------------------------------------------------------------------
	
	// Handler for browser scaling
	function scale() {
		var w = jQuery(document).width();
		if(w !== docW) {
			resetMobileMenu();
		}
	}


})(jQuery);// JavaScript Document