document.addEventListener("DOMContentLoaded", e => {
  let xml, xmlhttp, xmlDoc, vliste;

  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "produit.xml", false);
  xmlhttp.send();
  xmlDoc = xmlhttp.responseXML;
  let produits = xmlDoc.getElementsByTagName("produit");
  let vProduits = "<ul>";
  for (let i = 0; i < produits.length; i++) {
    let image = produits[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
    let nom = produits[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue;
    let mandat = produits[i].getElementsByTagName("mandat")[0].childNodes[0].nodeValue;
    let naissance = produits[i].getElementsByTagName("naissance")[0].childNodes[0].nodeValue;
    let statut = produits[i].getElementsByTagName("statut")[0].childNodes[0].nodeValue;

    vProduits += "<li><img src='" + image + "'></li>";
    vProduits += "<li>Nom : " + nom + "</li>";
    vProduits += "<li>Mandat : " + mandat + "</li>";
    vProduits += "<li>Naissance : " + naissance + "</li>";
    vProduits += "<li>Statut : " + statut + "</li>";
    vProduits += "</ul>";
    vProduits += "<ul>";
  }

  document.getElementById("produits").innerHTML = vProduits;
});