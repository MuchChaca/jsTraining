# First steps with AJAX
[<img src="https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png" width=23% alt="Source" title="source">](https://openclassrooms.com/courses/simplifiez-vos-developpements-javascript-avec-jquery/premiers-pas-avec-ajax)
## What is AJAX?
> *Boring stuff to complete*

## Load a file
We use ``load``, syntax:
```js
$('sel').load('page_name', function() {
  // one or many instructions
});
```
* ``sel`` is a jQuery selector that identify an element
* ``page_name`` is the name of the webpage's content to use use for the update
* If specified, the callback function is executed when the method is executed,
meaning when the element(s) have been updated.

### Example
For the first example, a document shows 2 buttons and 4 ``<div>``.
Three of them contain text and one of them an image.  
1. The first button updates the content of the first ``<div>``.
2. The second button updates the content of the second ``<div>``.
All of that without touching the rest of the document.  

#### index.html
```html
<style type="text/css">
  div { width: 400px; height: 300px; float: left; margin: 5px; }
  #premier { background-color: #F6E497; }
  #troisieme { background-color: #CAF1EC; }
  #quatrieme { background-color: #F1DBCA; }
</style>

<button id="majPremier">Mise à jour première zone</button>
<button id="majDeuxieme">Mise à jour deuxième zone</button><br /><br />
<div id="premier">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>

<div id="deuxieme">
  <img src="image1.jpg" width=400px>
</div>

<div id="troisieme">
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>

<div id="quatrieme">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</div>

<script src="jquery.js"></script>
<script>
  $(function() {
    $('#majPremier').click(function() {
      $('#premier').load('maj1.html', function() {
        alert('La première zone a été mise à jour');
      });
    });

    $('#majDeuxieme').click(function() {
      $('#deuxieme').load('maj2.html', function() {
        alert('La deuxième zone a été mise à jour');
      });
    });
  });
</script>
```

#### maj1.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>

  <body>
    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
  </body>
</html>
```  

#### maj2.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>

  <body>
    <img src="image2.jpg" width=400px>
  </body>
</html>
```
**[Try the code](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/ftp-tutos/cours/jquery/partie+4/chapitre+1/ajax+1/ajax.html)**

*Note*:
* Use an apache server.
* The callback function is actually called right before the ``$().load()``

## Load a part of a file
By modifying slightly the code of the ``load()`` method, it is possible to use only a part of the data  given by the AJAX query.  
To do so, just add to the name of the file a space then a jQuery selector:
```js
$('sel').load('page_name sel2', function(){
	// One or many instructions
});
```
where:
* ``sel2`` is a jQuery selector, without ``$`` or ``()`` that will allow to isolate some data of ``page_name``

### Example
With ``maj1.html`` and ``maj2.html`` into a single file:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>

  <body>
    <div id="modif1">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </div>
    <img id="modif2" src="paysage2.jpg">
  </body>
</html>
```
The AJAX would look like this:
```js
$('#majPremier').click(function() {
  $('#premier').load('maj.html #modif1', function() {
    alert('La première zone a été mise à jour');
  });
});

$('#majDeuxieme').click(function() {
  $('#deuxieme').load('maj.html #modif2', function() {
    alert('La deuxième zone a été mise à jour');
  });
});
```

## Provide params to a PHP program
We can use jQuery to create URLs with one or many characters (``http://site.fr/page.php?id=10&p=2``), if we can interract with a database with PHP and return information that depends on the URL's params.

### First form of ``load()`` method
```js
$('sel').load(url,param);

```
where:
* ``url`` is the name of the PHP page used for the update
* ``param`` is a string with one of many parameters/values. For example if ``param`` is "id=5, p=14" and ``url`` is ``http://site.fr/page.php``, the page used for the update will be ``http://site.fr/page.php?id=5&p=14``.

Example with:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Ajax - Load</title>
  </head>

  <body>
    <input type="text" id="ref">
    <button id="action">Afficher</button><br />
    <div id="r">Entrez un nombre compris entre 1 et 10 pour afficher un proverbe chinois</div>

    <script src="jquery.js"></script>
    <script>
      $(function() {
        $('#action').click(function() {
          var param = 'l=' + $('#ref').val();
          $('#r').load('http://www.proverbes.php',param);
        });  
      });
      </script>
  </body>
</html>
```

The PHP:
```PHP
<?php
$proverbe = array("On ne rassasie pas un chameau en le nourrissant à la cuillère.",
                  "Connaître son ignorance est la meilleure part de la connaissance.",
                  "Une maison en paille où l'on rit, vaut mieux qu'un palais où l'on pleure.",
                  "Le vrai voyageur ne sait pas où il va.",
                  "Point n'est besoin d'élever la voix quand on a raison.",
                  "Un ami c'est une route, un ennemi c'est un mur.",
                  "Un peu de parfum demeure toujours sur la main qui te donne des roses.",
                  "Si élevé que soit l'arbre, ses feuilles tombent toujours à terre.",
                  "Si ce que tu as à dire n'est pas plus beau que le silence, tais toi.",
                  "Trois coupes de vin font saisir une doctrine profonde.");
$l=$_GET["l"];
if (($l != "") && ($l>0) && ($l<11))
{
  echo "<u>Proverbe chinois N° ".$l."</u><br><br>";
  echo "<b>".$proverbe[$l-1]."</b>";
}    
else
  echo "<font color=red>Entrez un nombre compris entre 1 et 10 !</font>";  
?>
```

> It is impossible to print data from another website. The PHP process has to be on the same host than the jQuery

### Second form of ``load()``
We can pass an object to the second argument of the method ``load()``. For example, we can give a couple of params/values using it like so:
```js
$('sel').load('http://www.site.com/page.php',{ id:50, nom: 'durand'});
```


-----------

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_jQuery.svg/2000px-Logo_jQuery.svg.png" width=38%><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/1280px-AJAX_logo_by_gengns.svg.png" width=38%><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" width=17%>
