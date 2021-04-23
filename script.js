// VARIAVEIS

var nome = "Alexandre Queiroz";
var idade = 38;
var idade50 = 50;
var frase = "Vascão é o melhor time do mundo";

//alert(idade + idade50);

const Logar = () => {
  console.log(nome);
  console.log(frase);
  console.log(frase.replace("Vascão", "Vasco").toLowerCase());
};

Logar();

// ARRAYS

var listaFrutas = ["maçã", "pêra", "laranja"];
listaFrutas.push("uva");
console.log(listaFrutas);
listaFrutas.pop();
console.log(listaFrutas);
listaFrutas.reverse();
console.log(listaFrutas[0]);
console.log(listaFrutas.toString()[0]);
console.log(listaFrutas.join("=|="));

var frutaNova = [
  { nome: "Maçã", cor: "vermelha" },
  { nome: "Pera", cor: "verde" },
];

console.log("Nome: " + frutaNova[1].nome);

// IF
if (idade > idade50) {
  console.log("É maior");
} else {
  console.log("É menor");
}

// WHILE
var count = 5;
while (count > 0) {
    console.log(count)
    count--;
}

// FOR
for(count=5; count > 0; count--){
    console.log(count);
}

var d = new Date();

alert(d);
alert(d.getMonth());
// alert(d.getDate())
// alert(d.getDay())
// alert(d.getHours())
// alert(d.getMinutes())