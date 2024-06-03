let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=>{
    
const nome = document.getElementById('nome').value
const email = document.getElementById('email').value
const senha = document.getElementById('senha').value

    const valores = {
        nome:nome,
        email:email,
        senha:senha
        
    }

    fetch('http://localhost:3000/cadastrar',{
    method:"Post",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(valores)
})
    .then(res => res.json)
    .then(()=>{
        res.innerHTML = " Nome: "+ valores.nome  + '<br>'
        res.innerHTML += " Email : "+ valores.email+'<br>'
        res.innerHTML +=  "Senha : "+ valores.senha + '<br>'
        res.innerHTML +=  "Cadastro realizado com sucesso"
    })
    .catch((err)=>{
        res.innerHTML = "Erro ao cadastrar"
    })
})
