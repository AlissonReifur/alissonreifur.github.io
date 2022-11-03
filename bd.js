var bd = openDatabase("meuBD", "1.0", "Meu banco de daos", 4080);

bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE formulario (nome TEXT)");
});

function salvarNome() {
    const nomeUsuario = document.getElementById("nome-usuario").value;

    bd.transaction(function (inserir) {
        inserir.executeSql("INSERT INTO formulario (nome) VALUES (?)", [
            nomeUsuario,
        ]);
    });
}
