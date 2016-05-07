$(function(){

/* 注册页面 */

	$('#registerform input:text').on("click",function(){
		if($(this).val() == "公司名称"||$(this).val() == "联系人员"||$(this).val() == "注册邮箱"||$(this).val() == "登录密码"){
			$(this).val("");
		$(this).css("color","black");
		$('#bubble').remove();
		}
	});
	$('#registerform input:text').on("blur",function(){
		if($(this).val() == ""){
			$(this).css("color","gray");
			switch($(this).index('#registerform input:text')){
				case 0: $(this).val("公司名称");break;
				case 1: $(this).val("联系人员");break;
				case 2: $(this).val("注册邮箱");break;
				case 3: $(this).val("登录密码");break;
			}
		}
	});
	$('#submit1').on("click",function(){
		//event.preventDefault();
		$('#bubble').remove();
		for(var i = 0;i<4;i++){
			if(isEmpty($('#registerform input').eq(i))){
				var value = $('#registerform input').eq(i).val();
				var $newSpan = $('<span>');
				var $newItem = $('<div id="bubble">');
				var Top = $('#registerform input').eq(i).offset().top;
				$newSpan.text(value+"不能为空！");
				$newItem.append('<div id="warning">').append($newSpan).append('<div id="right_arr">')
				$newItem.css("top",Top);
				$('body').append($newItem);
				var FUNC=[
				    function() {$newItem.animate({right:'+=5px'},100,aniCB);},
				    function() {$newItem.animate({right:'-=10px'},100,aniCB);},
				    function() {$newItem.animate({right:'+=10px'},100,aniCB);},
				    function() {$newItem.animate({right:'-=5px'},100,aniCB);},
				];
				var aniCB=function() {
				    $(document).dequeue("myAnimation");
				}
				$(document).queue("myAnimation",FUNC);
				aniCB();
				return false;
			}
		}
	});

/* 登陆页面 */

	$('#loginform input').on("click",function(){
		if($(this).val() == "登录邮箱"||$(this).val() == "登录密码"){
			$(this).val("");
		$(this).css("color","black");
		if($(this).index('#loginform input')==1){
			$(this).attr("type","password");
		}
		$('#bubble').remove();
		}
	});
	$('#loginform input').on("blur",function(){
		if($(this).val() == ""){
			$(this).css("color","gray");
			switch($(this).index('#loginform input')){
				case 0: $(this).val("登录邮箱");break;
				case 1: $(this).attr("type","text");
						$(this).val("登录密码");break;
			}
		}
	});
	$('#submit').on("click",function(){
		//event.preventDefault();
		$('#bubble').remove();
		for(var i = 0;i<2;i++){
			if(isEmpty($('#loginform input').eq(i))){
		console.log("1");
				var value = $('#loginform input').eq(i).val();
				var $newSpan = $('<span>');
				var $newItem = $('<div id="bubble">');
				var Top = $('#loginform input').eq(i).offset().top;
				$newSpan.text(value+"不能为空！");
				$newItem.append('<div id="warning">').append($newSpan).append('<div id="right_arr">')
				$newItem.css("top",Top);
				$('body').append($newItem);
				console.log("1");
				var FUNC=[
				    function() {$newItem.animate({right:'+=5px'},100,aniCB);},
				    function() {$newItem.animate({right:'-=10px'},100,aniCB);},
				    function() {$newItem.animate({right:'+=10px'},100,aniCB);},
				    function() {$newItem.animate({right:'-=5px'},100,aniCB);},
				];
				var aniCB=function() {
				    $(document).dequeue("myAnimation");
				}
				$(document).queue("myAnimation",FUNC);
				aniCB();
				return false;
			}
		}
	});
	function isEmpty(x){
		if(x.val() == ""||x.val() == null||x.val() == "公司名称"||x.val() == "联系人员"||x.val() == "注册邮箱"||x.val() == "登录密码"||x.val() == "登录邮箱"){
			return true;
		}else{
			return false;
		}
	}
});
//登录，注册页面切换
window.onload = function(){	
	var right = document.getElementById("all");//注册
    var right1 = document.getElementById("all1");//登陆
	var oLogin=document.getElementById("login");
    var oRegister=document.getElementById("register");
	oLogin.onclick = function(){changepage();return false;};  
	oRegister.onclick = function(){changepage1();return false;};
	function changepage(){
	    right.style.display = "none";
	    $(right1).fadeIn();
	    var FUNC=[
		    function() {$('#container').animate({top:'+=5px'},100,aniCB);},
		    function() {$('#container').animate({top:'-=10px'},100,aniCB);},
		    function() {$('#container').animate({top:'+=10px'},100,aniCB);},
		    function() {$('#container').animate({top:'-=5px'},100,aniCB);},
		];
		var aniCB=function() {
		    $(document).dequeue("myAnimation");
		}
		$(document).queue("myAnimation",FUNC);
		aniCB();
	    $(oLogin).animate({opacity:"1"},100,function(){
	    	$(oRegister).animate({opacity:".5"},100);
	    });
	}
    function changepage1(){
        right1.style.display = "none";
        $(right).fadeIn();
        var FUNC=[
		    function() {$('#container').animate({top:'+=5px'},100,aniCB);},
		    function() {$('#container').animate({top:'-=10px'},100,aniCB);},
		    function() {$('#container').animate({top:'+=10px'},100,aniCB);},
		    function() {$('#container').animate({top:'-=5px'},100,aniCB);},
		];
		var aniCB=function() {
		    $(document).dequeue("myAnimation");
		}
		$(document).queue("myAnimation",FUNC);
		aniCB();
        $(oRegister).animate({opacity:"1"},100,function(){
	    	$(oLogin).animate({opacity:".5"},100);
	    });
	}
};
