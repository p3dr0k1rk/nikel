const nome = "Pedro Roque"
let nome2 = ""
let pessoaDefault = {
    nome: "Pedro Henrique",
    idade: "36",
    trabalho: "Advogado"
}

let nomes = ["Pedro Roque","Marina Silva", "Carolina Fabris"];
let pessoaListaVazia = []; 

let pessoas = [
    {
        nome: "Pedro Henrique",
        idade: "36",
        trabalho: "Advogado"   
    },
    {
        nome: "Carolina Fabrisa",
        idade: "27",
        trabalho: "Maquiadora"
    }
];


function alterarNome() {
    nome2 = "Maria Silva" 
    console.log("Valor Alterado2")
    console.log(nome2);    
}

function recebaEalteraNome(novoNome){
    nome2 = novoNome
    console.log("Valor Alterado Recebendo um Nome")
    console.log(nome2);

}



function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("-------IMPRIMIR PESSOAS_____");
    pessoas.forEach((item) =>{
        console.log("Nome");
        console.log(item.nome);
        
        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    Nome: "Pedro Silva",
    idade: "36",
    trabalho: "Dev"
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//      nome: "Carlos Henrique",
//      idade: "25",
//      trabalho: "UX/UI Desing"
//})

//recebaEalteraNome("João Silva Pereira");
//recebaEalteraNome("Maria Silva")
//alterarNome();