
const dList = document.getElementById("desserts");

const btnClick = document.getElementById("addButton");

btnClick.addEventListener("click", e =>{
  listElement = document.createElement("ul");
  dessert = prompt("Type a name of dessert you want to add");
  listElement.textContent = dessert;
  dList.appendChild(listElement);
})