
// Request status
const  xhr = new XMLHttpRequest();
const  url = "../api/president.json";
const  parent = document.getElementById("produits");

 xhr.onreadystatechange = () => {

        // Vérifier si la requête de récupération est terminée
        if (xhr.readyState == 4 && xhr.status == 200) { 
        
          // Parse jSon, pour transformer le fichier txt en flux json
          let jsonData = JSON.parse(xhr.responseText);
            console.log(jsonData)
          // appel de la méthode, passage en paramètre de la requete  
          showProd(jsonData);
        }
        else{
        console.log("erreur de requête");
        parent.innerHTML = `<p>Erreur de requête : ${xhr.status}</p>`
    }
};

// traitement des données récupérées 
const showProd=(data)=>{

    let output = ""; // Open list
    let i;
    
    // itération sur les donnée depuis l'objet data
    for (const president of data.racine.produit) {
        output += `<figure><img src="${president.image}" alt="${president.nom}">
        <figcaption>
            <ul>
            <li>Nom : ${president.nom}</li>
            <li>Mandat : ${president.mandat}</li>
            <li>Naissance : ${president.naissance}</li>
            <li>Statut : ${president.statut}</li>
            </ul>
        </figcaption>
    </figure>`  
    } 
 
    
    parent.innerHTML = output;
    localStorage.setItem("Data", JSON.stringify(data));
    
 }
  xhr.open("GET", url, true);
  xhr.send()
