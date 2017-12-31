(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Some gems have hidden values qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
	}
})();
