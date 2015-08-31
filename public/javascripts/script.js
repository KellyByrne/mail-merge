

var delete_button = document.getElementsByClassName("xbutton");

for (var i=0; i<delete_button.length; i++) {
	var response_box = document.getElementsByClassName("response_box");
	var parent = document.getElementById("parent");
delete_button[i].addEventListener("click", function(){
	console.log("is this working?");
	parent.removeChild(this.parentElement);
	numOfEmails = numOfEmails - 1;
});
};









