// ===============================
// Parte 1: Variáveis, Tipos e Condicionais
// ===============================

let nameUser = "Anna";
let age = 20;

// Condicional simples
if (age >= 18) {
  console.log(nameUser + " is an adult.");
} else {
  console.log(nameUser + " is underage.");
}

// ===============================
// Parte 2: Funções Personalizadas
// ===============================

// Função 1: Saudação personalizada
function greeting(user) {
  return "Hello, " + user + "! Welcome to JavaScript 🚀";
}

// Função 2: Somar dois números
function sum(a, b) {
  return a + b;
}

// ===============================
// Parte 3: Loops
// ===============================

// Loop 1: for - imprimir números de 1 a 5
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// Loop 2: while - contagem regressiva
let counter = 3;
while (counter > 0) {
  console.log("Countdown: " + counter);
  counter--;
}

// ===============================
// Parte 4: Manipulação do DOM
// ===============================

const output = document.getElementById("output");

// Interação 1: Mostrar saudação
document.getElementById("btnSaudacao").addEventListener("click", function() {
  output.innerText = greeting("User");
});

// Interação 2: Calcular soma
document.getElementById("btnCalcular").addEventListener("click", function() {
  let result = sum(5, 7);
  output.innerText = "The sum of 5 + 7 is " + result;
});

// Interação 3: Gerar lista dinâmica
document.getElementById("btnLista").addEventListener("click", function() {
  output.innerHTML = ""; // limpa
  let list = document.createElement("ul");
  
  // Usando loop forEach
  ["JavaScript", "HTML", "CSS"].forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  output.appendChild(list);
});
