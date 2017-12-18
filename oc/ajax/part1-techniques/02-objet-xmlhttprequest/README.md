# Notes - L'objet XMLHttpRequest
[<img src="https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png" width=23% alt="Source" title="source">](https://openclassrooms.com/courses/ajax-et-l-echange-de-donnees-en-javascript/l-objet-xmlhttprequest-1)

| Methode | <img src="https://user.oc-static.com/files/229001_230000/229899.png" alt="Internet Explorer" title="Internet Explorer"> | <img src="https://user.oc-static.com/files/229001_230000/229896.png" alt="Firefox" title="Firefox"> | <img src="https://user.oc-static.com/files/229001_230000/229898.png" alt="Opera" title="Opera"> | <img src="https://user.oc-static.com/files/229001_230000/229897.png" alt="Google Chrome" title="Google Chrome"> | <img src="https://user.oc-static.com/files/229001_230000/229900.png" alt="Safari" title="Safari"> |
| ------------|--------|-----------------|-------------|------------|-------------|
| **XMLHttpRequest** | Oui avec ActiveX pour IE < 7 | Oui | Oui | Oui | Oui |
  
## Introduction
**XMLHttpRequest** envoie une requete HTTP vers le serveur, et une fois la requete envoyee, les donnees renvoyees par le serveur peuvent etre recuperees. Pour ce faire, il faut disposer d'un objet disposant de cette fonctionnalite.  
Cet objet a ete developpe par Microsoft et implemente dans Outlook puis dans Internet Explorer 5.5 en tant que controle ActiveX.  
Microsoft l'avait a l'epoque nommee **XMLHTTP**.
  
Par la suite, les autres navigateurs suivirent et implémentèrent un objet appelé **XMLHttpRequest**. 

A l'heure actuelle, les navigateurs récents (IE7, FF2, Opera 9, Safari...) implémentent tous cet objet.  
  
> Pour la suite **XMLHttpRequest** sera abrege par **XHR**.  
  
  ### Quelques liens
  * <img src="https://user.oc-static.com/files/108001_109000/108804.gif" target="_blank"> [XMLHTTP](http://msdn2.microsoft.com/en-us/library/ms537505.aspx)
  * <img src="https://user.oc-static.com/files/108001_109000/108804.gif" target="_blank">[XMLHttpRequest](http://msdn2.microsoft.com/en-us/library/ms535874%28VS.85%29.aspx)  
  * <img src="https://user.oc-static.com/files/108001_109000/108805.gif" target="_blank"> [XMLHttpRequest](https://www.w3.org/TR/XMLHttpRequest/)

## Instancier un objet XHR
Pour instancier un objet XHR, on procede de la meme maniere que pour n'importe quel objet JavaScript a savoir avec le mot-cle ``new``.
```js
var xhr = new XMLHttpRequest();
```
Les versions d'Internet Explorer inférieures à la version 7 requièrent toujours une instanciation via un contrôle [ActiveX](https://fr.wikipedia.org/wiki/ActiveX).  
Il y a deux façons d'instancier un objet XHR avec un contrôle ActiveX et elles dépendent de la version d'XMLHTTP utilisée.  
On va utiliser un ``try ... catch``, l'instanciation indiquee dans le ``try`` etant la plus recente:  
```js
try{
	var xhr = new ActiveXObject("Msxml2.XMLHTTP");
}catch(e){
	var xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
```
Pour faire un script homogene, on rassemble le tout en prenant soin de tester la prise en charge des differentes methodes d'instanciation:  
On peut meme utiliser une fonction qui retourne l'objet XHR instancie, ce qui simplifie les choses:  
```js
function getXMLHttpRequest() {
	var xhr = null;
	
	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	return xhr;
}
```
> Pour la suite cette fonction sera placé dans un fichier nommé oXHR.js pour ne pas devoir la réécrire à chaque fois et ainsi alléger la lecture des codes.  

Par la suite, pour instancier un objet XHR, il suffira de faire :
```js
var xhr = getXMLHttpRequest();
```  
## Envoi d'une requete HTTP
> *cf. oc/ajax/02-objet-xmlhttprequest/envoi-req.js*
### Definir et envoyer
Dans un premier temps, il faut définir les modalités d'envoi avec la méthode ``open``, et on l'enverra ensuite avec la méthode ``send`` :  
```js
var xhr = getXMLHttpRequest(); // Voyez la fonction getXMLHttpRequest() définie dans la partie précédente

xhr.open("GET", "handlingData.php", true);
xhr.send(null);
```  
``open`` s'utilise de cette facon: **``open(sMethod, sUrl, bAsync)``**  
* ``sMethod`` : la methode de transfer : GET ou POST;
* ``sUrl`` : la page qui donnera suite a la requete. Ca peut etre une page dynamique (PHP, CFM, ASP) ou une page statique(TXT, XML, ...);
* ``bAsync`` : definit si le mode de transfert est asynchrone ou synchrone. Dans ce cas, il est a ``true``. Ce parametre est optionnel et vaut ``true`` par defaut, mais il est courant de le definir quand meme.
  
En cas d'utilisation de la methode POST, on doit absolument changer le type MIME de la requete avec la methode ``setRequestHeader``, sinon le serveur ignorera la requete :
```js
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
```
> Cette derniere ligne doit etre placee apres la ligne contenant la methode ``open``!  
### Passer des variables
Il est possible de passer des variables au serveur.

**GET** : les variables sont transmises directement dans l'URL:
```js
xhr.open("GET", "handlingData.php?variable1=truc&variable2=bidule", true);
xhr.send(null);
```

**POST** : il faut specifier les variables dans l'argument de ``send`` :
```js
xhr.open("POST", "handlingData.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("variable1=truc&variable2=bidule");
```

### Proteger les caracteres
Pour conserver les caracteres speciaux et les espaces, on utilise la fonction globale **``encodeURIComponent``**, comme ceci:
```js
var sVar1 = encodeURIComponent("contenu avec des espaces");
var sVar2 = encodeURIComponent("je vois que vous êtes un bon élève... oopa !");

xhr.open("GET", "handlingData.php?variable1=" + sVar1 + "&variable2= " + sVar2, true);
xhr.send(null);
```

## Traitement cote serveur
### Une page PHP
La page se comporte comme une page PHP normale. La recuperation des variables se fait via $_GET ou $_POST. Il faut penser a la securite, quelqu'un pourrait l'appeler directement sans passer par l'appel via XMLHttpRequest (il peut donc mettre directementl'URL de la page):
```php
<?php

header("Content-Type: text/plain"); // Utilisation d'un header pour spécifier le type de contenu de la page. Ici, il s'agit juste de texte brut (text/plain). 

$variable1 = (isset($_GET["variable1"])) ? $_GET["variable1"] : NULL;
$variable2 = (isset($_GET["variable2"])) ? $_GET["variable2"] : NULL;

if ($variable1 && $variable2) {
	// Faire quelque chose...
	echo "OK";
} else {
	echo "FAIL";
}

?>
```

## Recuperation de donnees
### Le changement d'etat
Lorsque l'on envoie une requete via XMLHttpRequest, celle-ci passe par plusieurs etats differents:
* **0 :** L'objet XHR a été créé, mais pas encore initialisé (la méthode ``open`` n'a pas encore été appelée)
* **1 :** L'objet XHR a été créé, mais pas encore envoyé (avec la méthode ``send``)
* **2 :** La méthode ``send`` vient d'être appelée
* **3 :** Le serveur traite les informations et a commencé à renvoyer des données
* **4 :** Le serveur a fini son travail, et toutes les données sont réceptionnées

Pour detecter les changements d'etats des requetes on utilise la propriete ``onreadystatechange``, et a chaque changement d'etat (state) on regarde lequel il s'agit:
```js
var xhr = getXMLHttpRequest();

xhr.onreadystatechange = function() {
	// Serveur a tout renvoye
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
		alert("OK"); // C'est bon \o/
	}
};

xhr.open("GET", "handlingData.php", true);
xhr.send(null);
```
On utilise ``readyState`` pour connaitre l'etat de la requete. On verifie aussi le code d'etat (comme 404 pour les pages non trouvees) pour verifier si tout s'est bien passe. 
Pour cela on utilise la propriete ``status``. Si elle vaut **200** ou **0** (aucune reponse pour les tests en local), tout est OK.

### Recuperer les donnees
Il suffit d'utiliser les deux proprietes disponibles:
* **``responseText`` :** pour recuperer les donnees sous forme de texte brut
* **``esponseXML`` :** pour recuperer les donnees sous forme d'arbre XML

**Un ``alert`` simple**
```js
xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
                alert(xhr.responseText); // Données textuelles récupérées
        }
};
```
-----------
  
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_jQuery.svg/2000px-Logo_jQuery.svg.png" width=38%><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/1280px-AJAX_logo_by_gengns.svg.png" width=38%><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" width=17%>