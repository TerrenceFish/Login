$(function(){
	changeGallery();
	inputCheck();
})
function changeGallery(){
	$('#bt1').on('click',function(){
		$('#gallery')[0].style.transform = 'translate3d(-0%,0px,0px)';
		var FUNC=[
			function() {$('#progressbar2').animate({width:'0%'},200,aniCB);},
			function() {$('#bt2').removeClass('btbackground');aniCB();},
			function() {$('#bt3').removeClass('btbackground');aniCB();},
			function() {$('#progressbar1').animate({width:'0%'},200,aniCB);},
		];
		var aniCB=function() {
			$(document).dequeue("myAnimation");
		}
		$(document).queue("myAnimation",FUNC);
		aniCB();
		return false;
	});
	$('#bt2,#page1_next').on('click',function(){
		$('#gallery')[0].style.transform = 'translate3d(-25%,0px,0px)';
		var FUNC=[
			function() {$('#progressbar1').animate({width:'100%'},400,aniCB);},
			function() {$('#bt2').addClass('btbackground');aniCB();},
			function() {$('#bt3').removeClass('btbackground');aniCB();},
			function() {$('#progressbar2').animate({width:'0%'},300,aniCB);},
		];
		var aniCB=function() {
			$(document).dequeue("myAnimation");
		}
		$(document).queue("myAnimation",FUNC);
		aniCB();
		return false;
	});
	$('#bt3').on('click',function(){
		$('#gallery')[0].style.transform = 'translate3d(-50%,0px,0px)';
		var FUNC=[
			function() {$('#progressbar1').animate({width:'100%'},200,aniCB);},
			function() {$('#bt2').addClass('btbackground');aniCB();},
			function() {$('#bt3').addClass('btbackground');aniCB();},
			function() {$('#progressbar2').animate({width:'100%'},200,aniCB);},
		];
		var aniCB=function() {
			$(document).dequeue("myAnimation");
		}
		$(document).queue("myAnimation",FUNC);
		aniCB();
		return false;
	});
}
function inputCheck(){
	$('input:text').on("click",function(){
		if($(this).val() == "Telephone"||$(this).val() == "Adress"||$(this).val() == "Area"||$(this).val() == "福利特色"||$(this).val() == "公司主页"||$(this).val() == "项目主页"||$(this).val() == "公司团队介绍"){
			$(this).val("");
		$(this).css("color","black");
		$('#bubble').remove();
		}
	});
	$('input:text').on("blur",function(){
		if($(this).val() == ""){
			$(this).css("color","gray");
			switch($(this).index('input:text')){
				case 0: $(this).val("Telephone");break;
				case 1: $(this).val("Adress");break;
				case 2: $(this).val("Area");break;
				case 3: $(this).val("福利特色");break;
				case 4: $(this).val("公司主页");break;
				case 5: $(this).val("项目主页");break;
				case 6: $(this).val("公司团队介绍");break;

			}
		}
	});
}