// variável que pega todos os botões que ficam em formato de array
var botao = document.querySelectorAll('.registrationJobs-button-tag')

// loop que passa por cada botão e adciona propriedades em cada um deles
// visto que quando o evento é disparado o botão que foi clicado se ve com propriedades novas
for (let i = 0; i < botao.length; i++) {
    botao[i].addEventListener('click', function (e) {
        e.preventDefault()
        botao[i].style.backgroundColor = '#530084'
        botao[i].style.color = '#FFFFFF'
    })
}
