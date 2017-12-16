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

-----------
  
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_jQuery.svg/2000px-Logo_jQuery.svg.png" width=38%><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/1280px-AJAX_logo_by_gengns.svg.png" width=38%><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" width=17%>