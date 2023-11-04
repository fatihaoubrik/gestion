function enregistrerachat(){
    var Idfournisseur=document.getElementById("IDF").value;
    var Qantité=document.getElementById("Q").value;
    var Prixunitaire=document.getElementById("PU").value;
    var Date=document.getElementById("Date").value;
    var Table=document.getElementById("Table");
    var ligne=Table.insertRow(1);
    var cellule1=ligne.insertCell(0);
    var cellule2=ligne.insertCell(1);
    var cellule3=ligne.insertCell(2);
    var cellule4=ligne.insertCell(3);
    console.log(Idfournisseur,Qantité,Prixunitaire,Date);
    cellule1.innerHTML=Idfournisseur;
    cellule2.innerHTML=Qantité;
    cellule3.innerHTML=Prixunitaire;
    cellule4.innerHTML=Date;
    
    
    }