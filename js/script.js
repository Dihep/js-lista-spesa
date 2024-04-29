// Creazione variabili
var listaSpesa = ["Nutella", "Marmellata", "Pane", "Pasta", "Sugo", "Maionese", "Asparagi", "Mascarpone", "Pere", "Mele", "Carote", "Prosciutto", "Jogurt", "Passata di pomodoro", "Latte", "Cioccolata", "Pavesini", "Salame", "Macinato misto", "Grissini", "Riso", "Farina", "Zucchero", "Uova", "Sedano", "Insalata", "Salsa di soia"];
const lista = document.querySelector("ul");

//Ciclo di stampa
let i = 0;
while ( i < listaSpesa.length) {
    const newItem = document.createElement("li");
    newItem.innerText = listaSpesa[i];
    lista.append(newItem);
    i++;
};