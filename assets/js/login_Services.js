function login() {
  const usuario = document.getElementById("login-email").value
  const senha = document.getElementById("login-senha").value

  if (usuario === "proz@gmail.com" && senha === "1234") {
    alert("Login com sucesso!!!");

    window.location.href = "../home.html"
  } else {
    alert("Usuário ou senha incorretos.")
  }

  return false;
}

function register() {
  const nome = document.getElementById("register-name").value
  const email = document.getElementById("register-email").value
  const senha = document.getElementById("register-senha").value
  const confirmaSenha = document.getElementById("register-confirma-senha").value

  if (senha == confirmaSenha && nome && email) {
    alert(`Cadastro com sucesso :), Seja bem vindo: ${email}`);
    window.location.href = "../home.html"
  } else if (senha != confirmaSenha) {

    alert("As senhas não coicidem")

  } else {
    alert("huuum, preencha todos os campos!.");
  }

  return false;
}