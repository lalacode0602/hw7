// function to increment count

const incrementClick = () => {
  //get HTML element with click count
  const clickCountElement = document.getElementById("clickCount");
  // assign count to variable and increment
  let count = Number(clickCountElement.innerText) + 1;
  clickCountElement.innerText = count;
}


// button event handler
const btnClick = document.getElementById("myButton");

btnClick.addEventListener("click", incrementClick);


// Deactivate

// Get button
const deactivateButton = document.getElementById("deactivate");
// add event listner
deactivateButton.addEventListener("click", e => {
  btnClick.removeEventListener("click", incrementClick)
});


//Reactivate 
//Get button

const reactivateButton = document.getElementById("reactivate");
reactivateButton.addEventListener("click", e =>{
  btnClick.addEventListener("click", incrementClick)
});

