(function($) {
	$.fn.blurfocus = function(options) {
		$.fn.blurfocus.defaults = {
			content : '',
			focusClass : 'focus',
			changedClass : 'changed',
			checkSubmit : false,
			blurredClass : '',
			clearResults : false
		};
		var opts = $.extend({}, $.fn.blurfocus.defaults, options);
		return this.each(function() {
			$(this).addClass(opts.blurredClass);
			if (opts.clearResults) {
				$(this).val(opts.content);
			}
			$(this).focus(
					function() {
						var curVal = $(this).val();
						if (curVal == opts.content) {
							$(this).val('').addClass(opts.focusClass)
									.removeClass(opts.blurredClass);
						}
					});
			$(this).blur(
					function() {
						if ($(this).val() == '') {
							$(this).val(opts.content).addClass(
									opts.blurredClass).removeClass(
									opts.focusClass);
						}
					});
			$(this).keydown(function() {
				$(this).addClass(opts.changedClass);
			});
			
			if (opts.checkSubmit == true) {
				var el = $(this);
				var submit = $(this).parents('form').find('input[type="submit"], button[type="submit"]');
				submit.click(function() {
					if(!el.hasClass(opts.changedClass)) {
						el.val('');
					}
				});
			}
		});
	};
})(jQuery);