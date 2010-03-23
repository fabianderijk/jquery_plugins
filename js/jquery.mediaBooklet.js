/*
 * jQuery mediaBooklet plugin
 *
 * Released: 2009-11-24
 * Version: 1.0
 *
 * Copyright (c) 2009 Fabian de Rijk, Total Active Media
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 */
(function($){

 	$.fn.extend({ 

 		mediaBooklet: function(options) {
			/*
			 * Usage:
			 * $('#divname').mediaBooklet();
			 * Available options:
			 * 	showTime: The time a single item is showed in milliseconds if autoStart is set to true, defaults to 7500
			 * 	orientation: The orientation the slides are slide when the slide effect is chosen. Defaults to horizontal
			 * 	childContainerClass: The classname of the divs where the actual items are in, defaults to .items
			 * 	itemType: The type of element, defaults to img
			 * 	navClass: The class where the navigational buttons are in, defaults to .navigation
			 * 	prevClass: The class of the div where the previous button is in, defaults to .prev
			 * 	nextClass: The class of the div where the next button is in, defaults to .next
			 *	pagerClass: The class of the div where the pager is in, defaults to .pager
			 *  pagerItemClass: The class of the pager item div, defaults to .pager-item
			 * 	activeClass: The class added to the shown item, defaults to active (notice the dot not being there)
			 * 	autoStart: Wether or not to start the mediaBooklet on page load and automatically slide an item on the number of miliseconds sepcified in showTime
			 * 	effect: The effect type used to show/hide a news item, defaults to slide, other options: fade
			 */

			var defaults = {
				showTime: 7500,
				orientation: 'horizontal',
				childContainerClass: '.items',
				itemType: 'img',
				navClass: '.navigation',
				prevClass: '.prev',
				nextClass: '.next',
				pagerClass: '.pager',
				pagerItemClass: '.pager-item',
				activeClass: 'active',
				autoStart: true,
				effect: 'slide'
			}

			var options =  $.extend(defaults, options);
			var obj = $(this);
			var childContainer = obj.children(options.childContainerClass); 
			var pagerContainer = $(options.pagerClass);
			var childLength = childContainer.children(options.itemType).length;
			var firstChild = childContainer.children(options.itemType+':first');
			var lastChild = childContainer.children(options.itemType+':last');
			var ani = false;
			var active; var startPos; var t; var count = childLength; var img = 1; var activePager;

  		return this.each(function() {
				if(childLength > 1) {
					$(options.navClass).show();
					if(options.orientation != 'horizontal') {
						$(options.navClass).addClass('vertical');
					}
					$(options.prevClass).live('click', goPrev);
					$(options.nextClass).live('click', goNext);
					$(options.pagerItemClass).live('click', goPager);
					firstChild.addClass(options.activeClass);
					
					childContainer.children(options.itemType).each(function() {
						if(!$(this).hasClass(options.activeClass)) {
							if(options.effect == 'slide') {
								if(options.orientation == 'horizontal') {
									$(this).addClass('img_'+img).css('left', $(this).width()).attr('rel', img);
								} else {
									$(this).addClass('img_'+img).css('top', $(this).height()).attr('rel', img);
								}
							} else {
								$(this).addClass('img_'+img).css('z-index', count).attr('rel', img);
							}
						} else {
							$(this).addClass('img_'+img).css('z-index', count).attr('rel', img);
						}
						count--;
						img++;
					});
					
					if(options.autoStart){
						startTimer();
					}
				}
				if($(options.navClass).length) {
					$(options.navClass).css('z-index', childLength + 1);
				}
				if($(options.pagerClass).length) {
					for(var x = 1; x < childLength + 1; x++) {
						if(x == 1) {
							$(options.pagerClass).append('<div class="' + options.pagerItemClass.replace('.', '') + ' pager-item-' + x + ' active" rel="pager-item-' + x + '"></div>');
							activePager = $('.pager-item-'+x);
						} else {
							$(options.pagerClass).append('<div class="' + options.pagerItemClass.replace('.', '') + ' pager-item-' + x + '" rel="pager-item-' + x + '"></div>');
						}
					}
				}
  		});
			
			function goPrev(){
				if (!ani) {
					ani = true;
					active = childContainer.children('.' + options.activeClass);
					activePager = pagerContainer.children('.active');
					var prev = active.prev();
					if (prev.length == 0) {
						prev = lastChild;
					}
					switch(options.effect) {
						case 'slide':
						default:
							doSlidePrev(prev);
							break;
						case 'fade':
							doFade(prev);
							break;
					}
				}
			}
			
			function goNext(){
				if(!ani) {
					ani = true;
					active = childContainer.children('.'+options.activeClass);
					activePager = pagerContainer.children('.active');
					var next = active.next();
					if(next.length == 0) {
						next = firstChild;
					}
					switch (options.effect) {
				  	case 'slide':
				  	default:
				  		doSlideNext(next);
				  		break;
				  	case 'fade':
				  		doFade(next);
				  		break;
				  }
				}
			}
			
			function goPager(evt) {
				if(!ani) {
					var t = $(evt.originalTarget);
					var id = parseInt(t.attr('rel').replace('pager-item-', ''));
					ani = true;
					active = childContainer.children('.'+options.activeClass);
					activePager = pagerContainer.children('.active');
					var next = $('.img_'+id);
					if(next.length == 0) {
						next = firstChild;
					}
					switch (options.effect) {
						case 'slide':
				  	default:
				  		doSlideNext(next);
				  		break;
		  			case 'fade':
							doFade(next);
							break;
		  		}
				}
			}
			
			function doSlideNext(next) {
				switch (options.orientation) {
	  			case 'horizontal':
	  			default:
	  				startPos = active.width();
	  				next.css('left', startPos);
	  				active.animate({
	  					left: 0 - active.width()
	  				}, 500, 'swing');
	  				next.animate({
	  					left: 0
	  				}, 500, 'swing', function(){
	  					active.removeClass(options.activeClass);
	  					next.addClass(options.activeClass);
							activePager.removeClass('active');
							$('.pager-item-' + next.attr('rel')).addClass('active');
	  					if (options.autoStart) {
	  						resetTimer();
	  					}
	  					ani = false;
	  				});
	  				break;
	  			case 'vertical':
	  				startPos = 0 - active.height();
	  				next.css('top', startPos);
	  				active.animate({
	  					top: active.height()
	  				}, 250, 'swing');
	  				next.animate({
	  					top: 0
	  				}, 250, 'swing', function(){
	  					active.removeClass(options.activeClass);
	  					next.addClass(options.activeClass);
							activePager.removeClass('active');
							$('.pager-item-' + next.attr('rel')).addClass('active');
	  					if (options.autoStart) {
	  						resetTimer();
	  					}
	  					ani = false;
	  				});
	  				break;
	  		}
			}
			
			function doSlidePrev(prev) {
				switch (options.orientation) {
					case 'horizontal':
					default:
						startPos = 0 - active.width();
						prev.css('left', startPos);
						active.animate({
							left: active.width()
						}, 500, 'swing');
						prev.animate({
							left: 0
						}, 500, 'swing', function(){
							active.removeClass(options.activeClass);
							prev.addClass(options.activeClass);
							activePager.removeClass('active');
							$('.pager-item-' + prev.attr('rel')).addClass('active');
							if (options.autoStart) {
								resetTimer();
							}
							ani = false;
						});
						break;
					case 'vertical':
						startPos = active.height();
						prev.css('top', startPos);
						active.animate({
							top: 0 - active.height()
						}, 250, 'swing');
						prev.animate({
							top: 0
						}, 250, 'swing', function(){
							active.removeClass(options.activeClass);
							prev.addClass(options.activeClass);
							activePager.removeClass('active');
							$('.pager-item-' + prev.attr('rel')).addClass('active');
							if (options.autoStart) {
								resetTimer();
							}
							ani = false;
						});
						break;
				}
			}
			
			function doFade(next) {
				active.animate({
	  			opacity: 0
	  		}, 500, 'swing');
	  		next.animate({
	  			opacity: 1
	  		}, 250, 'swing', function(){
	  			active.removeClass(options.activeClass);
	  			next.addClass(options.activeClass);
					activePager.removeClass('active');
					$('.pager-item-' + next.attr('rel')).addClass('active');
	  			if (options.autoStart) {
	  				resetTimer();
	  			}
	  			ani = false;
	  		});
			}
			
			function startTimer(){
				var delay = options.showTime;
				t = setTimeout(function() {
					goNext();
				}, delay);
			}
			
			function resetTimer(){
				clearTimeout(t);
				startTimer();
			}

  	}
	});
	
})(jQuery);