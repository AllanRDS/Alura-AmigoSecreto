let nomes = []
let nomeInput
let resultado
console.log(nomeInput)

function adicionarAmigo() {
  if (nomes.length < 4) {
    nomeInput = document.getElementById('amigo').value
    console.log(nomeInput)
    nomes.push(nomeInput)
    mostrarNome()
  }
  else
  {
    alert("O array está lotado, o máximo configurado é 4")
  }

}

function mostrarNome() {
  document.getElementById('listaAmigos').innerHTML = nomes.join("<br>");
  console.log(nomes.length)
}

function sortearAmigo() {
  resultado = parseInt(Math.random() * 4)
  console.log(resultado)
  document.getElementById('resultado').innerHTML = "Vencedor do sorteio é : " + nomes[resultado]
  limparLista()
}

function limparLista() {
  document.getElementById('listaAmigos').innerHTML = "";
  nomes = []
}

document.getElementById('amigo').addEventListener('input', function(){
  if (this.value != "") {
    document.getElementById('button').style.backgroundColor = 'orange';
  }
  else
  {
    document.getElementById('button').style.backgroundColor = 'white';
  }
});