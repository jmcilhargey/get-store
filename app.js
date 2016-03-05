(function() {
var app = angular.module("gemStore", []);

	app.controller("StoreController", function() {
		this.product = gem;
	});

	var gems = [
	{
		name : "Dodecahedron",
		price : 2.95,
		description : ". . .",
		canPurchase: false,
	},
	{
		name : "Pentagonal Gem",
		price : 5.95,
		description : ". . .",
		canPurchase: false,
	}

})();