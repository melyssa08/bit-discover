window.addEventListener('load', function () {
    $("#registrationJobs-header").load("/page_recruiter/side_and_navbar/index.html", function (response, status) {
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

var jobsName = document.getElementById('registrationJobs-jobs-list')
var jobsType = document.getElementById('registrationJobs-type')
var jobsTime = document.getElementById('registrationJobs-time')
var jobsSalary = document.getElementById('registrationJobs-salary')
var jobsModality = document.getElementById('registrationJobs-modality')
var jobsShift = document.getElementById('registrationJobs-shift')
var jobsEmail = document.getElementById('rgistrationJobs-email')
var jobsSchooling = document.getElementById('registrationJobs-schooling')
var jobsNumber = document.getElementById('registrationJobs-number')
var jobsCP = document.getElementById('registrationJobs-cp')
var jobsProficiency = document.getElementById('registrationJobs-profiency')
var jobsNameCompany = document.getElementById('registrationJobs-name-company')
var jobsDescription = document.getElementById('registrationJobs-description-jobs')
var jobsDescriptionBonus = document.getElementById('registrationJobs-description-bonus')
var jobsTagsHabilities = document.getElementById('registrationJobs-tags-habilities').children
var jobsTagsBonus = document.getElementById('registrationJobs-tags-bonus').children
var iconConfirm = document.getElementById('registrationJobs-icon-confirm')

console.log(jobsTagsHabilities)

function iteradorTagsHabilities () {
    var arrHabilities = []
    for (item of jobsTagsHabilities) {
        if (item.className == 'registrationJobs-button-tag true') {
        arrHabilities.push(item.value)
        }
    }
    return arrHabilities
}

function iteradorTagsBonus () {
    var arrBonus = []
    for (item of jobsTagsBonus) {
        if (item.className == 'registrationJobs-button-tag true') {
        arrBonus.push(item.value)
        }
    }
    return arrBonus
}

var informationJob

iconConfirm.addEventListener('click', function (e) {
    e.preventDefault()
        informationJob = {
        name: jobsName.value,
        type: jobsType.value,
        time: jobsTime.value,
        salary: jobsSalary.value,
        modality: jobsModality.value,
        shift: jobsShift.value,
        number: jobsNumber.value,
        cp: jobsCP.value,
        proficiency: jobsProficiency.value,
        nameCompany: jobsNameCompany.value,
        description: jobsDescription.value,
        descriptionBonus: jobsDescriptionBonus.value,
        tagsHabilities: iteradorTagsHabilities(),
        tagsBonus: iteradorTagsBonus()
    }
    console.log(informationJob)
})

function postarCadastro () {
    $.post('http://127.0.0.1:3000/jobs/api/', informationJob, function (data, status) {
    console.log(data)
    console.log(status)
    })
}