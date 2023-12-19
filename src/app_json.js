document.addEventListener("DOMContentLoaded",e =>{
// Load the JSON file
fetch('../api/president.json')
.then(response => response.json())
.then(data => {
    // Get the produit elements
    const produits = data.racine.produit;

    // Create an HTML list
    const list = document.querySelector("ul");

    // Create list items for each produit
    for (let i = 0; i < produits.length; i++) {
      const produit = produits[i];
      const listItem = document.createElement('li');
      const image = document.createElement('li');
      image.src = produit.image;
      image.alt = produit.nom;
      image.innerHTML = `<img src="${produit.image}" alt="${produit.nom}">`;
      listItem.innerHTML = `<figure><img src="${produit.image}" alt="${produit.nom}">
                                <figcaption>
                                    <ul>
                                    <li>Nom : ${produit.nom}</li>
                                    <li>Mandat : ${produit.mandat}</li>
                                    <li>Naissance : ${produit.naissance}</li>
                                    <li>Statut : ${produit.statut}</li>
                                    </ul>
                                </figcaption>
                            </figure>`
      list.appendChild(listItem);
    }

    // Add the list to the HTML page
    const ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(list);
  })
.catch(error => console.error(error));

})