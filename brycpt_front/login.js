let res = document.getElementById('res')
let logar = document.getElementById('logar')

logar.addEventListener('click', ()=>{
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const valores = {
        email:email,
        senha:senha
    }

    fetch('http://localhost:3000/logar',{
        method:"Post",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(valores)
    })
    .then(res => res.json)
    .then(()=>{
        res.innerHTML =  "Login realizado com sucesso"
    })
    .catch((err)=>{
        res.innerHTML = "Email ou senha errado"
    })
})
