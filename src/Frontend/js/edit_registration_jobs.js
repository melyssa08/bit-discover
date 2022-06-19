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



