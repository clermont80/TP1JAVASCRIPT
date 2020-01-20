<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
  <link rel="stylesheet" href="style.css">
  <script type="text/javascript" src="javascript.js"></script>
</head>
<body>

<button onclick="calculrec()">rectangle</button>
<button onclick="calculcercle()">cercle</button>
<button onclick="affiche()">multiplication</button>
<button onclick="affichetab()">addition tab</button>
<button onclick="boucleremplissage()">boucle1</button>
<button onclick="boucleremplissage2()">boucle2</button>
<button onclick="affichesoustraction()">soustraction tab</button>
<button onclick="jourdelasemaine()">jour</button>


<div onmouseover="this.style.color='red'" onclick="this.style.color='lime'" ondblclick="this.style.color='navy'">
<p>phrase</p>
</div>



<p onclick="this.style.margin='50%'" ondblclick="this.style.margin='0%'" this.style.width='500px'> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
</p>



<p>
  <img src="tag.jpg" width="128" height="128" alt="img" id="tag1" onmouseover="doMouseOver()" onmouseout="doMouseOut()">
</p>

<p onmouseover= "innerHTML='nan c faux'" onmouseout="innerHTML='je suis gentil'">je suis gentil</p>

<h1 id="h1" onclick="centrage_h1()" onmouseover="modif_paragraphe()" onmouseout="modif_paragraphe2()">Original</h1>

<button  onclick="ouvreFenetre()">Ouvrefenetre</button>
<button  onclick="bougefenetre()">bougefenetre</button>
<button  onclick="bougefenetrecurrent()">bougefenetre2</button>
<button  onclick="reduitfenetre()">reduitfenetre</button>

<div ondblclick="affiche_properties()" this.style.width='100px'>
<p> ici ça affiche les propriétés</p>
</div>
<body onload="init()"> 

<form id="myform" action="" name="form">
  <label> Votre nom ? : </label>
  <input type="text" id="name">
  <button id="envoi">envoyer</button>
  <button id="clear">rezet</button>
</form>

</body>
</body>
</html>
