let luis = 
{
  nome:"Luis",
  vitorias: 0 ,
  pontos: 0
}

let luis2 = 
{
  nome:"Luis2",
  vitorias: 0 ,
  pontos: 0
}

let resultadoDosPontos = calcularPontos(luis)

function calcularPontos(jogador)
{
  let pontos = jogador.vitorias
  return pontos

}


let jogadores = [luis, luis2]

function exibeJogadorNaTela(jogadores) {
  let elemento = ""
  for(let i = 0; i < jogadores.length; i++)
  {
    elemento += "<tr>"
    elemento += `<td>${jogadores[i].nome}</td>`  
    elemento += `<td>${jogadores[i].pontos}</td>`
    elemento += "<td><button onclick='vitoriaOuCorreu("+ i +")'>Vitória / Correu</button></td>"  
    elemento += "<td><button onclick='truco3("+ i +")'>Truco - 3</button></td>"  
    elemento += "<td><button onclick='truco6(" + i +")'>Truco - 6</button></td>"  
    elemento += "<td><button onclick='truco9("+ i +")'>Truco - 9</button></td>"  
    elemento += "<td><button onclick='truco12(" + i +")'>Truco - 12</button></td>"
    elemento += "</tr>"
  }

  let tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = elemento
    
}


function truco3(i) {
  let jogador = jogadores[i]
  jogador.vitorias += 3  
  jogador.pontos = calcularPontos(jogador)
  exibeJogadorNaTela(jogadores)
}

function truco6(i) {
  let jogador = jogadores[i]
  jogador.vitorias += 6
  jogador.pontos = calcularPontos(jogador)
  exibeJogadorNaTela(jogadores)
}

function truco9(i) {
  let jogador = jogadores[i]
  jogador.vitorias += 9
  jogador.pontos = calcularPontos(jogador)
  exibeJogadorNaTela(jogadores)
}

function truco12(i) {
  let jogador = jogadores[i]
  jogador.vitorias += 12
  jogador.pontos = calcularPontos(jogador)
  exibeJogadorNaTela(jogadores)
}


function vitoriaOuCorreu(i) {
  let jogador = jogadores[i]
  jogador.vitorias += 1 
  jogador.pontos = calcularPontos(jogador)
  exibeJogadorNaTela(jogadores)
}

exibeJogadorNaTela(jogadores)