# AngularJS - CodeSchool - LEVEL 2
[<img src="https://www.codeschool.com/assets/pages/brand/downloads/brand-horizontal-tagline-a0192e1b76e417c6083a0f1885bea8ab24cae64771aa9d719fe45f2ba7bf4856.png" title="CodeSchool" alt="CodeSchool" width=50%>]("https://www.codeschool.com/")

> Level 2: Filters, Directives, and Cleaner Code

# Introduction
## Review
* ``ng-app`` - attach the **Application Module** to the page
```html
<html ng-app="store">
```
* ``ng-controller`` - attach a **Controller** function to the page
```html
<body ng-controller="StoreController as store">
```
* ``ng-show``/``ng-hide`` - display a section based on an **Expression**
```html
<h1 ng-show="name">Hello, {{name}}!</h1>
```
* ``ng-repeat`` - repeat a section for each item in an **Array**
```html
<li ng-repeat="product in store .products">{{product.name}}</li>
```

# Filters
## Currency filter
```html
<em class="pull-right">{{product.price | currency}}</em>
```
> ``|`` says take the result of the first expression and send the output into the second expression which in this case is a filter. Currency will print out the proper ``$`` sign localized and also give the correcct number of decimals.

## Format
Take some data and "pipe" that into a filter, sometimes even specifying options.
* Our Recipe:  
``{{ data* | filter:options* }}``
* Date:  
``{{'1388123412323' | date:'MM/dd/yyyy @ h:mma'}}`` :point_right: ``12/27/2013 @ 12:50AM``
* Uppercase:  
 ``{{'octagon gem' | uppercase}}`` :point_right: ``OCTAGON GEM``
* limitTo - limit the number of characters in a string:  
``{{'My Description' | limitTo:8}}`` :point_right: ``My Descr``  
or the number of items in an array:
```html
<li ng-repeat="product in store.products | limitTo:3">
```
* orderBy - sort our products - from most expensive to least expensive. Without the ``-``, products would list in an ascending order:
```html
<li ng-repeat="product in store.products | orderBy:'-price'">
```

# Adding images for Gems
```js
var gems = [
	{
		name: 'Dodecahedron',
		price: 2,
		description: 'Some gems have hidden values qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
		images: [
			{
				full: 'dodecahedron-01-full.jpg',
				thumb: 'dodecahedron-01-thumb.jpg'
			},
			{
				full: 'dodecahedron-02-full.jpg',
				thumb: 'dodecahedron-02-thumb.jpg'
			}
		],
		canPurchase: false,
	},
	// . . .
```
Then to display an image we would have to :
```html
{{product.image[0].full}}
```
> :warning: Using AngularJS Expressions inside a ``src`` attribute causes an error! :
```html
<img src="{{product.images[0].full}}"> <!-- Generates an error!! -->
```
Because the browser tries to load the image before it gets evaluated.

So we use the ``ng-source`` directive to print the images:
```html
<body ng-controller="StoreController as store">
	<ul class="list-group">
		<li class="list-group-item" ng-repeat="product in store.products">
			<h3>
				{{product.name}}
				<em class="pull-right">{{product.price | currency}}</em>
				<img ng-src="{{product.images[0].full}}">
			</h3>
		</li>
	</ul>
</body>
```

# Tabs
## Tab sections
There are bootstrap classes...
```html
<section>
	<ul class="nav nav-pills">
		<li> <a href>Description</a> </li>
		<li> <a href>Specifications</a> </li>
		<li> <a href>Reviews</a> </li>
	</ul>
</section>
```
But how to act <u>behavior</u> to the tabs? :point_right: using the ``ng-click`` directive which takes an Expression to evaluate:
```html
<section>
	<ul class="nav nav-pills">
		<li> <a ng-click="tab = 1" href>Description</a> </li>
		<li> <a ng-click="tab = 2" href>Specifications</a> </li>
		<li> <a ng-click="tab = 3" href>Reviews</a> </li>
	</ul>
	<!-- To print the value of tab: -->
	{{tab}}
</section>
```
**Expressions define a 2-way Data Binding...**
This means Expressions are re-evaluated when a property changes.

## Tab panels
```html
<section> <!-- TAB-SECTIONS -->
	<!-- . . . -->
	<!-- TAB-PANELS -->
	<div class="panel" ng-show="tab === 1">
		<h4>Description</h4>
		<p>{{product.description}}</p>
	</div>
	<div class="panel" ng-show="tab === 2">
		<h4>Specifications</h4>
		<blockquote>None yet</blockquote>
	</div>
	<div class="panel" ng-show="tab === 3">
		<h4>Reviews</h4>
		<p>None yet</p>
	</div>
	<!-- //TAB-PANELS -->
</section> <!-- //TAB-SECTIONS -->
```
Now when a tab is selected, it will show  the appropriate panel!  
### Setting initial value
``ng-init`` allows to evaluate an expression in the current scope.
```html
<section> <!-- TAB-SECTIONS -->
	<ul class="nav nav-pills" ng-init="tab = 1">
		<li> <a ng-click="panel.selectTab(1)" href>Description</a> </li>
		<li> <a ng-click="panel.selectTab(2)" href>Specifications</a> </li>
		<li> <a ng-click="panel.selectTab(3)" href>Reviews</a> </li>
	</ul>
```

### ``ng-class`` Directive
<img src="https://image.ibb.co/dOKcUw/ng_class_directive_angularjs.png">  


## Need to organize: Create a new controller for this logic

> . . .



---------------------
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png" height="125px"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png" height="125px"> <img src="https://c1.staticflickr.com/6/5622/22160892602_e5474a698d.jpg" height="125px">
