$(document).ready(function(){
	$("#sortMe").sortable();
	/*$("#accordion").accordion({
		collapsible: true
	});
*/
	$(".pics").mouseover(function(){
		$(".pics").animate({
			opacity: "0"
		});
		
	});
	var animal = "";
	function hideAll(){

		$("#cat").hide();
		$("#chicken").hide();
		$("#dragon").hide();
		$("#pony").hide();
		$("#squash").hide();
	}
	hideAll();
	$("#getAnimal").click(function(){
		hideAll();
		animal = $("#pics").val();
		options = { percent: 100 };
		if(animal === "cat"){
			$("#cat").show("fold", options);
		} else if(animal === "chicken"){
			$("#chicken").show("fold", options);
		} else if(animal === "dragon"){
			$("#dragon").show("fold", options);
		} else if(animal === "pony"){
			$("#pony").show("fold", options);
		} else {
			$("#squash").show("fold", options);
		}
	});
	var state = true;
	var clicks = 0;
	$("#color").click(function(){
		clicks++;
		$("#progress").progressbar({
			value: clicks
		});
		if(clicks >= 100){
			$("#color").animate({
				backgroundColor: "#FF66FF"
			}, 225);
		}
		if(state){
			$("#color").animate({
				backgroundColor: "#FF9933"
			}, 225);
			state = !state;
		} else {
			$("#color").animate({
				backgroundColor: "#B0B0B0"
			}, 225);
			state = !state;
		}
	});
	activeItem = $("#accordion li:first");
    $(activeItem).addClass('active');
 
    $("#accordion li").hover(function(){
        $(activeItem).animate({width: "50px"}, {duration:300, queue:false});
        $(this).animate({width: "450px"}, {duration:300, queue:false});
        activeItem = this;
    });
});
