// CHAMANDO NAVBAR

window.addEventListener('load', function () {
	$('#myJobs-header').load('/page_recruiter/side_and_navbar/index.html', function (response, status) {
	});
});

var iconNewJob = document.getElementById('myJobs-icon-new-job')

iconNewJob.addEventListener('click', function () {
	window.location = "http://127.0.0.1:3000/page_recruiter/registration_jobs/"
})

//TESTE DE FUNÇOES EDIT E DELETE VAGA

function editJob(id) {

	console.log(id);

	window.location.href = "http://localhost:3000/page_recruiter/edit_registration_jobs/index.html?idJob="+id;

}

function deleteJob(id){

	$("#card"+id).remove();
	//Pedir confirmação antes de relamente deletar
	//implementar o api_jobs.delete!!

	$.ajax({
		url: `http://localhost:3000/api/jobs/${id}`,
		type: 'DELETE',
		success: function(){
			alert("deletado com sucesso!")
		}
	});

}


function getJobOnLoad() {
	$.get('http://localhost:3000/api/jobs', function (result) {
		 console.log("Resultado", result);

		if (result.length == 0) {
			console.log('teste');
			$('.myJobs-main').html(`<h2>Você atualmente não possui vagas registradas, registre uma vaga que ela aparecerá aqui!</h2>`);
		} else {
			for (i = 0; i < result.length; i++) {
				if (result[i].company.id == JSON.parse(localStorage.UserBITDiscover).id) {
				$('.myJobs-main').append(`
					<div class="myJobs-card" data-bs-toggle="modal" data-bs-target="#modalTeste${i}" id="card${i}">
						<h7 class="myJobs-card-title">${result[i].name}</h7>
						<p>Modalidade: ${result[i].modality}<br>
							Descrição: ${result[i].description}
						</p>
					</div>
					<div class="modal fade" id="modalTeste${i}" tabindex="-1" role="dialog">
						<div class="modal-dialog" role="document">
							<div class="modal-content">

								<div class="modal-header">
									<h5 class="modal-title">${result[i].name}</h5>
									<button type="button" class="close" data-bs-dismiss="modal">
										<span>&times;</span>
									</button>
								</div>

								<div class="modal-body">
									<p>${result[i].description}</p>
								</div>

								<div class="modal-footer">
									<a class="btn btn-light" href="#" role="button" onclick="editJob(${result[i].id})">Editar Vaga</a>
									<button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="deleteJob(${result[i].id})">Deletar Vaga</button>
								</div>

							</div>
						</div>
					</div>
    			`)
			};
			}
		}
	});
}




$(document).ready;

//  function teste() {
// 	console.log("Deu certo!");
// 	// $.get("http://localhost:3003/myjobsCard",);
// 	// $("#answerQuestions").html('');
// 	resultado = [
// 		{
// 			postal_code: 05510020,
// 			name: 'Share Butantã',
// 			email: 'sharebutanta@gmail.com',
// 		},
// 	];

// 	var count = 0;
// 	console.log(resultado.length);
// 	while (count < resultado.length) {
// 		$('.myJobs-main').append('Nome: ', resultado[count].company_name, 'Email: ', resultado[count].email, ', CEP: "', resultado[count].postal_code, '" <br>');
// 		count++;
// 	}
// 	// resultado.map((resul) => {
// 	//     $("#nome").append(resul.name, resul.age);
// 	// })
//  }

// function getJobOnLoad() {
// 	$.get('http://localhost:3000/api/jobs', function (result) {
// 		//  console.log("Resultado", result);

// 		if (result.length == 0) {
// 			console.log('teste');
// 			$('.myJobs-main').html(`<h2>Você atualmente não possui vagas registradas, registre uma vaga que ela aparecerá aqui!</h2>`);
// 		} else {
// 			for (i = 0; i < result.length; i++) {
// 				$('.myJobs-main').append(`
// 					<div class="myJobs-card" data-bs-toggle="modal" data-bs-target="#modalTeste${i}">
// 						<h7 class="myJobs-card-title">${result[i].name}</h7>
// 						<p>Modalidade: ${result[i].modality}<br>
// 							Descrição: ${result[i].description}
// 						</p>
// 					</div>
// 					<div class="modal fade" id="modalTeste${i}" tabindex="-1" role="dialog">
// 						<div class="modal-dialog" role="document">
// 							<div class="modal-content">

// 								<div class="modal-header">
// 									<h5 class="modal-title">Modal Titulo</h5>
// 									<button type="button" class="close" data-bs-dismiss="modal">
// 										<span>&times;</span>
// 									</button>
// 								</div>

// 								<div class="modal-body">
// 									<p>${result[i].description}</p>
// 								</div>

// 								<div class="modal-footer">
// 									<a class="btn btn-light" href="#" role="button" onclick="teste()">Editar Vaga</a>
// 									<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Deletar Vaga</button>
// 								</div>

// 							</div>
// 						</div>
// 					</div>
//     			`);
// 			}
// 		}
// 	});
// }