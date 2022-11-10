var bd = openDatabase("meuBD", "1.0", "Meu banco de dados", 4080);

let listaNomes = [];
let listaIdade = [];
let listaCPF = [];
let listaNascimento = [];


bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE formulario (nome TEXT, idade INTEGER, cpf INTEGER, nascimento DATE)");
});

function salvarInfo() {
    const nomeUsuario = document.getElementById("nome-usuario").value.toUpperCase();
    const idadeUsuario = parseInt(document.getElementById("idade-usuario")).value
    const cpfUsuario = parseInt(document.getElementById("cpf-usuario")).value
    const nascimentoUsuario = parseInt(
                document.getElementById("nascimento-usuario").value

    );
    if (nomeUsuario === "" || isNaN(idadeUsuario)) {
        alert("Faltam informações");
        return false;
    }
    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO formulario (nome, idade, cpf, nascimento) VALUES (?, ?, ?, ?)",
            [nomeUsuario, idadeUsuario]
        );
    });
    document.getElementById("nome-usuario").value = "";
    document.getElementById("idade-usuario").value = "";
    document.getElementById("cpf-usuario").value = "";
    document.getElementById("nascimento-usuario").value = "";
}

function pesquisaPorNome() {
    const nomeUsuario = document
        .getElementById("pesquisa-nome-usuario")
        .value.toUpperCase();
    bd.transaction(function (ler) {
        ler.executeSql(
            `SELECT * FROM formulario WHERE nome LIKE "%${nomeUsuario}%"`,
            [],
            function (ler, resultados) {
                const tamanho = resultados.rows.length;
                const msg = tamanho + " linha(s) encontrada(s)";

                const nome = resultados.rows.item(tamanho - 1).nome;
                const idade = resultados.rows.item(tamanho - 1).idade;
                const cpf = resultados.rows.item(tamanho - 1).cpf;
                const nascimento = resultados.rows.item(tamanho - 1).nascimento;

                document.getElementById("pesquisa-nome-usuario").value = nome;
                document.getElementById("resultado-pesquisa").value = idade;
                document.getElementById("resultado-cpf-pesquisa").value = cpf;
                document.getElementById("resultado-nascimento-pesquisa").value = nascimento;
            }
        );
    });
    document.getElementById("pesquisa-nome-usuario").value = "";
    document.getElementById("resultado-pesquisa").value = "";
    document.getElementById("resultado-cpf-pesquisa").value = "";
    document.getElementById("resultado-nascimento-pesquisa").value = "";
}

function exibeBD() {
    bd.transaction(function (exibe) {
        exibe.executeSql(
            "SELECT * FROM formulario",
            [],
            function (exibe, resultados) {
                document.getElementById("lista-bd").innerHTML = "";
                const tamanho = resultados.rows.length;
                let item;

                for (let i = 0; i < tamanho; i++) {
                    item = resultados.rows.item(i);
                    document.getElementById(
                        "lista-bd"
                    ).innerHTML += `<p onclick="mostrarCartaoAltera('${item.nome}' , ${item.idade})">Nome: ${item.nome}, ${item.idade} anos. </p>`;
                }
            }
        );
    });
}

function limpaBDDiv() {
    document.getElementById("lista-bd").innerHTML = "";
}

function alteraInfo() {
    const novoNome = document.getElementById("nome-alteracao").value
    const novaIdade = parseInt(document.getElementById("idade-alteracao").value)
    const novoCpf = parseInt(document.getElementById("cpf-alteracao").value)
    const novoNascimento = parseInt(document.getElementById("nascimento-alteracao").value)
    
    

    bd.transaction(function(altera){
        altera.executeSql(`UPDATE formulario SET nome="${novoNome}", idade=${novaIdade} WHERE nome="${nomeAtualParaEditar}" AND idade=${idadeAtualParaEditar}`);
    });
    exibeBD();
}