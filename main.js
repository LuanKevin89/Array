
const nomes = ["Luan", "Kevin", "Martins"]
nomes.push("Calixto")

const lista = document.getElementById("lista");
const form = document.getElementById("form");
const campoNome = document.getElementById("nome");

function exibirNomes() {
    lista.innerHTML = "";

    for (let nome of nomes) {
        lista.innerHTML += `<li>${nome}</li>`;
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    nomes.push(campoNome.value);

    exibirNomes();

    form.reset();
});

exibirNomes();
