



document.addEventListener("keypress", e =>{
  let bgColor = "white";
  if(e.key == "r"){
    bgColor = "red";
  }else if(e.key == "y"){
    bgColor = "yellow";
  }else if(e.key == "g"){
    bgColor = "green";
  }else if(e.key == "b"){
    bgColor = "blue";
  }

  document.getElementsByTagName("div").style.backgroundColor = bgColor;
})

