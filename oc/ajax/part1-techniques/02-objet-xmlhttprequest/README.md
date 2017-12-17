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


-----------
  
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_jQuery.svg/2000px-Logo_jQuery.svg.png" width=38%><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/1280px-AJAX_logo_by_gengns.svg.png" width=38%><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" width=17%>