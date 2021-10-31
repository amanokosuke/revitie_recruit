$(function() {
	$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,

  responsive: [
  {
      breakpoint: 600,      // 480〜599px
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
        dots:true,
      }
    },
    ],
    });

    $('.box').bgSwitcher({
  images: ["img/bg_2.jpg", "img/bg_3.jpg"],
});
var w = $(window).width();
  var x = 1000;
	var y = 480;
	if (w <= y){
		$('header').bgSwitcher({
			images: ["img/top_2_sp.jpg", "img/top_3_sp.jpg"],
		});

	}else if (w <= x){
		$('header').bgSwitcher({
			images: ["img/top_2_pd.jpg", "img/top_3_pd.jpg"],
		});

	}else{
		$('header').bgSwitcher({
			images: ["img/top_2.jpg", "img/top_3.jpg"],
		});
	}

$('a').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  $(window).scroll(function (){

	$(".marker-animation").each(function(){
	  var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
	  var scroll = $(window).scrollTop(); //スクロールの位置を取得
	  var windowHeight = $(window).height(); //ウインドウの高さを取得
	  if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
	    $(this).addClass('active'); //クラス「active」を与える
	  }
	});
  var topBtn = $('.go_top');
  if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }

});

$(function() {
			 var $header = $('#top-head');
			 // Nav Fixed
			 $(window).scroll(function() {
					 if ($(window).scrollTop() > 350) {
							 $header.addClass('fixed');
					 } else {
							 $header.removeClass('fixed');
					 }
			 });
			 // Nav Toggle Button
			 $('#nav-toggle').click(function(){
					 $header.toggleClass('open');
			 });
	 });





});
