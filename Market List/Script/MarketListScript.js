$("ul").on("click","li", function(){
$(this).toggleClass("clicked");
 });
//Deleting item clicking on X
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})
$("input[type='text']").on("keypress",function(event){
	if(event.which===13){
		//new item for the list and adding to the market list
        var newItem = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newItem + "</li>");

	}
})

$(".fa-pencil").click(function(){
	$("input[type='text'").fadeToggle();
})
