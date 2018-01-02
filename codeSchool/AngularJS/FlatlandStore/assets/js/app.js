(function(){
	// The app
	var app = angular.module('store', [ ]);

		// Store Controller
	app.controller('StoreController', function(){
		this.products = gems;
	});

	// Panel Controller
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	// Review Controller
	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(prod){
			prod.reviews.push(this.review);
			this.review = {};
		};
	});

	// Directives
	//	// dash in HTML will translate into CamelCase in JavaScript
	// <product-title></product-title>
	app.directive('productTitle', function(){
		return {
			// returns a directive definition object
			restrict: 'E', // type of directive E => Element
			templateUrl: 'templates/product-title.html'
		};
	});

	// Gems is an array of 'gem'
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Some gems have hidden values qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
			images: [
				{
					full: 'assets/img/dodecahedron-01-full.jpg',
					thumb: 'assets/img/dodecahedron-01-thumb.jpg'
				},
				{
					full: 'assets/img/dodecahedron-02-full.jpg',
					thumb: 'assets/img/dodecahedron-02-thumb.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			],
			canPurchase: false,
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '. . .',
			canPurchase: true,
		}
	];
})();
