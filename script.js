const desafios = [
    "Resolver problemas de lógica",
    "Aprender novas funções",
    "Criar novas soluções",
    "Aprender padrões",
    "Criar uma invenção"
];

function iniciarDesafio(){
    const nome=document.getElementById("nome")

    if (nome === ""){
        alert("Por favor, digite um nome para continuar");
        return;
    }

    const numero = Math.floor(Math.random()*desafios.length)
    const desafio = desafios[numero];

    document.getElementById("resultado").innerHTML =
    `<h2>Olá, ${nome}</h2>
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

    <br><br>

    <button onclick="avaliarResposta()">Enviar projeto!</button>
    `
    function avaliarResposta(){
        const nome = document.getElementById("nome").value;
        const resposta = document.getElementById("resposta").value;
        const textoDesafio = document.querySelector("#resultado h3")

        if (resposta.trim() === ""){
            alert("Por favor, digite o seu projeto para continuar.")
            return;
        }
        let pontos = 0;
        if(resposta.length >= 30){
            pontos += 30;
        }
        const texto = resposta.toLowerCase();
        if( texto.includes("praticar")||
            texto.includes("criar")||
            texto.includes("pesquisar")
            ){
                pontos += 35;
            }
        if(texto.includes("analisar")||
        texto.includes("aprender")
        ){pontos += 35;}

        let nível;

    if(pontos >= 70){
    nível= "Inventor de Idéias";
    }

    else if (pontos >= 65){
        nível = "Desenvolvedor";
    }

    else{
        nível = "Explorador";
    }
    }
}

