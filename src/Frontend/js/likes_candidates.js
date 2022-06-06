var main = document.querySelector('#likesCandidates-main')

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

