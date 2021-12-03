maFonction();

let nomVoiture = {
    marque : "peugeot",
}

let x = 50;
let z = 5;
let w = 10;

let div = document.getElementById("demo");
let div2 = document.getElementById("demoRetour");
let button = document.getElementById("monBoutton");

div.innerHTML = "Z vaut " + z + " " + "W vaut " + w + " Le résultat est " + (z + w);

let d = z + w ;
alert(d);

let prenom = "John"; let nom = "Doe"; let age = 35;

alert(w * z);
alert(w / 2);
alert (d % 9);

let l = 10, k = 5; l += k;

function maFonction() {
    alert("Salut tout le monde");
}

function maFonctionDeRetour() {
    div2.innerHTML = "Bonjour";
}
maFonctionDeRetour();

button.addEventListener("click", function () {
    alert("Tu as cliqué ! ");
})

document.getElementById("changeSurOver").addEventListener("mouseover", function() {
    this.style.background = "red";
})

let text = "une longue phrase";
let longueur = text.length;
alert("ma chaîne est bien de " + longueur);

let str1 = "Bonjour";
let str2 = " Le monde ! ";
alert(str1 + str2);

let listeVoiture = ["Renault", "Volvo", "Citroen"];
let maVoiture = listeVoiture[1];
listeVoiture.splice(0,1, "Ford");
alert(listeVoiture.length);

listeVoiture.pop();
listeVoiture.push("Ferrari");


let rNumber = Math.floor(Math.random() * 4);
let fNumber = 28.6;
fNumber = Math.round(fNumber);


let nombreUn = 10;
let nombreDeux = 5;

if (nombreUn > nombreDeux) {
    alert("Nombre un est supérieur à Nombre deux");
}

let nombreTrois = 10;
let nombreQuatre = 10;

if (nombreTrois === nombreQuatre) {
    alert("Nombre trois est égal à nombre quatre");
}

if (nombreUn !== nombreDeux) {
    alert("Nombre un n'est pas égal à nombre deux");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let fruits = ["pomme", "banane", "poire"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i);
}

let i = 0;
while(i < 10) {
    console.log(i + "inférieur à 10");
    i++;
}

 i = 0;
while(i < 10) {
    console.log(i + "inférieur à 10 et incrémente de 2");
    i += 2;
}

i = 0;
while(i < 10) {
    if(i === 5) {
       alert("L'index est égal à 5");
    }
    i++;
}