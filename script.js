const desafios = [
    "Resolver problemas de lógica",
    "Aprender novas funções",
    "Criar novas soluções",
    "Aprender padrões",
    "Criar uma invenção"
];

function iniciarDesafio(){
    const name=document.getElementById("name")

    if (name === ""){
        alert("Por favor, digite um nome para continuar");
        return;
    }

    const numero = Math.floor(Math.random()*desafios.length)
    const desafio = desafios[numero];

    document.getElementById("resultado").innerHTML =
    `<h2>Olá, ${name}</h2>
    <p> Seu desafio é: </p>
    <p>${desafio} </p>
    
    <label for = "resposta">
     Qual é o projeto para este desafio?
    </label>

    <textarea
    id = "resposta"
    rows = "5"
    cols = "40"
    placeholder = "Digite aqui seu projeto">
    </textarea>
    `
}
