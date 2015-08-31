

var delete_button = document.getElementById("xbutton");
var response_box = document.getElementById("response_box");
var parent = document.getElementById("parent");

delete_button.addEventListener("click", function(){
	console.log("is this working?");
	parent.removeChild(response_box);
});









