let listaSpesa = ["Pane", "Latte", "Uova", "Frutta", "Verdura", "Pringles", "m&m", "Yogurt", "Pollo"];
let indice = 0;

while (indice < listaSpesa.length) {
  let elemento = listaSpesa[indice];
  let listItem = document.createElement("li");
  listItem.textContent = elemento;
  document.getElementById("lista-spesa").appendChild(listItem);
  indice++;
}

