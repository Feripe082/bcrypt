
const cadastro = document.getElementById("cadastro");

cadastro.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const data = {
    nome: nome,
    email: email,
    senha: senha
  };
  console.log(data)

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resposta) => resposta.json())
    .then((dados) => {
      console.log(dados);
    })
    .catch((err) => {
      console.error("erro de busca de dados", err);
    });
});
