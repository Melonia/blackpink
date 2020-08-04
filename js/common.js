$(function() {
	$(".sub").hide();
	$(".hover3").css("background-color","#8dc63f");
	$(".main>li").mouseover(function() {
		$(".sub", this).show();
		$(".sub_bg").css("background-color", "rgba(255,255,255,0.8)");
		$(".dd",this).addClass("add");
	});
	
	$(".main>li").mouseout(function() {
		$(".sub", this).hide();
		$(".sub_bg").css("background-color", "");
		$(".dd", this).removeClass("add");
	});
	$(".bullet>li:nth-child(1)").click(function(){
		$(".bullet>li").css("background-color","rgb(69, 25, 189)");
		$(".hover1").css("background-color","#8dc63f");
		$(".cover>div:nth-child(1)").css("background-size","100% 100%");
		$(".cover>div:nth-child(2)").css("background-size","0 0");
		$(".cover>div:nth-child(3)").css("background-size","0 0");
		$(".main>li>a").css("color","blue");
	});
	$(".bullet>li:nth-child(2)").click(function(){
		$(".bullet>li").css("background-color","rgb(69, 25, 189)");
		$(".hover2").css("background-color","#8dc63f");
		$(".cover>div:nth-child(2)").css("background-size","100% 100%");
		$(".cover>div:nth-child(1)").css("background-size","0 0");
		$(".cover>div:nth-child(3)").css("background-size","0 0");
		$(".main>li>a").css("color","red");
	});
	$(".bullet>li:nth-child(3)").click(function(){
		$(".bullet>li").css("background-color","rgb(69, 25, 189)");
		$(".hover3").css("background-color","#8dc63f");
		$(".cover>div:nth-child(3)").css("background-size","100% 100%");
		$(".cover>div:nth-child(2)").css("background-size","0 0");
		$(".cover>div:nth-child(1)").css("background-size","0 0");
		$(".main>li>a").css("color","green");
	});
	
});