window.addEventListener('load', function () {
    $("#registrationJobs-header").load("/page_global/side_and_navbar/index.html", function (response, status) {
        if (status == "error") {
            console.log("Deu errado")
        } else {
            console.log("Funcionou")
        }
    })
})
    
var addNewTag = document.getElementById("registrationJobs-add-new-tag")
var listNewTag = document.getElementById("registrationJobs-input-add-tag")
var divFatherOpcional = document.getElementById("registrationJobs-content-no-obligation")

addNewTag.addEventListener('click', function () {
    var newTag = document.createElement('button')
    newTag.className = "registrationJobs-button-tag"
    newTag.style.backgroundColor = '#530084'
    newTag.style.color = 'white'
    newTag.innerHTML = `${listNewTag.value}`
    divFatherOpcional.appendChild(newTag)

})

// variável que pega todos os botões que ficam em formato de array
var botao = document.querySelectorAll('.registrationJobs-button-tag')

for (item of botao) {
    item.className = "registrationJobs-button-tag false"
}
// loop que passa por cada botão e adciona propriedades em cada um deles
// visto que quando o evento é disparado o botão que foi clicado se ve com propriedades novas
for (let i = 0; i < botao.length; i++) {
    botao[i].addEventListener('click', function (e) {
        if (botao[i].className == "registrationJobs-button-tag false") {
        e.preventDefault()
        botao[i].style.backgroundColor = '#530084'
        botao[i].style.color = '#FFFFFF'
        botao[i].className = "registrationJobs-button-tag true"
        } else if (botao[i].className == "registrationJobs-button-tag true") {
        e.preventDefault()
        botao[i].style.borderStyle = 'solid'
        botao[i].style.borderStyle = '#530084'
        botao[i].style.backgroundColor = '#FFFFFF'
        botao[i].style.color = '#530084'
        botao[i].className = "registrationJobs-button-tag false"
        }
    })
}
