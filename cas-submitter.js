var page = require('webpage').create();
// put the url here
var url = "";
page.open(url, function(){

	// first screenshot (empty fields)
	page.render("first.png");

	page.evaluate(function(){
		$('input[name="username"]')[0].value = "X";
		$('input[name="password"]')[0].value = "Y";
	});

	// screenshot after filling the fields
	page.render("second.png");

	page.evaluate(function(){
		$('.btn-submit').click();
	});

	page.render("third.png");

	phantom.exit();
});