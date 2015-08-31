
var delete_button = document.getElementById("xbutton");
var response_box = document.getElementById("response_box");

delete_button.addEventListener("onclick", function(){
	body.removeChild(response_box);
});
