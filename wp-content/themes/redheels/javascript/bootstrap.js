$(function(){
	
	$('.navi ul li a').hover(function(){
		if( ! $(this).parent().hasClass('current-menu-item')) 
		{ 
			$(this).find('.red-line').stop().animate({'opacity' : 1}, 300, "easeOutSine"); 
		}
	}, function(){
		if( ! $(this).parent().hasClass('current-menu-item')) 
		{ 
			$(this).find('.red-line').stop().animate({'opacity' : 0}, 300, "easeOutSine"); 
		}
	});
	
	$('.n-box').hover(function(){
		$(this).stop().animate({'background-color' : '#282828'}, 900, "easeOutQuint");
		$(this).find('.n-title, .n-more').stop().animate({'color' : '#fff'}, 700, "easeOutQuint");
		$(this).find('.n-more').css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-white.png")' });
		$(this).find('.dzyndzel-bialy-news').css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/dzyndzel-ciemny.png")' });
	}, function(){
		$(this).stop().animate({'background-color' : '#fff'}, 900, "easeOutQuint");
		$(this).find('.n-title, .n-more').stop().animate({'color' : '#4a4a4a'}, 700, "easeOutQuint");
		$(this).find('.n-more').css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-black.png")' });
		$(this).find('.dzyndzel-bialy-news').css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/dzyndzel-bialy.png")' });
	});
	
	$('.zobacz-wiecej').hover(function(){
		$(this).stop().animate({'background-color' : '#4a4a4a', 'color' : '#fff'}, 900, "easeOutQuint");
		$(this).css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-white.png")' });
	}, function(){
		$(this).stop().animate({'background-color' : '#fff', 'color' : '#3f3f3f'}, 900, "easeOutQuint");
		$(this).css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-black.png")' });
	});
	
	$('.show-more').hover(function(){
		$(this).stop().animate({'background-color' : '#4a4a4a', 'color' : '#fff'}, 900, "easeOutQuint");
		$(this).css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-white.png")' });
	}, function(){
		$(this).stop().animate({'background-color' : '#fff', 'color' : '#3f3f3f'}, 900, "easeOutQuint");
		$(this).css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-black.png")' });
	});
	
	$('.submit').hover(function(){
		$(this).stop().animate({'background-color' : '#4a4a4a'}, 400, "easeOutSine");
	}, function(){
		$(this).stop().animate({'background-color' : '#ed2525'}, 400, "easeOutSine");
	});
	
	$('.cta-offer').hover(function(){
		$(this).stop().animate({'background-color' : '#ed2525', 'color' : '#fff'}, 400, "easeOutSine");
		$(this).css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-white.png")' });
	}, function(){
		$(this).stop().animate({'background-color' : '#fff', 'color' : '#212121'}, 400, "easeOutSine");
		$(this).css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-black.png")' });
	});
	
	$('.cta-front-news').hover(function(){
		$(this).stop().animate({'background-color' : '#4a4a4a', 'color' : '#fff'}, 400, "easeOutSine");
		$(this).css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-white.png")' });
	}, function(){
		$(this).stop().animate({'background-color' : '#fff', 'color' : '#212121'}, 400, "easeOutSine");
		$(this).css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-black.png")' });
	});
	
	$('.adres-www').on('mouseover mouseout', function(e){
		e.type == 'mouseover' ? $(this).stop().animate({'background-color': '#ed2525', 'color' : '#fff'}, 500, "easeOutQuint") : $(this).stop().animate({'background-color': '#fff', 'color' : '#000'}, 500, "easeOutQuint");
	});
	
	$('.adres-muzyka').on('mouseover mouseout', function(e){
		e.type == 'mouseover' ? $(this).stop().animate({'background-color': '#fff', 'color' : '#000'}, 500, "easeOutQuint") : $(this).stop().animate({'background-color': '#ed2525', 'color' : '#fff'}, 500, "easeOutQuint");
	});
	
	$('.thumb').on('mouseover mouseout', function(e){
		e.type == 'mouseover' ? $(this).find('.zoom').stop().animate({'opacity' : 1}, 400, "easeOutSine") : $(this).find('.zoom').stop().animate({'opacity' : 0}, 400, "easeOutSine");
	});
	
	$('.wiecej-utworow').hover(function(){
		$(this).stop().animate({'background-color' : '#ed2625', 'color' : '#fff'}, 900, "easeOutQuint");
		$(this).css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-white.png")' });
	}, function(){
		$(this).stop().animate({'background-color' : 'transparent', 'color' : '#000'}, 900, "easeOutQuint");
		$(this).css({ 'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/cta-black.png")' });
	});
	
	$('.g-box').hover(function(){
		$(this).find('.normal').stop().animate({'opacity' : 0}, 600, "easeOutSine");
		$(this).find('.hover').stop().animate({'opacity' : 1}, 600, "easeOutSine");
	}, function(){
		$(this).find('.normal').stop().animate({'opacity' : 1}, 600, "easeOutSine");
		$(this).find('.hover').stop().animate({'opacity' : 0}, 600, "easeOutSine");
	});
	
	$('#red-box').on('mouseover mouseout', function(e){
		e.type == 'mouseover' ? $('#kropki').stop().animate({'opacity' : 1, 'left' : 230}, 500, "easeOutBack") : $('#kropki').stop().animate({'opacity' : 0, 'left' : 200}, 500, "easeOutQuint");
	});
	
	$('#rwd').click(function(evt){
		$('.navi').slideToggle('slow');
	});
	
	$('.col-40 ul li').hover(function(){
		$('.col-40 ul li').css({'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/rect-1.jpg")' });
		$(this).css({'background-image' : 'url("http://promopixel.pl/redheels/wp-content/themes/redheels/images/rect-2.jpg")' });
	});
	
	$('.show-more').click(function(evt){
		$('#toggle-container').slideToggle('slow');
		$old = $(this).html();
		$txt = $(this).data('label');
		$(this).data('label', $old);
		$(this).html($txt);
		init();
	});
	
	$('#show-hardware').click(function(evt){
		$('#sprzet').slideToggle('slow');
		$old = $(this).html();
		$txt = $(this).data('label');
		$(this).data('label', $old);
		$(this).html($txt);
	});
	
	$('.front-oferta ul li').hover(function(){
		$image = $(this).data('image');
		$('.publika img').attr('src', $image);
	});
	
	Array.prototype.max = function() 
	{
		var max = this[0];
		var len = this.length;
		for (var i = 1; i < len; i++) if (this[i] > max) max = this[i];
		return max;
	}
	
	function init()
	{
		if( $(window).width() > 480 )
		{
			$('.n-box').each(function(){
				$title = $(this).find('.n-title').height();
				$img = $(this).find('.n-img').height();
				$padd = ( $img - $title ) / 2 - 40;
				$(this).find('.n-title').css({'padding-top' : $padd});
			});
			
			$('.navi').css('display','block');
		}
		else 
		{
			$('.n-title').css({'padding-top' : 10});
			$('.navi').css('display','none');
		}
		
		$('.thumb').each(function(){
			$h = $(this).height();
			$(this).find('.zoom').css({ 'height' : $h });
		});
	}
	
	$(window).load(function(){
		init();
		$('.all-girl').animate({'opacity' : 1}, 1000, 'easeOutSine');
	});
	
	$(window).resize(function(){
		init();
	});
});