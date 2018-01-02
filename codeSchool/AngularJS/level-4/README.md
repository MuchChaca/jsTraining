# AngularJS - CodeSchool - LEVEL 4
[<img src="https://www.codeschool.com/assets/pages/brand/downloads/brand-horizontal-tagline-a0192e1b76e417c6083a0f1885bea8ab24cae64771aa9d719fe45f2ba7bf4856.png" title="CodeSchool" alt="CodeSchool" width=50%>]("https://www.codeschool.com/")

> *Level 4: Creating a Directive with an Associated Controller*


# Section 1
## Decluttering the code
<img src="https://image.ibb.co/j4SMPw/decluterring_our_code_angularjs.png">  

:grey_question: How do we eliminate this duplication?  
:point_right: By creating HTML snippet.  

## Using ``ng-include`` for Templates
We pull out the code into an <u>HTML file</u>
```HTML
<!-- index.html -->
<h3 ng-include="'templates/product-title.html'">
	<!-- // -->
</h3>
```
> :eyes: **Note** that ``ng-include`` 's parameter are between double quotes ``"`` and simple quotes ``'``.  
``ng-include`` is expecting a variable with the name of the file to include.  
To pass the name directly as a string, use single quotes ('. . .')

```HTML
<!-- product-title.html -->
{{product.name}}
<em class="pull-right">{{product.price | currency}}</em>
<img ng-src="{{product.images[0].thumb}}">
```
<img src="https://image.ibb.co/dhbZBb/using_ng_include_for_templates_angularjs.png">  

### Different way of loading the page cause of the include
<img src="https://image.ibb.co/mLvmrb/include_loading_server_ui_angularjs.png">

### Better way - Custom Directive
**Using ``ng-include``:**
```HTML
<h3 ng-include="'templates/product-title.html'"></h3>
```
**Custom Directive:**
```HTML
<product-title></product-title>
```
> Our old code and our custom Directive will do the same thing... with some additional code.

> ***Why a directive instead?***  
**Directives** allow yout to write **HTML** that express the behavior of your application.

* **Template-expanding Directives** are the simplest:
	* define a **custom tag** or **attribute** that is expanded or replaced
	* can include 	**Controller logic**, if needed
* **Directives** can also be used for:
	* Expressing complex UI
	* Calling events and registering event handlers
	* Reusing common components

## How to build Custom Directives
```js
// app.js
// . . .
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
// . . .
```
```HTML
<h3>
	<!-- // -->
	<product-title></product-title>
</h3>
```
### Attribute vs Element
<img src="https://image.ibb.co/h4HKcG/attribute_vs_element_angularjs.png">  

Thus, for an **attribute**:
```js
// app.js
// . . .
// Directives
//	// dash in HTML will translate into CamelCase in JavaScript
// <product-title></product-title>
app.directive('productTitle', function(){
	return {
		// returns a directive definition object
		restrict: 'A', // type of directive A => Attribute
		templateUrl: 'templates/product-title.html'
	};
});
// . . .
```
> Though normally Attributes would be for mixin behaviors ...

When you're writing an AngularJS application, you should be able to understand the behavior and intent from just the HTML.





---------------------
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png" height="125px"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png" height="125px"> <img src="https://c1.staticflickr.com/6/5622/22160892602_e5474a698d.jpg" height="125px">
