let nomeAtualParaEditar;
let idadeAtualParaEditar;
let cpfAtualParaEditar;
let nascimentoAtualParaEditar;
let telefoneAtualParaEditar;
let emailAtualParaEditar;

function converteParaFahrenheit() {
    const temperaturaCelsius = parseFloat(
        document.getElementById("temperatura-celsius").value
    );
    let temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;

    document.getElementById("resultado-fahrenheit").value =
        temperaturaFahrenheit.toFixed(2);
}

function mostrarCartaoAltera(nome, idade, cpf, nascimento, telefone, email) {
    document.getElementById("nome-alteracao").value = nome;
    nomeAtualParaEditar = nome;

    document.getElementById("idade-alteracao").value = idade;
    idadeAtualParaEditar = parseInt(idade);

    document.getElementById("cpf-alteracao").value = cpf;
    cpfAtualParaEditar = cpf;

    document.getElementById("nascimento-alteracao").value = nascimento;
    nascimentoAtualParaEditar = nascimento;

    document.getElementById("telefone-alteracao").value = telefone;
    telefoneAtualParaEditar = parseInt(telefone);

    document.getElementById("email-alteracao").value = email;
    emailAtualParaEditar = email;
}
