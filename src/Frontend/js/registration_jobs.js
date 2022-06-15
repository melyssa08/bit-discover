// Pega a Nav bar e a Side Bar
window.addEventListener('load', function () {
	$('#registrationJobs-header').load('/page_recruiter/side_and_navbar/index.html', function (response, status) {
		if (status == 'error') {
			console.log('Deu errado');
		} else {
			console.log('Funcionou');
		}
	});
});

//Pega os dados para colocar nas tags de soft
$.get("http://127.0.0.1:3000/api/softskills/", function(response) {
	for (i of response) {
		$("#registrationJobs-tags-habilities-soft").append(
			`<button class="registrationJobs-button-tag" value="${i.id}">${i.name}</button>`
			)}
	adcionaFuncionalidadeAsTags('registrationJobs-tags-habilities-soft')
}
)

// Pega as tags e põem novas
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


function adcionaFuncionalidadeAsTags (nomeId) {
	var botao = document.getElementById(nomeId).children
	for (item of botao) {
		item.className = 'registrationJobs-button-tag false';
	}
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
		company: pegaIdEmpresa(3,'http://127.0.0.1:3000/api/companies/'),
		activities: jobsActivities.value,
		name: jobsName.value,
		description: jobsDescription.value,
		type: jobsType.value,
		requireds_hardskill: iteradorTagsHabilitiesHard().join(','),
		requireds_softskill: iteradorTagsHabilitiesSoft().join(','),
		bonus: iteradorTagsBonus().join(','),
		salary_min: parseFloat(jobsSalaryMin.value),
		salary_max: parseFloat(jobsSalaryMax.value),
		// contact: pegaIdEmpresa(3,'http://127.0.0.1:3000/api/companies/'),
		contact: 2,
		scholarship: jobsSchooling.value,
		modality: jobsModality.value,
		shift: jobsShift.value,
		workload: jobsTime.value === 'full-time' ? 6 : 4,
		proficiency: jobsProficiency.value,
		created_at: `${new Date().getDate()}`
	});
	reject('Não deu')

})}).then((res) => {
	postarCadastro(res)
 })
.then((resp) => {
	var iconConfirmTarget = document.getElementById('registrationJobs-target-myjobs')
	iconConfirmTarget.href = 'http://127.0.0.1:3000/page_recruiter/my_jobs/index.html'
})

function postarCadastro(information) {
	$.post('http://127.0.0.1:3000/api/jobs/', information, function (response) {
		console.log(response); 
	});
}

function pegaIdEmpresa(id, urlGet)
{
     $.ajax({
        url: `${urlGet}${id}`,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            result = data[0].id
        } 
     });
     return result;
}

