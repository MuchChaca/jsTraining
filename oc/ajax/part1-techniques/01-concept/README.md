# Notes
  
[<img src="https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png" width=23% alt="Source" title="source">](https://openclassrooms.com/courses/ajax-et-l-echange-de-donnees-en-javascript/le-concept-d-ajax)
### Introduction
**AJAX** : l'acronyme d'Asynchronous JavaScript And XML, autrement dit JavaScript Et XML Asynchrones.  
  
AJAX n'est ni une technologie ni un langage de programmation c'est un concept de programmation Web reposant sur plusieurs technologies comme le JavaScript et le XML. 
Le XML tend à être délaissé au profit du JSON, ce qui explique que certains puristes utilisent l'acronyme AJAJ.  
  
AJAX fait communiquer une page web avec un serveur web sans occasionner le rechargement de la page.
  
### Page Web et Application Web
Differencier : le navigateur a gauche et le serveur a droite.
  
#### Site web traditionnel
  1. Le navigateur envoie une requete - via une URL - au serveur.
  2. Le serveur répond en renvoyant au navigateur le code HTML de la page ainsi que tout ce qui lui est associé comme les scripts JavaScript, les images ou les éventuels médias et autres objets embarqués – donc la réponse du serveur est beaucoup plus volumineuse que la requête.
  3. Le navigateur affiche la page et l'utilisateur peut la parcourir quelques instants avant de cliquer sur un lien hypertexte qui enverra une nouvelle requête au serveur qui lui-même renverra le HTML correspondant... et ainsi de suite.
  
  &nbsp;
<img src="https://user.oc-static.com/files/161001_162000/161864.png" width=100%>  
  
*Le navigateur intervient seulement pour afficher la page. Le gros du travail est fait par le serveur. La majorite de la charge est donc du cote du serveur.*
  
#### Application AJAX
Le meme schema au point de vue d'AJAX. Quand on utilise le concept d'AJAX dans une page on parle d'**application Web** (ou d'application AJAX).
  
  1. La première requête est la même – ça on ne sait rien y faire. 
  2. Quand l'utilisateur cliquera sur un lien – ou un autre élément cliquable – la page ne se rechargera pas et le navigateur enverra une requête au serveur, lequel renverra les données demandées dans un format léger – comme le format JSON. Dans ce cas, le serveur n'aura renvoyé qu'un minimum de données ce qui est beaucoup plus léger et donc plus rapide. Le navigateur, par le biais de JavaScript, peut alors mettre à jour une petite partie de la page avec les données reçues du serveur.  
&nbsp;

<img src="https://user.oc-static.com/files/161001_162000/161865.png" width=100%>  

&nbsp;
> Il faut cependant faire attention à ne pas mésinterpréter ce schéma, car il ne s'agit en aucun cas de remplacer la page entière, ce qui reviendrait à recharger la page. Si on se réfère au pendule, il va balancer du côté du serveur, ce qui montre qu'il y a un problème, et dans ce cas AJAX n'est pas utilisé correctement.  

### Dialoguer avec le Serveur
Le navigateur et le serveur ne peuvent se parler que via un format de type texte brut.  
Plusieurs formats sont possibles:
* Texte simple
* HTML
* XML
* JSON

#### Le texte simple
A eviter.
#### Le HTML
Interessant car il suffit donc de l'inserer dans la page avec la propriete **innerHTML**. Cependant, peut s'averer etre assez lourd pour de grands volumes de donnees.
```html
<ul>
	<li><span title="a4242">Gordon</span></li>
	<li><span title="j3781">Barney</span></li>
	<li><span title="j7638">Eli</span></li>
	<li><span title="o7836">Chell</span></li>
	<li><span title="e5831">Odessa</span></li>
</ul>
```
#### Le XML
Avec certains objets AJAX, comme le **XMLHttpRequest** il est possible de recuperer le XML et de l'interpreter comme tel ce qui permet de manipuler des donnees avec les fonctions DOM.  
Cependant le XML aussi est verbeux et peut etre assez lourd pour de gros volumes de donnees.
```xml
<friends>
	<f name="Gordon" id="a4242" />
	<f name="Barney" id="j3781" />
	<f name="Eli" id="j7638" />
	<f name="Chell" id="o7836" />
	<f name="Odessa" id="e5831" />
</friends>
```
#### Le JSON
Le JSON structure l'information en utilisant la **syntaxe objet de Javascript** - des **objets tableaux**.  
JSON est tres leger, car non verbeux mais necessite d'etre e**valuer par le compilateur JavaScript** pour pouvoir etre utilise comme un objet. L'évaluation se fait via eval pour les navigateurs obsolètes ou via la méthode parse de l'objet natif JSON.  
L'évaluation est souvent décriée car peut se révéler dangereuse, mais dans la mesure où vous connaissez la source des données à évaluer il n'y a pas de danger.  
```json
[
	{ "name":"Gordon", "id":"a4242" },
	{ "name":"Barney", "id":"j3781" },
	{ "name":"Eli", "id":"j7638" },
	{ "name":"Chell", "id":"o7836" },
	{ "name":"Odessa", "id":"e5831" }
]
```
> Le JSON est donc le format travaillant de paire avec AJAX quand il s'agit de recevoir des données classées et structurées.
  
### Principes Synchrones et Asynchrones
- **[Asynchrone](https://fr.wikipedia.org/wiki/Asynchronisme)** : la fonction qui envoie une requete au serveur n'est pas la meme que celle qui en recevra la reponse.  
Quand un appel est asynchrone, le script principal n'attend pas d'avoir reçu les données pour continuer. Evidemment, si mon exemple synchrone marche bien avec des fonctions, il ne marche pas si le script est asynchrone ; imaginons donc une requête de type AJAX !  
- **[Synchrone](https://fr.wikipedia.org/wiki/Synchronisme)** : quand un appel externe au script principal est réalisé, le script en attend la réponse ou la fin de l'exécution.  
&nbsp;  

Quand un programme ou un script s'execute, il appelle les differentes instructions dans l'ordre dans lequel elles sont placees:
```js
var plop = 0; // première instruction
plop += 2;    // deuxième
alert(plop);  // et troisième
```
Et pour un appel de fonction:
```js
var plop = 0;                // première instruction
plop = additionner(plop, 2); // deuxième
alert(plop);                 // et troisième
```
:point_right: Quand la fonction additionner est appelée, le script principal se met en pause, et attend que la fonction soit exécutée, et qu'elle ait renvoyé une valeur (si elle ne renvoie rien, c'est pareil).

Le script s'exécute et rencontre une requête AJAX, laquelle est envoyée en mode asynchrone. Dans ce cas, la requête est envoyée, mais le script n'attend pas que la requête ait abouti, il continue quoi qu'il arrive. L'intérêt est que si la requête met quelques secondes à être traitée par le serveur, le script n'est pas ralenti.  
  
**Callback** : Une fonction **callback** est exécutée quand la requête aboutit à quelque chose (que son traitement est fini). Et c'est cette fonction de callback qui va se charger de récupérer les données renvoyées par la requête. Ainsi on sait lorsque la requete renvoie quelque chose.  



### Resume
On peut résumer l'asynchronisme en AJAX par ce schéma :  
&nbsp;
<img src="https://user.oc-static.com/files/161001_162000/161866.png" width=100%>  
&nbsp;
&nbsp;
-------------------------
  
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/1280px-AJAX_logo_by_gengns.svg.png" width=38%>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_jQuery.svg/2000px-Logo_jQuery.svg.png" width=38%>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" width=17%>