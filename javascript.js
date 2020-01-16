function calculrec()
{
    var longueur = prompt("rentrez une longueur");
    var largeur = prompt("rentrez une largeur");

    var p = (longueur)*2+(largeur)*2;
    var air= longueur*largeur;

    alert("peri = " + p);
    alert("air = " + air);
}

function calculcercle()
{
    var longueur = prompt("rentrez une longueur");
    

    var p = 2 * 3.14 *longueur;
    var air= 3.14 * longueur*longueur;
    alert("peri = " + p);
    alert("air = " + air);
}

var a = 3;
var b = 2;

function multiplie(c=8)
{
    var result=c*2;
    alert(result);
}
function affiche(){
    multiplie(a);
    multiplie(b);
    multiplie();
}


function additionne(x)
{
    return x+2; //ajoute 2 à un élément
    
}

function affichetab()
{
    var tab = [-2,1,4];
    alert(additionne(tab[0]));
    alert(additionne(tab[tab.length-1]));
    
}

function boucleremplissage()
{
    var tab2 = new Array(3);
    var indice;
    
    for(indice=0;indice<3;indice++)
    {
        tab2[indice] = indice*indice;
        alert(tab2[indice]);
    }

    
    
}

function boucleremplissage2()
{
    var tab3 = new Array();
    var indice;
    var taille = prompt("rentrez une longueur");
    
    for(indice=0;indice<taille;indice++)
    {
        tab3[indice] = indice*indice;
    }

    alert(tab3);
    
}



function soustrait(z)
{
    if(z>=0)
    {
        return z-2;
    }
    else
    {
        return "nombre négatif !";
    }
}

function affichesoustraction()
{
    var tab4 = [-2,1,4];
    alert(soustrait(tab4[0]));
    alert(soustrait(tab4[tab4.length-1])); 
   
}

function jourdelasemaine()
{
    var now= new Date();
    var queljour= now.getDay();

    switch(queljour) 
    {
        case(0):
          alert("Dimanche");
          break;
        case(1):
         alert("Lundi");
          break;
        case(2):
         alert("Mardi");
          break;
        case(3):
         alert("Mercredi");
         break;
        case(4):
         alert("Jeudi");
         break;
        case(5):
         alert("Vendredi");
          break;
        case(6):
         alert("Samedi");
         break;
    }
}

function doMouseOver()
{
    
    document.getElementById("tag1").src = "tag-1036811_640.jpg";
   
}
    

function doMouseOut()
{
   
    document.getElementById("tag1").src = "tag.jpg";
    
}

function modif_paragraphe()
{
    document.getElementById("h1").innerHTML='corrigé';
    document.getElementById("h1").style.fontStyle='italic';
    
}

function modif_paragraphe2()
{
    document.getElementById("h1").innerHTML='Original';
    document.getElementById("h1").style.fontStyle='normal';
    
    
}

function centrage_h1()
{
    var centrage = document.getElementById("h1");
    centrage.setAttribute("align","center");
}

function ouvreFenetre()
{
  maFenetre=window.open("","maFenetre","width=200,height=100");
}

function bougefenetre()
{
     maFenetre.moveTo(50, 50);
}

function bougefenetrecurrent()
{
     maFenetre.moveBy(50, 50);
}

function reduitfenetre()
{
     maFenetre.resizeBy(50, 50);
}

function affiche_properties()
{
    alert("Vous utilisez " + navigator.appName);
    alert("Vous utilisez " + navigator.appVersion);
    alert("Vous utilisez " + navigator.cookieEnabled);
    alert("Vous utilisez " + navigator.language);
}

function init()
{
    var textinput = document.getElementsByName("votrenom");
    var envoi = document.getElementsByName("envoi");
    var clear = document.getElementsByName("clear");
}

function submit()
{
    write(textinput);
}

function remiseazero()
{
    textinput.document.write("");
}
