var xhr = getXMLHttpRequest();

// definition des modalites d'envoi avec la methode 'open'
xhr.open("GET", "handlingData.php", true);
// on l'ouvre ensuite avec 'send'
xhr.send(null);