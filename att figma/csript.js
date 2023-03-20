const emailRegex =
/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const senhaRegex =  /^[A-Za-z0-9]\w{8,}$/;
const btnLogin = document.getElementById("btn-1");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    email.style.border = "none"
    senha.style.border = "none"

    if (!emailRegex.test(email.value && !senhaRegex.test(senha.value)) )
      email.style.border = "2px solid red"
      senha.style.border = "2px solid red"
    } else if (emailRegex.test(email.value && !senhaRegex.test(senha.value))) {
      senha.style.border = "2px solid red"
    } else if (emailRegex.test(email.value && !senhaRegex.test(senha.value))) {
      senha.style.border = "2px solid red"
    } else {
      alert("logado")
})