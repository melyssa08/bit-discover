var match = document.getElementById('likesCandidates-botao1')
var main = document.querySelector('#likesCandidates-main')
var likes = document.getElementById('likesCandidates-botao2')

// funcao que cria cards e coloca o conteudo neles
// as classnames são do bootstrap e a class jobsVisualization-card é minha própria
function criarCardLike () {

var div1 = document.createElement('div')
var div2 = document.createElement('div')
var p = document.createElement('p')
div1.className = 'card jobsVisualization-card'
div2.className = 'card-body likesCandidates-card-body'
p.className = 'card-text'

main.appendChild(div1)
div1.appendChild(div2)
div2.appendChild(p)
p.innerText = 'O Google deu match em você na vaga de Analista de Sistema I'

}

//funcao que muda as cores quando se clica em algum dos toggles
function mudancaDeCorDoBotao (botao, outroBotao) {

    botao.style.backgroundColor = '#530084'
    botao.style.color = 'white'
    outroBotao.style.backgroundColor = 'white'
    outroBotao.style.color = '#530084'
    outroBotao.style.borderColor = '#530084'
}

//evento que aciona as funções ao clicar no botao match
match.addEventListener('click', function () {
    mudancaDeCorDoBotao(match, likes)
    criarCardLike()
})

// evento que aciona as funções ao clicar no botao like
likes.addEventListener('click', function () {
    criarCardLike()
    mudancaDeCorDoBotao(likes, match)
})
