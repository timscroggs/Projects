(function() {
	"use strict";
	
	$('#insert').on('click', function() {
		var desc = $('#desc').val(),
				sku = $('#sku').val(),
				quantity = $('#quant').val(),
				price = $('#price').val(),
				newItem = {"description" : desc,
									 "sku" : sku,
									 "quantity" : quantity,
									 "price" : price
									};
		$.post("putItem", newItem, function(result) {
			console.log(result);
		});
	});
	
	$('#retrieve').on('click', function() {
		console.log("retrieve clicked");
		var sku = $('#sku').val(),
				findItem = {"sku": sku};
		$.post("getItem", findItem, function(result) {
			var foundItem = result[0];
			$('#desc').val(foundItem.description);
			$('#sku').val(foundItem.sku);
			$('#quant').val(foundItem.quantity);
			$('#price').val(foundItem.price);
		});
	});
	
}());