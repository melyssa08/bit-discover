window.addEventListener('load', function () {
	$('#registrationJobs-header').load('/page_recruiter/side_and_navbar/index.html', function (response, status) {
		if (status == 'error') {
			console.log('Deu errado');
		} else {
			console.log('Funcionou');
		}
	});
});

var addNewTag = document.getElementById('registrationJobs-add-new-tag');
var listNewTag = document.getElementById('registrationJobs-input-add-tag');
var divFatherOpcional = document.getElementById('registrationJobs-content-no-obligation');

addNewTag.addEventListener('click', function () {
	var newTag = document.createElement('button');
	newTag.className = 'registrationJobs-button-tag';
	newTag.style.backgroundColor = '#530084';
	newTag.style.color = 'white';
	newTag.innerHTML = `${listNewTag.value}`;
	divFatherOpcional.appendChild(newTag);
});

// variável que pega todos os botões que ficam em formato de array
var botao = document.querySelectorAll('.registrationJobs-button-tag');

for (item of botao) {
	item.className = 'registrationJobs-button-tag false';
}
// loop que passa por cada botão e adciona propriedades em cada um deles
// visto que quando o evento é disparado o botão que foi clicado se ve com propriedades novas
for (let i = 0; i < botao.length; i++) {
	botao[i].addEventListener('click', function (e) {
		if (botao[i].className == 'registrationJobs-button-tag false') {
			e.preventDefault();
			botao[i].style.backgroundColor = '#530084';
			botao[i].style.color = '#FFFFFF';
			botao[i].className = 'registrationJobs-button-tag true';
		} else if (botao[i].className == 'registrationJobs-button-tag true') {
			e.preventDefault();
			botao[i].style.borderStyle = 'solid';
			botao[i].style.borderStyle = '#530084';
			botao[i].style.backgroundColor = '#FFFFFF';
			botao[i].style.color = '#530084';
			botao[i].className = 'registrationJobs-button-tag false';
		}
	});
}

var jobsName = document.getElementById('registrationJobs-name-job');
var jobsType = document.getElementById('registrationJobs-type');
var jobsTime = document.getElementById('registrationJobs-time');
var jobsModality = document.getElementById('registrationJobs-modality');
var jobsShift = document.getElementById('registrationJobs-shift');
var jobsSalaryMin = document.getElementById('registrationJobs-salary-min');
var jobsSchooling = document.getElementById('registrationJobs-schooling');
var jobsSalaryMax = document.getElementById('registrationJobs-salary-max');
var jobsCP = document.getElementById('registrationJobs-cp');
var jobsProficiency = document.getElementById('registrationJobs-profiency');
var jobsNameCompany = document.getElementById('registrationJobs-name-company');
var jobsDescription = document.getElementById('registrationJobs-description-jobs');
var jobsActivities = document.getElementById('registrationJobs-description-activities');
var jobsTagsHabilitiesHard = document.getElementById('registrationJobs-tags-habilities-hard').children;
var jobsTagsHabilitiesSoft = document.getElementById('registrationJobs-tags-habilities-soft').children;
var jobsTagsBonus = document.getElementById('registrationJobs-tags-bonus').children;
var iconConfirm = document.getElementById('registrationJobs-icon-confirm');


jobsType.addEventListener('input', function () {
	console.log(this.value)
	if (this.value == "Estagio") {
		jobsTime.disabled = true
		jobsProficiency.disabled = true
		jobsTime.style.backgroundColor = 'gray'
		jobsProficiency.style.backgroundColor = 'gray'
	} else {
		jobsTime.disabled = false
		jobsProficiency.disabled = false
		jobsTime.style.backgroundColor = 'white'
		jobsProficiency.style.backgroundColor = 'white'
	}
})

jobsCP.addEventListener('input', function () {
	if (isNaN(this.value)) {
		this.value = this.value.slice(0,-1)
	}
})

function iteradorTagsHabilitiesHard() {
	var arrHabilitiesHard = [];
	for (item of jobsTagsHabilitiesHard) {
		if (item.className == 'registrationJobs-button-tag true') {
			arrHabilitiesHard.push(item.value);
		}
	}
	return arrHabilitiesHard;
}

function iteradorTagsHabilitiesSoft() {
	var arrHabilitiesSoft = [];
	for (item of jobsTagsHabilitiesSoft) {
		if (item.className == 'registrationJobs-button-tag true') {
			arrHabilitiesSoft.push(item.value);
		}
	}
	return arrHabilitiesSoft;
}

function iteradorTagsBonus() {
	var arrBonus = [];
	for (item of jobsTagsBonus) {
		if (item.className == 'registrationJobs-button-tag true') {
			arrBonus.push(item.value);
		}
	}
	return arrBonus;
}

var informationJob;


var botaoDispara = new Promise(function (resolve, reject) { 
	iconConfirm.addEventListener('click', function (e) {
	e.preventDefault();

	resolve(informationJob = {
		postal_code: parseInt(jobsCP.value),
		company: pegaIdEmpresa(),
		activities: jobsActivities.value,
		name: jobsName.value,
		description: jobsDescription.value,
		type: jobsType.value,
		requireds_hardskill: iteradorTagsHabilitiesHard().join(','),
		requireds_softskill: iteradorTagsHabilitiesSoft().join(','),
		bonus: iteradorTagsBonus().join(','),
		salary_min: parseFloat(jobsSalaryMin.value),
		salary_max: parseFloat(jobsSalaryMax.value),
		contact: pegaIdEmpresa(),
		scholarship: jobsSchooling.value,
		modality: jobsModality.value,
		shift: jobsShift.value,
		workload: jobsTime.value === 'full-time' ? 6 : 4,
		proficiency: jobsProficiency.value,
	});
	reject('Não deu')

})}).then((res) => {
	postarCadastro(res)
}).catch((res) => {
	console.log(res)
})

function postarCadastro(information) {
	$.post('http://127.0.0.1:3000/api/jobs/', information, function (response) {
		console.log(response);
	});
}


function pegaIdEmpresa () {
	var resposta
	$.get('http://127.0.0.1:3000/api/companies/').done( function (response) {
		resposta = response[response.length -1].id
		console.log(resposta)
		return resposta
	})
}

