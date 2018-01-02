# AngularJS - CodeSchool - LEVEL 2
[<img src="https://www.codeschool.com/assets/pages/brand/downloads/brand-horizontal-tagline-a0192e1b76e417c6083a0f1885bea8ab24cae64771aa9d719fe45f2ba7bf4856.png" title="CodeSchool" alt="CodeSchool" width=50%>]("https://www.codeschool.com/")

> *Level 3: Forms, Models, and Validations*

# Introduction
> **How can we let users add content?**

We add ``reviews`` to our ``gem`` object:
```js
var gems = [
	{
		name: 'Dodecahedron',
		price: 2,
		description: 'Some gems have hidden values qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
		images: [ . . . ],
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
	}
```
Then inside our review panel, we do a ``ng-repeat``:
```html
<!-- TAB-PANELS -->
<!-- DESCRIPTION -->
<div class="panel" ng-show="panel.isSelected(1)">
	<h4>Description</h4>
	<p>{{product.description}}</p>
</div>
<!-- //DESCRIPTION -->
<!-- SPECIFICATION -->
<div class="panel" ng-show="panel.isSelected(2)">
	<h4>Specifications</h4>
	<blockquote>None yet</blockquote>
</div>
<!-- //SPECIFICATION -->
<!-- REVIEWS -->
<div class="panel" ng-show="panel.isSelected(3)">
	<h4>Reviews</h4>

	<blockquote ng-repeat="review in product.reviews">
		<b>Stars: {{review.stars}}</b>
		{{review.body}}
		<cite>by : {{review.author}}</cite>
	</blockquote>
</div>
<!-- //REVIEWS -->
<!-- //TAB-PANELS -->
```
### Form implementation
```html
<form name="reviewForm">
	<!-- LivePreview -->
	<blockquote>
		<b>Stars: {{reviews.stars}}</b>
		{{review.body}}
		<cite>by: {{review.author}}</cite>
	</blockquote>
	<!-- ActualForm -->
	<select>
		<option vlaue="1">1 star<option>
		<option vlaue="2">2 stars<option>
		<option vlaue="3">3 stars<option>
		<option vlaue="4">4 stars<option>
		<option vlaue="5">5 stars<option>
	</select>
	<textarea></textarea>
	<label>by:</label>
	<input type="email">
	<input type="submit" value="Submit">
</form>
```
<img src="https://image.ibb.co/e65tmb/live_preview_form_angularjs.png">  
We use the ``ng-model`` directive:
<img src="https://image.ibb.co/kfQXew/ng_model_angularjs.png">  

```html
<!-- REVIEWS -->
<div class="panel" ng-show="panel.isSelected(3)">
	<h4>Reviews</h4>
	<!-- The review -->
	<blockquote ng-repeat="review in product.reviews">
		<b>Stars: {{review.stars}}</b>
		{{review.body}}
		<cite>by : {{review.author}}</cite>
	</blockquote>
	<!-- Form -->
	<form name="reviewForm">
		<!-- LivePreview -->
		<div class="form-group">
		<blockquote>
			<b>Stars: {{review.stars}}</b>
			{{review.body}}
			<cite>by: {{review.author}}</cite>
		</blockquote>
		<!-- ActualForm -->
		<h3>Submit a review</h3>
		<select class="form-control" ng-model="review.stars">
			<option value="1">1 star</option>
			<option value="2">2 stars</option>
			<option value="3">3 stars</option>
			<option value="4">4 stars</option>
			<option value="5">5 stars</option>
		</select>
		<br>
		<textarea class="form-control" ng-model="review.body"></textarea>
		<br>
		<input class="form-control" id="inputAuthor" type="email" ng-model="review.author">
		<br>
		<input class="btn btn-primary mb-2" type="submit" value="Submit">
	</div>
	</form>
</div>
<!-- //REVIEWS -->
```
### Binding examples
With a **Checkbox**
```html
<input ng-model="review.terms" type="checkbox" > I agree to the terms
```
With **Radio Buttons**
```html
What color would you like?

<input ng-model="review.color" type="radio" value="red"> Red
<input ng-model="review.color" type="radio" value="blue"> Blue
<input ng-model="review.color" type="radio" value="green"> Green
```

# Actually adding reviews
## Organizing the code
We notice that the review variable, we didn't define it anywhere.
It's good practice to define it. We could use ``ng-init`` but we'ere better off creating a controller.  
It is better to do initialization inside a **<u>Controller</u>**. So we create a **Controller** for ou **Reviews**.  
```js
// Review Controller
app.controller('ReviewController', function(){
	this.review = {};
});
```
```html
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl">
	<!-- LivePreview -->
	<div class="form-group">
	<h3>Submit a review</h3>
	<blockquote>
		<b>{{reviewCtrl.review.stars}} Stars</b>
		{{reviewCtrl.review.body}}
		<cite class="clearfix">by: {{reviewCtrl.review.author}}</cite>
	</blockquote>
	<!-- ActualForm -->
	<select class="form-control" ng-model="reviewCtrl.review.stars" ng-options="stars for stars in [5,4,3,2,1]"  title="Stars">
		<option value="">Rate the Product</option>
	</select>
	<br>
	<textarea class="form-control" ng-model="reviewCtrl.review.body" placeholder="Write a short review of the product..." title="Review"></textarea>
	<br>
	<input class="form-control" id="inputAuthor" type="email" ng-model="reviewCtrl.review.author" placeholder="jimmyDean@example.org" title="Email">
	<br>
	<input class="btn btn-primary mb-2 pull-right" type="submit" value="Submit">
</div>
</form>
```
## Make the form work
**Using ``ng-submit`` to make the form work**  
``ng-submit`` allows to call a function when the form is submitted.
```js
// Review Controller
app.controller('ReviewController', function(){
	this.review = {};
	this.addReview = function(prod){
		prod.reviews.push(this.review);
	};
});
```
```html
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl"
								ng-submit="reviewCtrl.addReview(product)">
<!-- . . . -->
```
## Reset the form & clear the live preview as well
We just empty ``this.review``:
```js
// Review Controller
app.controller('ReviewController', function(){
	this.review = {};
	this.addReview = function(prod){
		prod.reviews.push(this.review);
		this.review = {};
	};
});
```
> If we refresh the page, the reviews get reset!
> We're not saving reviews anywhere yet...

# Validations
*AngularJS has some great client side Validations we can use our directives.*
## Default HTML Validation
We need to turn off the default **HTML Validation**:
```html
<!-- Form -->
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl"
								ng-submit="reviewCtrl.addReview(product)" novalidate>
```
## Required
Mark the **required** fields:
```html
<!-- . . . -->
<select class="form-control" ng-model="reviewCtrl.review.stars" ng-options="stars for stars in [5,4,3,2,1]"  title="Stars" required>
<!-- . . . -->
<textarea class="form-control" ng-model="reviewCtrl.review.body" placeholder="Write a short review of the product..." title="Review" required></textarea>
<!-- . . . -->
<input class="form-control" id="inputAuthor" type="email" ng-model="reviewCtrl.review.author" placeholder="jimmyDean@example.org" title="Email" required>
<!-- DEBUGING-CODE (prints forms validity) -->
<div>reviewForm is {{reviewForm.$valid}}</div>
<input class="btn btn-primary mb-2 pull-right" type="submit" value="Submit">
```
> ``{{reviewForm.$valid}}``
* ``reviewForm`` is the name of the form
* ``$valid`` for referencing a property on the form, this is a built-in property

### We don't want the form to submit when it's invalid.  
We only want the ``addReview()`` to be called if ``reviewForm.$valid`` is ``true``:
```js
<!-- Form -->
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl"
								ng-submit="reviewForm.$valid && reviewCtrl.addReview(product)" novalidate>
```

### Give a hint to the validity of the form
<img src="https://image.ibb.co/nAX5jw/the_input_classes.png">
So lets highlight form field using classes after we start typing, ``ng-dirty`` showing if a field is **valid** or **invalid**.  
``ng-valid`` ``ng-invalid``:
```CSS
.ng-invalid.ng-dirty {
	border-color: #FA787E;
}

.ng-valid.ng-dirty {
	border-color: #78FA89;
}
```
### HTML5-based type Validations
#### Web forms usually have rules around email valid input
* **AngularJS** has built-in validations for common input types:
```HTML
<input type='email' name='email'>
```
```HTML
<input type='url' name='homepage'>
```
```HTML
<input type='number' name='quantity'>
<!-- Can also define min=1 and max=10 for example -->
```





---------------------
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png" height="125px"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png" height="125px"> <img src="https://c1.staticflickr.com/6/5622/22160892602_e5474a698d.jpg" height="125px">
