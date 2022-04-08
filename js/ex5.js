
match = "";
length = "";
digit ="";

document.getElementById("password1").addEventListener("input", e => {
  const pass1 = e.target.value;
  if (pass1.length < 6){
    length = "(Error: password must be at least 6 characters)";
  }
  if(/\d/.test(pass1)){
  }else{
    digit = "(Error: passwrod must contain at least one digit)";
  }
})

document.getElementById("password2").addEventListener("input", e => {
  const pass1 = document.getElementById("password1").value;
  const pass2 = e.target.value;
  if (pass1 === pass2){
  }else{match = "(Error: two password inputs must be identical)";}
})

document.getElementById("passwordHelp").textContent = match + digit + length