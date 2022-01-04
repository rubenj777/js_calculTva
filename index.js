"use strict";

//////////////// VARIABLES ///////////////

const TAUX_TVA = 20;
let montantHT, montantTVA, montantTTC, tauxRemise;

/////////// CODE PRINCIPAL ///////////

do {
  montantHT = parseFloat(prompt("Entre le montant HT", 100));
} while (isNaN(montantHT));

const remise = prompt("Bénéficie-tu d'une remise ?", "oui");

if (remise === "oui" || remise === "yes") {
  do {
    tauxRemise = parseFloat(prompt("Quel est le taux de la remise ?", 10));
  } while (isNaN(tauxRemise));
  montantHT = montantHT - montantHT * (tauxRemise / 100);
}

montantTVA = montantHT * (TAUX_TVA / 100);
montantTTC = montantTVA + montantHT;

document.querySelector(
  "#content"
).innerHTML = `<p>Pour un montant de ${montantHT} € HT il y a ${montantTVA} € de TVA</p><p>Le montant TTC est donc de ${montantTTC} €</p>`;
if (remise === "oui" || remise === "yes") {
  content.innerHTML += `<p>Une remise de ${tauxRemise} % a été appliquée sur le montant HT.</p>`;
} else {
  content.innerHTML += `<p>Aucune remise n'a été appliquée</p>`;
}
