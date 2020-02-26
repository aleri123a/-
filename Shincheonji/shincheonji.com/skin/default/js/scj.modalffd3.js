var loading_img = "<img src='/skin/default/images/common/loading.gif'/>";
var loading = "<table width=100% height=100%><tr><td align='center'>"+loading_img+"</td></tr></table>";


//maskPannel Show
function showMaskPannel(){
	var document_height = $(document).height();
	$("#maskPannel").css("display","block");
	$("#maskPannel").css("height",document_height+"px");
}

//maskPannel Close
function closePannel(){
	$("#maskPannel").css("display","none");
	$("#overayPannelContent").html("");
	$("#overayPannel").css("display","none");
}

function showOverayPannel(width,height,msg,button){
	showMaskPannel();

	var pannelHeight = $(window).height() - 60;
	var top = 30;
	var margin_left = ((width/2)*-1) -13;

	if(pannelHeight > height){
		pannelHeight= height;
		top = ($(window).height() - pannelHeight)/2;
	}
	
	$("#overayPannel").css("position","fixed");
	//$("#overayPannel").css("overflow","hidden");
	$("#overayPannel").show()
										.css("top",top+"px")
										.css("left","50%")
										.css("margin-left",margin_left+"px")
										.css("width",width+"px")
										.css("height",pannelHeight+"px")
										.css("border-radius","10px")
										.css("border-radius","10px")
										.css("padding","15px");

	if(button){
		$("#overayPannelButton").css("display","block");
		var button_height = 30;
	}else{
		$("#overayPannelButton").css("display","none");
		var button_height = 0;
	}
	
	var contentHeight = pannelHeight -button_height;
	$("#overayPannelContent").css("height",contentHeight+"px");
	$("#overayPannelContent").css("overflow","hidden");

	
	if(msg!=""){
		$("#overayPannelContent").html(msg);
	}else{
		$("#overayPannelContent").html(loading);
	}
}

function center(msg){
	return "<table width='100%' height='100%'><tr><td align='center'>"+msg+"</td></tr></table>";
}

function setOverayPannel(msg){
	$("#overayPannelContent").html(msg);
}