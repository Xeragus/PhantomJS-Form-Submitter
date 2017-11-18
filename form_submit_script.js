var page = require('webpage').create();
// specify the url of the webpage
var url = '';
page.open(url, function() {
	// inject jQuery so we can use it in page.evaluate()
	page.injectJs('jquery.min.js');
	
	// first screenshot, we need screenshots to see if there is any change after page.evaluate()
	page.render("empty.png");

	page.evaluate(function() {
		// click on the checkbox
		$('#checkbox').click();
		// enter some value in the input field
		$('input[name="name1"]')[0].value = "Value1";
		// enter some value in other input field
		$('input[name="name2"]')[0].value = "Value2";
	});
	// second screenshot
	page.render("filled.png");

	// click the submit button
	page.evaluate(function(){
		$("#submit").click();
	});

	// third screenshot
	page.render("after_submit.png");

	phantom.exit();
});