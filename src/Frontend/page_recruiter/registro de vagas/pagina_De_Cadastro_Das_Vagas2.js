var botao = document.querySelectorAll('#botaoTag')


for (let i = 0; i < botao.length; i++) {
    botao[i].addEventListener('click', function (e) {
        e.preventDefault()
        botao[i].style.backgroundColor = '#530084'
        botao[i].style.color = '#FFFFFF'
    })
}
