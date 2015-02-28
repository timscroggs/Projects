(function () {
	"use strict";
	var main = function () {
		var hello = function () {
			console.log('Hello World!');
		};
		hello();
	};
	$(document).ready(function() {
		main();
	});
}());