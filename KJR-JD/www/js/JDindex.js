//轮播图
//当前轮播到第几张了
	var index = 0;
	var last = 7;
	//上一张的index是多少？
	function getIndexPrev(){
		return  index <= 0 ? $(".banner .banner_img_a").length-1:index-1;
	}
	//下一张的index是多少？
	function getIndexNext(){
		return index >= $(".banner .banner_img_a").length-1 ? 0:index+1;
	}
	//显示图片
	function showPrevImage(){
		index = getIndexPrev();
		$(".banner .banner_img_a").eq(last).css({
			left: 0,
		}).finish().show().animate({
			left: 790,
		},500,function(){
			$(this).hide().css({
				left: -790,
			});
		});
		$(".banner .banner_img_a").eq(index).css({
			left: -790,
		}).finish().show().animate({
			left: 0,
		},500);
		$(".banner .indicator i").removeClass("cur");
		$(".banner .indicator i").eq(index).addClass("cur");
		last = index;
	}
	function showNextImage(){
		index = getIndexNext();
		$(".banner .banner_img_a").eq(last).css({
			left: 0,
		}).finish().show().animate({
			left: -790,
		},500,function(){
			$(this).hide().css({
				left: 790,
			});
		});
		$(".banner .banner_img_a").eq(index).css({
			left: 790,
		}).finish().show().animate({
			left: 0,
		},500);
		$(".banner .indicator i").removeClass("cur");
		$(".banner .indicator i").eq(index).addClass("cur");
		last = index;
	}
	//定时器轮播
	var timer = setInterval(showNextImage,3000);
	//鼠标放到指示器时的效果
	 $('.banner .indicator i').hover(function(){
            window.clearInterval(timer);
            index = $('.banner .indicator i').index(this) - 1;
            showNextImage();
       },function(){
            timer = window.setInterval(showNextImage,3000);
    	}) ;

      $('.banner .page span').hover(function(){
           window.clearInterval(timer);
      },function(){
           timer = window.setInterval(showNextImage,3000);
       }) ;
       
       //改变上一张下一张
       $('.banner .page .prev').click(function(){
            showPrevImage();
        });
        $('.banner .page .next').click(function(){            
			showNextImage();
        });
        


//倒计时
 window.jQuery(function ($) {
            "use strict";
            $('.alt-2').countDown({
                css_class: 'countdown-alt-2'
            });
        });
        
//秒杀 左右
$("#shelf2-1-left").hover(
	function(){
	$("#shelf2-1-left .page").css("display","block");
	
    },
    function(){
    $("#shelf2-1-left .page").css("display","none");
    
  }
    );


//banner2
var banner2src1 = "image/秒杀2-1.jpg";
var banner2src2 = "image/秒杀2-2.jpg";

function banner2(){
	oimg.src = banner2src2;
	c = banner2src1;
	banner2src1 = banner2src2;
	banner2src2 = c;
	setTimeout("banner2()",3000);
	
	
}
window.onload = banner2;


//滚动监听
$(function(){

		$(window).scroll(function(){
			var current = 0;
			$('.floor').each(function(i,ele){
//				console.log(i + ':' + ($(ele).offset().top-$(window).scrollTop()-200));				
				if (($(ele).offset().top-$(window).scrollTop()-(205+i*45)) <= 0) {
					current = $(ele).index();
				}
			});
//			console.log(current);
            if (current != 0) {
            	    $('#myScrollspy').css("display","block");
            }else{
            	    $('#myScrollspy').css("display","none");
            }
			$('#myScrollspy ul li a').each(function(){
				$(this).removeClass('active');
			}).eq(current).addClass('active');
		});
	});
	


//促销公告
$('#cuxiao').css("border-bottom","2px #FA1110 solid");
$('#gonggao').hover(
	function(){
		$('#cuxiao').css("border-bottom","none");
		$('#gonggao').css("border-bottom","2px #FA1110 solid");
		$('#shop-list3-2-2').css("display","none");
		$('#shop-list3-2-2-1').css("display","block");
	}
)
$('#cuxiao').hover(
	function(){
		$('#gonggao').css("border-bottom","none");
		$('#cuxiao').css("border-bottom","2px #FA1110 solid");
			$('#shop-list3-2-2').css("display","block");
		$('#shop-list3-2-2-1').css("display","none");
	}
)

//icon
$('.3-3-s').hover(
	function(){
		$('#shop-list3-3').css("display","none");
		$('#shop-list3-3-s').css("display","block");
	}
)

$('#huafei').hover(
	function(){
		$('#shop-list3-3-s a').css("border-top","none");
		$(this).css("border-top","2px #FA1110 solid");
		$('#shop-list3-3-s div').css("display","none");
		$('#huafei-s').css("display","block");

	}
)


$('#jipiao').hover(
	function(){
		$('#shop-list3-3-s a').css("border-top","none");
		$(this).css("border-top","2px #FA1110 solid");
			$('#shop-list3-3-s div').css("display","none");
		$('#jipiao-s').css("display","block");
	}
)


$('#jiudian').hover(
	function(){
		$('#shop-list3-3-s a').css("border-top","none");
		$(this).css("border-top","2px #FA1110 solid");
			$('#shop-list3-3-s div').css("display","none");
		$('#jiudian-s').css("display","block");
	}
)


$('#youxi').hover(
	function(){
		$('#shop-list3-3-s a').css("border-top","none");
		$(this).css("border-top","2px #FA1110 solid");
			$('#shop-list3-3-s div').css("display","none");
		$('#youxi-s').css("display","block");
	}
)

