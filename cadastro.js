// Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

const dataAtual =  ("30/08/2022")

var dataDoEvento =  ("20/05/2025") 

if (dataDoEvento > dataAtual) {
    console.log("Permitir Cadastro");    
} else {
    console.log("Acesso não permitido, data invalida")
}

// Se o participante for maior de 18 anos, permitir o cadastro; se não, alertar que o cadastro não é permitido pela idade.

let idade = 19;

if (idade > 18) {
    console.log("Idade Permitida, você pode acessar o sistema")    
} else {
    console.log("Acesso negado, idade invalida")
}

// Listar de participantes e palestrantes por evento
// Quantidade de participantes

const listaDeParticipantesEPalestrantes = ["Luciano Hulk", "Neymar Junior", "Luccas Carlos", "Carol Sabino", "Guilherme Pinheiro"];


let quantidadeDeParticipantesEPalestrantes = listaDeParticipantesEPalestrantes.length;


if(quantidadeDeParticipantesEPalestrantes < 100) {
    listaDeParticipantesEPalestrantes.push("Alexandre Couto");
    listaDeParticipantesEPalestrantes.push("Mauricio Franco");

    console.log("Inscrição feito com sucesso")
    console.log(listaDeParticipantesEPalestrantes);
} else {
    console.log("cadastro não permitido, limite de cadastro excedido")
}