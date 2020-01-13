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
    }

    alert(tab2);
    
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
    
}

