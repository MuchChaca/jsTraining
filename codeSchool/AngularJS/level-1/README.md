# AngularJS - CodeSchool - LEVEL 1
[<img src="https://www.codeschool.com/assets/pages/brand/downloads/brand-horizontal-tagline-a0192e1b76e417c6083a0f1885bea8ab24cae64771aa9d719fe45f2ba7bf4856.png" title="CodeSchool" alt="CodeSchool" width=50%>]("https://www.codeschool.com/")

# Introduction
> Now, 'AngularJS' is known for angular version 1.X and the version 2.X is called just 'Angular'.

- The course followed here, has been made before Angular so it is based on AngularJS.

- Angular is just a Front-end Framework, so no knowledge of php,python etc is required.

# Why Angular
- If using JavaScript to create dynamic website, Angular is a good choice
- Angular helps to organize JavaScript
- Angular helps to build responsive (as in fast) websites
- Angular plays well with jQuery
- Easy to test

# Angular's communication
<img src="https://image.ibb.co/gF6bpw/screen_1_angular.png">

## Simple Angular definition
A client-side JavaScript Framework for adding interactivity to HTML.

- How to tell the HTML when to trigger the JavaScript?


HTML:
```html
<!DOCTYPE HTML>
<HTML>
	<BODY>
		. . .
	</BODY>
</HTML>
```

JavaScript:
```js
function Store(){
	alert('Welcome, Gregggg!');
}
```
**Angular:**  
We add behavior to the HTML through directives:  
A **directive** is a marker on a HTML tag that tells AngularJSto run or reference some JavaScript code.

HTML: We add the ``ng-controller`` to our ``<body>`` tag
```html
<!DOCTYPE HTML>
<HTML>
	<BODY ng-controller="StoreController">
		. . .
	</BODY>
</HTML>
```

JavaScript: ``StoreController`` is the name of our function to call
```js
function StoreController(){
	alert('Welcome, Gregggg!');
}
```
# Project for this course
Flatland Store

# First Steps
## Download the libraries
* [http://angularjs.org/]("http://angularjs.org/"), we'll need angular.min.js
* [Twitter Bootstrap]("http://getbootstrap.com"), we'll need bootstrap.min.css

## Getting started
```HTML
<!-- index.html -->
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
	</head>

	<body>
		<script type="text/javascript" src="assets/js/angular.min.js"></script>
	</body>
</html>
```

# Modules
- Where we write pieces of the AngularJS application.  
It is how we keep the code encapsulated.  
- Makes the code more maintainable, testable, and readable.
- Where we define all the dependencies for the application.

<img src="https://image.ibb.co/dxvSUw/modules_js.png" height="150px">

# Our first module

<img src="https://image.ibb.co/mDYgpw/first_module_angularjs.png" height="150px">

This piece of code is going to live inside an app.js file. So we will need to include that in our ``index.html``.  
We also need to add the ``ng-app`` directive to the ``<html`` tag:

```html
<!-- ... -->
<html ng-app="store">
	<head>
		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
	</head>
	<body>
		<script type="text/javascript" src="assets/js/angular.min.js"></script>
		<script type="text/javascript" src="assets/js/app.js"></script>
	</body>
</html>
```
This directive create an application by runing the ``app.js`` module.  
So inside the ``<html>``, we can start runing expressions.

# Expressions
Allows the insertion of dynamic values into the HTML.

## Numerical Operations
<img src="https://image.ibb.co/iawbpw/expressions_angularjs.png" height="150px">

> More [expressions]("http://docs.angularjs.org/expression")

# Controller
Controllers are where we define our app's behavior by defining functions and values.
## Working with data
Considering our 'gem', a JavaScript object:
```js
var gem = {
	name: 'Dodecahedron',
	price: 2.95,
	description: '. . .',
}
```

We are going to wrap the entire app into a **closure** like so:
```js
(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		//
	});
})();
```
The slide:  
<img src="https://image.ibb.co/ksbZ9w/slide_controller_angularjs.png" alt="Slide" title="Slide" height="auto">

We can place our gem into the **closure**. Now from inside the controller we need to set this gem equal to a property of this controller so:
```js
(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
	}
})();
```

> How to get access to this data from inside our HTML ?

<img src="https://image.ibb.co/f0BO2G/ourgem_angularjs.png" >  

<img src="https://image.ibb.co/bVQrNG/slide_controller_bf_angularjs.png">  

<img src="https://image.ibb.co/hhNSwb/slide_controller_af_angularjs.png">

# Adding a button
First, we add a new key:value to our gem:
```js
var gem = {
	name: 'Dodecahedron',
	price: 2.95,
	description: '. . .',
	canPurchase: false,
}
```
```html
<!-- Gems -->
<div ng-controller="StoreController as store">
	<h1>{{store.product.name}}</h1>
	<em class="pull-right">${{store.product.price}}</em>
	<p>{{store.product.description}}</p>
	<button>Add to cart</button> <!-- We only want this when ``canPurchase`` is true -->
</div>
<!-- //Gems -->
```
We use the ``ng-show`` directive and specify an expression:
```html
<!-- Gems -->
<div ng-controller="StoreController as store">
	<h1>{{store.product.name}}</h1>
	<em class="pull-right">${{store.product.price}}</em>
	<p>{{store.product.description}}</p>
	<button ng-show="store.product.canPurchase">Add to cart</button>
</div>
<!-- //Gems -->
```

Now lets add another property: ``soldOut``. If the gem is soldOut, we don't want it to be shown on the page.
<img src="https://image.ibb.co/mfau9w/ng_hide_directeve_bf_angularjs.png">  
With ng-hide:
<img src="https://image.ibb.co/dM0Y2G/actual_ng_hide_angularjs.png">  

## Multiple Produtcs
We change ``gem`` into ``gems``
```js
app.controller('StoreController', function(){
	this.products = gems;
});

var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Some gems have hidden values qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
		canPurchase: false,
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '. . .',
		canPurchase: true,
	}
];
```
```html
<!-- Gems -->
<div  ng-repeat="product in store.products">
	<h1>{{product.name}}</h1>
	<em class="pull-right">${{product.price}}</em>
	<p>{{product.description}}</p>
	<button ng-show="product.canPurchase">Add to cart</button>
	<hr>
</div>
<!-- //Gems -->
```

# So far:
<img src="https://image.ibb.co/c9L82G/so_far_angular_lvl1.png">






---------------------
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png" height="125px"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png" height="125px"> <img src="https://c1.staticflickr.com/6/5622/22160892602_e5474a698d.jpg" height="125px">
