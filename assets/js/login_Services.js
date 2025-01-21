
function login() {
  const usuario = document.getElementById("login-email").value;
  const senha = document.getElementById("login-senha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  let usuarioValido = false;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === usuario && usuarios[i].senha === senha) {
      usuarioValido = true;
      break;
    }
  }

  if (usuarioValido) {
    alert("Login com sucesso!!!");
    window.location.href = "../home.html";
  } else {
    alert("Usuário ou senha incorretos.");
    window.location.href = "../login.html";
  }

  return false;
}

function register() {
  const nome = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const senha = document.getElementById("register-senha").value;
  const confirmaSenha = document.getElementById(
    "register-confirma-senha"
  ).value;

  if (senha === confirmaSenha && nome && email) {
    const usuario = { email: email, senha: senha };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert(`Cadastro com sucesso :), faça o login para continuar`);
    window.location.href = "../login.html";
  } else if (senha !== confirmaSenha) {
    alert("As senhas não coincidem.");
  } else {
    alert("Huum, preencha todos os campos!");
  }

  return false;
}

function logout() {
  localStorage.removeItem("usuarios"); 
  alert("Você saiu com sucesso!");
  window.location.href = "../login.html"; 
}