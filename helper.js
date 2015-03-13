jQuery(document).ready(function() {
	if(jQuery('body[class*="lifestyle-pro"] .nav-secondary').size() != 0 || jQuery('body[class*="metro-pro"] .nav-primary').size() != 0)
	{
		jQuery('.site-container').before('<a href="javascript: menu();" id="menu" class="fa fa-bars fa-lg"></a>');
		jQuery('body[class*="lifestyle-pro"] .nav-secondary, body[class*="metro-pro"] .nav-primary').prepend('<a href="javascript: menu();" id="minimenu" class="fa fa-arrow-left"></a>');
	}
});

function menu() {
	if(jQuery('.site-container').hasClass('mobileanimate'))
		jQuery('.site-container,  body[class*="lifestyle-pro"] .nav-secondary, body[class*="metro-pro"] .nav-primary, #menu').each(function(index, elem) {
			jQuery(elem).removeClass('mobileanimate');
		});
	else
		 jQuery('.site-container, body[class*="lifestyle-pro"] .nav-secondary, body[class*="metro-pro"] .nav-primary, #menu').each(function(index, elem) {
                        jQuery(elem).addClass('mobileanimate');
                });
}
