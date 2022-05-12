var match = document.getElementById('botao1')
var main = document.getElementById('main')
var likes = document.getElementById('botao2')

function criarCardLike () {

var div1 = document.createElement('div')
var div2 = document.createElement('div')
var p = document.createElement('p')
div1.className = 'card'
div2.className = 'card-body'
p.className = 'card-text'

main.appendChild(div1)
div1.appendChild(div2)
div2.appendChild(p)
p.innerText = 'Teste para descobrir se o negócio deu certo, se deu certo Aleluia, senão aiaiai meu deus'

}

function mudancaDeCorDoBotao (botao, outroBotao) {

    botao.style.backgroundColor = '#530084'
    botao.style.color = 'white'
    outroBotao.style.backgroundColor = 'white'
    outroBotao.style.color = '#530084'
    outroBotao.style.borderColor = '#530084'
}

match.addEventListener('click', function () {
    mudancaDeCorDoBotao(match, likes)
    criarCard()
    console.log(this.className)
})

likes.addEventListener('click', function () {
    criarCardLike()
    mudancaDeCorDoBotao(likes, match)
    console.log(this.className)
})
