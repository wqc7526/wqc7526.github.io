
$(function(){
	            var height=window.screen.availHeight;
	            var width=window.screen.availWidth;

				$('.page1').css('height',height+'px');
				$('.page1').css('width',width+'px');
 				//滚轮滚动
 				var iNow =0;
 				(function(){
 					//初始化 				
 					upfloat('.page1 .text','.page1 .per_info p');
	 				
					$('body').stop().animate({scrollTop: iNow+'px'},500);
	 				
	 				document.onmousewheel = fn;
					if(document.addEventListener){
					document.addEventListener('DOMMouseScroll',fn,false);
					}
	
					function fn(ev){
	
						var ev =ev||event;
						var b=true;
						if(ev.wheelDelta){
						b =ev.wheelDelta>0 ? true:false;
						}else{
						b =ev.detail<0 ? true:false;
						}
						//alert(b);
						if(b){
							iNow-=height;

							if(iNow<0){iNow=0;return;}
							
							$('body').stop().animate({scrollTop: iNow+'px'},500,function(){
								pagefn(iNow/height);
							});
							$('#side').find('a').removeClass('active');
							$('#side').find('a').eq(iNow/height).addClass('active');
							
						}else{
							iNow+=height;
							if(iNow>4*height){iNow=4*height;return;}
							$('body').stop().animate({scrollTop: iNow+'px'},500,function(){

								pagefn(iNow/height);
							});
							$('#side').find('a').removeClass('active');
							$('#side').find('a').eq(iNow/height).addClass('active');
							
						}
	
						if(ev.preventDefault){
							ev.preventDefault();
						}					
						return false;
					}	
 				})();	
 				
 				
 				
 				//side定位
 				(function(){
 					$('#side').find('a').each(function(index){
 						$(this).click(function(){
 							$('#side').find('a').removeClass('active');
 							$(this).addClass('active');
 							
 							$('body').stop().animate({scrollTop: index*height+'px'},100);

 							pagefn(index);
							iNow = index*height;
							
 						});
 					});
 				})();
 				
 				
 				//header 变换
 				(function(){
 					var headP=$('.head_p');
 					headP.hover(function(){
 					 	headP.find('.head_p1').html('Dream') ;
 					 	headP.find('.head_p2').html('前端') ;
 					},function(){
 						headP.find('.head_p1').html('Passion') ;
 					 	headP.find('.head_p2').html('个人简历') ;
 					})
 					
 				})();
 			
 				//page上浮动画
 				
 					//.page1 .text,.page1 .per_info p
 					/*var text = $('.page1 .text');
 					var p = $('.page1 .per_info p');
 					text.animate({opacity:'1'},{ duration: 6000, queue: false });
 					p.animate({opacity:'1'},{ duration: 200, queue: false });
 					*/
				function pagefn(n){

					switch(n){
						case 0:
						upfloat('.page1 .text','.page1 .per_info p');
						break;
						case 1:
						upfloat('.me_list','.me_list2');
						break;
						case 2:
						upfloat('.skill_list .skill_text');
						break;
						case 3:
						upfloat('.ex_info');
						break;
						case 4:
						upfloat('.contact_text','.contact_text1');				
						upfloat('.contact_text1','.contact_ul');

						break;
						default:
						break;
					}	
				}
				
				function upfloat(obja,objb){
 						if(obja&&objb){
		 					var olda = $(obja).css('top');
		 					$(obja).css('opacity',0);
		 					$(obja).css('top',parseInt($(obja).css('top'))+50);
		 					var oldb = $(objb).css('top');
		 					$(objb).css('opacity',0);
		 					$(objb).css('top',parseInt($(objb).css('top'))+50);
		 					
		 					/*var FUNC=[
							function() {$(obja).animate({opacity:'1',top:olda},500,aniCB);},
							function() {$(objb).animate({opacity:'1',top:oldb},500,aniCB);},
	
							];
							var aniCB=function(){ 
							$('body').dequeue('myAnimation'); 
							}; 
							$('body').queue('myAnimation',FUNC); 
							aniCB();*/
							$(obja).animate({opacity:'1',top:olda},500,function(){
								$(objb).animate({opacity:'1',top:oldb},1500);
							});
						}else{
							$(obja).css('opacity',0);
							var olda = $(obja).css('top');
		 					$(obja).css('top',parseInt($(obja).css('top'))+50);
							$(obja).animate({opacity:'1',top:olda},1500);
						}
 					}
 					

 				//skill特效
 				(function(){
 					var onoff=true;
 					var iNow =0;
 					$('.skill_pic').each(function(index){
 						$(this).click(function(){
 							
 							if(iNow==index){
 								if($('.skill_info').eq(index).css('height')==80+'px'){
 									$('.skill_info').eq(index).stop().animate({height:'0'},500);
 								}else{
 									$('.skill_info').eq(index).stop().animate({height:'80'},500);
 								}
	 							
 							}else{

	 							if(onoff){
	 							/*$('.skill_info').removeClass('active');
	 							$('.skill_info').eq(index).addClass('active');*/
	 							$('.skill_info').css('height','0');
	 							$('.skill_info').eq(index).stop().animate({height:'80'},500);
	 							onoff=false;
	 							}
	 							else{
	 							$('.skill_info').stop().animate({height:'0'},500);
	 							$('.skill_info').eq(index).stop().animate({height:'80'},500);
	 							onoff=true;
	 							}
	 						}	
 							iNow=index;
 						});
 						
 						$(this).hover(function(){
							$('.skill_pic').find('img').eq(index).stop().animate({'height':120,'width':0.9*120},500);
 						},function(){
 							$('.skill_pic').find('img').eq(index).stop().animate({'height':100,'width':0.9*100},500);
 						});
 					});
 					
 				})();
 				
 			});