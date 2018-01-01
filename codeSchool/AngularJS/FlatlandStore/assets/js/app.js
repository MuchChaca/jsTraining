(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

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
