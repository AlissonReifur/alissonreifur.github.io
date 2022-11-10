let nomeAtualParaEditar;
let idadeAtualParaEditar;
let cpfAtualParaEditar;
let nascimentoAtualParaEditar;

function converteParaFahrenheit() {
    const temperaturaCelsius = parseFloat(
        document.getElementById("temperatura-celsius").value
    );
    let temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;

    document.getElementById("resultado-fahrenheit").value =
        temperaturaFahrenheit.toFixed(2);
}

function mostrarCartaoAltera(nome, idade) {
    document.getElementById("nome-alteracao").value = nome;
    nomeAtualParaEditar = nome;

    document.getElementById("idade-alteracao").value = idade;
    idadeAtualParaEditar = parseInt(idade);

    document.getElementById("cpf-alteração").valeu = cpf
    cpfAtualParaEditar = parseInt(cpf);

    document.getElementById("nascimento-alteracao").value = nascimento
    nascimentoAtualParaEditar = nascimento;
}
