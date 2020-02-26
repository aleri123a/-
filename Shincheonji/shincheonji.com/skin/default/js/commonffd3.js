
/* LNB */
$(document).ready(function(){
	/* gnb */
	$(".gnb li a.dep1").mouseenter(function(){
		if($(window).width() > 689/*1727*/){
			$(".dep2").css("display", "none");
			$(".2dp_bg_box").css("display", "block");
			$(".gnb_layer_n01").css("display", "block");
			$(this).parent().parent().find(".dep2").css("display", "block");
		}
	});
	$(".gnb li a.dep1").mouseleave(function(){
		if($(window).width() > 689/*1727*/){
			$(this).find("a.dp1").removeClass("on");
			$(".dep2").css("display", "none");
			$(".gnb_layer_n01").css("display", "none");
			$(".2dp_bg_box").css("display", "none");
		}
	});
	$(".dep2").mouseenter(function(){
		if($(window).width() > 689/*1727*/){
			$(this).css("display", "block");
			$(".gnb_layer_n01").css("display", "block");
			$(".2dp_bg_box").css("display", "block");
		}
	});
	$(".dep2").mouseleave(function(){
		if($(window).width() > 689/*1727*/){
			$(".dep2").css("display", "none");
			$(".gnb_layer_n01").css("display", "none");
			$(".2dp_bg_box").css("display", "none");
		}
	});

	$(".gnb li a.dep1").click(function(){
		if($(window).width() < 688/*1727*/){
			$(".dep2").css("display", "none");
			$(this).parent().parent().find(".dep2").css("display", "block");
			$(this).data("click", true);
			/*if(!$(this).data("click")){
				$(".dep2").css("display", "none");
				$(this).parent().parent().find(".dep2").css("display", "block");
				$(this).data("click", true);
			}else{
				$(this).parent().parent().find(".dep2").css("display", "none");
				$(this).data("click", false);
			}*/
		}
	});

	/* 패밀리 */
	$("a.family").click(function(){
		if(!$(this).data("click")){
			$(".family_wrap").stop().animate({"top":"0" }, 400);
			$(this).data("click", true);
		}else{
			$(".family_wrap").stop().animate({"top":"-135px" }, 400);
			$(this).data("click", false);
		}
	});

	$("a.mob_menu").click(function(){
		$("#gnb_wrap").css("height", "100%").css("z-index","1000000000");
		$(".gnb_wrap_new").stop().animate({"left":"0" }, 400);
		$(".wrap_all_new").css("width", "100%");
		$(".wrap_all_new").css("height", "700px");
		$(".wrap_all_new").css("overflow", "hidden");
		//$(".gnb").stop().animate({"left":"0" }, 400);
		//$(".gnb_btm_box").stop().animate({"left":"0" }, 400);
		$("a.btn_mob_close").css("display", "block");
		$(".gnb_mob_wrap").css("display", "block");
		$(this).data("click", true);
		$("a.mob_menu").data("isOpened", true);
	});
	$("a.btn_mob_close").click(function(){
		$(".gnb").stop().animate({"left":"-100%" }, 400);
		$(".gnb_wrap_new").stop().animate({"left":"-100%" }, 400);
		//$(".gnb_btm_box").stop().animate({"left":"-100%" }, 400);
		//$("a.btn_mob_close").css("display", "none");
		$(".gnb_mob_wrap").css("display", "none");
		$("#gnb_wrap").css("height", "55px");
		$(this).data("click", false);
		$("a.mob_menu").data("isOpened", false);
	});

	/* 서브 인덱스 */
	$(".sub_index_con01").mouseenter(function(){
		if($(window).width() > 689/*1727*/){
			$(this).parent().find(".sub_index_con01").addClass("on");
		}
	});
	$(".sub_index_con01").mouseleave(function(){
		if($(window).width() > 689/*1727*/){
			$(this).parent().find(".sub_index_con01").removeClass("on");
		}
	});

});


function popOpen(layerName){
	document.getElementById(layerName).style.display = 'block';
	return false;
}
function popClose(layerName){
	document.getElementById(layerName).style.display = 'none';
	return false;
}