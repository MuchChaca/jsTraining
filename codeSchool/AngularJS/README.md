# AngularJS - CodeSchool
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



---------------------
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png" height="125px"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png" height="125px"> <img src="https://c1.staticflickr.com/6/5622/22160892602_e5474a698d.jpg" height="125px">
