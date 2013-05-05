function responseNav(){
	//Responsive Nav Menu
	var lefty,righty;
	var navWidth = $(".resp_nav").width(); //get width of nav container
	var liAmt = $(".resp_nav li").length; //get number of list items
	$(".resp_nav li").each(function(index){
		lefty = parseInt($(this).css('padding-left'));
		righty = parseInt($(this).css('padding-right'));
	});
	var liPad = lefty+righty; //account for padding, must parseInt because string is returned
	var newWidth = (navWidth/liAmt)- (liPad+2); //calculate new width for list items, subtract 1 as buffer
	$(".resp_nav li a").css('display','inline-block'); //must change display so width change will work
	$(".resp_nav li a").width(newWidth);	
		
}

$(document).ready(function(){
	responseNav();
	
	$(window).resize(function(){
		responseNav(true);
	})
});