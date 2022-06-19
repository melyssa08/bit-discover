



// função pra ler querystring e pegar id do job para edição
function queryString(parameter) {  
	var loc = location.search.substring(1, location.search.length);   
	var param_value = false;   
	var params = loc.split("&");   
	for (i=0; i<params.length;i++) {   
		param_name = params[i].substring(0,params[i].indexOf('='));   
		if (param_name == parameter) {                                          
			param_value = params[i].substring(params[i].indexOf('=')+1)   
		}   
	}   
	if (param_value) {   
		return param_value;   
	}   
	else {   
		return undefined;   
	}   
}

//Var que recebe o id do job
var idJob = queryString("idJob");
// console.log("id do Job: "+idJob);

//DECLARAÇÃO DE VAR
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
// var jobsEmail = document.getElementById('registrationJobs-email')
// var jobsCell = document.getElementById('registrationJobs-cellphone')


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

// jobsCell.addEventListener('input', function () {
// 	if (isNaN(this.value)) {
// 		this.value = this.value.slice(0, -1)
// 	}
// })

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



$(document).ready(

	$.get("http://localhost:3000/api/jobs", function (dados) {
		
		// var test = $('#registrationJobs-name-job').val();
		// test = dados[idJob].name;

		//Seta os valores do html para os valores do DB
		$(jobsName).val(dados[idJob].name);
		$(jobsType).val(dados[idJob].type);
		$(jobsTime).val(dados[idJob].worload).change();
		$(jobsModality).val(dados[idJob].modality).change();
		$(jobsShift).val(dados[idJob].shift);
		$(jobsSalaryMin).val(dados[idJob].salary_min);
		$(jobsSchooling).val(dados[idJob].scholarship).change;
		$(jobsSalaryMax).val(dados[idJob].salary_max);
		$(jobsCP).val(dados[idJob].postal_code);
		$(jobsProficiency).val(dados[idJob].proficiency);
		$(jobsNameCompany).val(dados[idJob].companu);
		$(jobsDescription).val(dados[idJob].description);
		$(jobsActivities).val(dados[idJob].activities);
		$(jobsTagsHabilitiesHard).val(dados[idJob].requireds_hardskill);
		$(jobsTagsHabilitiesSoft).val(dados[idJob].requireds_softskill);
		$(jobsTagsBonus).val(dados[idJob].bonus);



	
		console.log(dados[idJob]);
		// console.log(jobsName);
	})


);


<<<<<<< HEAD

=======
//Edit cadastro
var botaoDispara = new Promise(function (resolve, reject) { 
	iconConfirm.addEventListener('click', function (e) {
	e.preventDefault();

		if (jobsSalaryMin.value && jobsSalaryMax.value && jobsCP.value && jobsDescription.value && jobsActivities.value /*&& jobsEmail.value && jobsCell.value*/) {

		//	editarCadastro('http://127.0.0.1:3000/api/jobscontacts/', {email: jobsEmail.value , number: jobsCell.value})

	resolve(informationJob = {
		postal_code: parseInt(jobsCP.value),
		//company: pegaIdEmpresa(JSON.parse(localStorage.UserBITDiscover).id,'http://127.0.0.1:3000/api/companies/'),
		activities: jobsActivities.value,
		name: jobsName.value,
		description: jobsDescription.value,
		type: jobsType.value,
		requireds_hardskill: iteradorTagsHabilitiesHard().join(','),
		requireds_softskill: iteradorTagsHabilitiesSoft().join(','),
		bonus: iteradorTagsBonus().join(','),
		salary_min: parseFloat(jobsSalaryMin.value),
		salary_max: parseFloat(jobsSalaryMax.value),
		contact: pegaIdContact(),
		scholarship: jobsSchooling.value,
		modality: jobsModality.value,
		shift: jobsShift.value,
		workload: jobsTime.value === 'full-time' ? 6 : 4,
		proficiency: jobsProficiency.value,
		created_at: `${new Date().getDate()}`
	});

} else {
	reject('Preencha todos os dados nos campos')
}

})}).then((res) => {
	editarCadastro('http://127.0.0.1:3000/api/jobs/',res)
 })
.then((resp) => {
	$('#registrationJobs-target-myjobs').click(function () {
		window.location = 'http://127.0.0.1:3000/page_recruiter/my_jobs/index.html'
	})
})



function editarCadastro (id, urlGet){
	$.ajax({
		url: `${urlGet}${id}`,
		type: 'put',
		success: function(data){
			alert(data);
		}
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

function pegaIdContact () {
	$.ajax({
        url: `http://127.0.0.1:3000/api/jobscontacts/`,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            result = data[data.length -1].id
        } 
     });
     return result;
}
>>>>>>> 91b5534712d38e1f8c0d25e2e6f1e699aacfb63e
