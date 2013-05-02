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
$(".resp_nav li a").width(newWidth);