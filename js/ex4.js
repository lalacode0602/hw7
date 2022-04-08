
// num1Element = document.querySelector("form")

formElement = document.querySelector("form");

formElement.addEventListener("submit", e => {
  // console.log(e.target.elements.num1.value);
  const num1 = Number(e.target.elements.num1.value);
  const num2 = Number(e.target.elements.num2.value);
  total = num1 + num2;
  document.getElementById("sum").textContent = String(total);
  e.preventDefault();
})


formElement.addEventListener("reset", e =>{
  e.target.elements.num1.value = "";
  e.target.elements.num2.value = "";
  document.getElementById("sum").textContent ="";
  e.preventDefault();
})