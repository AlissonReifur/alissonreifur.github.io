var bd = openDatabase("meuBD", "1.0", "Meu banco de daos", 4080);

bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE formulario (nome TEXT, idade INTEGER)");
});

function salvarInfo() {
    const nomeUsuario = document.getElementById("nome-usuario").value;
    const idadeUsuario = parseInt(document.getElementById("idade-usuario").value);

    bd.transaction(function (inserir) {
        inserir.executeSql("INSERT INTO formulario (nome, idade) VALUES (?, ?)", [
            nomeUsuario, idadeUsuario
        ]);
    });
};

function pesquisaPorNome() {
    const nomeUsuario = document.getElementById("nome-do-usuario").value;
    console.log(nomeUsuario)

    bd.transaction(function(ler){
        ler.executeSql(`SELECT * FROM formulario WHERE nome="${nomeUsuario}"`,[], 
        function (ler, resultados){
        const tamanho = resultados.rows.length;
           const msg = tamanho + " linhas encontradas"
        console.log(msg)
        }
        
        ) ;

    });

};