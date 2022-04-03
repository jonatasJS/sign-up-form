const eye = document.getElementById("icon-eye");
const inputPass = document.getElementById("password");
let isShoePass = false;

eye.addEventListener("click", () => {
  console.log(isShoePass);
  eye.classList.toggle("fa-eye-slash");
  eye.classList.toggle("fa-eye");
  if(isShoePass) inputPass.getAttribute("type") = "password";
  else if(isShoePass == false) inputPass.getAttribute("type") = "text";

  isShoePass = !isShoePass;
});