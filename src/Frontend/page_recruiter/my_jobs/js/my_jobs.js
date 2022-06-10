// CHAMANDO NAVBAR

window.addEventListener('load', function () {
    $("#myJobs-header").load("/page_recruiter/side_and_navbar/index.html", function (response, status) {
        if (status == "error") {
            console.log("Deu errado")
        } else {
            console.log("Funcionou")
        }
    })
})





//TESTE DE BANCO DE DADOS
// api='http://127.0.0.1:3071'

// function GetCardJob(){
//     $.get(`http://127.0.0.1:3071/`, function(resultado) {
//         var tx = ""

//         if(Array.isArray(resultado)){

//             resultado.forEach(element => {
//                 tx += '<div class="myJobs-card">';
//                 tx += '<div class="myJobs-card-title">' + element.name + '</div>';
//                 tx += '<div class="myJobs-card-description">';
//                 tx += '</div>';
//                 tx += '</div>';
//             });

//         } else {
//             tx = resultado;
//         }
//         $("#myJobs-main").html(tx);
//     })
// }

function teste() {
    // $.get("http://localhost:3003/myjobsCard",);
    // $("#answerQuestions").html('');
    resultado = [{
        postal_code: 05510020,
        name: "Share Butantã",
        email: "sharebutanta@gmail.com"
    }]

    var count = 0
    console.log(resultado.length)
    while (count < resultado.length) {
        $(".myJobs-main").append(
            'Nome: ', resultado[count].company_name,
            'Email: ', resultado[count].email,
            ', CEP: "', resultado[count].postal_code, '" <br>');
        count++
    }
    // resultado.map((resul) => {
    //     $("#nome").append(resul.name, resul.age);
    // })

}

function getJobOnLoad() {

    // $.get("http://localhost:3000/api/jobs", function (result) {
    // console.log("Resultado", result);

    var result = [{
        postal_code: 05510020,
        name: "Analista de Sistemas",
        description: "Precisamos de uma analista que desenvolva nosso sistema de bancos de dados.",
        scholarship: "Ensino Superior completo",
        workload: 5,
        salary_max: 2200.00,
        salary_min: 3200.00,
        type: "CLT",
        id: 10,
        activities: "Auxiliar no sistema de dados dos cartões dos residentes, desenvolver o sistema em SQLite e melhorar o fluxo.",
        softskills: ["Gestão de Pessoas", "Pensamento analítico e inovação"],
        hardskills: ["JavaScript", "HTML", "SQLite"],
        company: {
          name: "Share Butantã",
          description: "Somos um prédio com estudantes de todo o brasil"
        }
      }]

    if (result.length == 0) {
        console.log('teste')
        $('.myJobs-main').html(`<h2>Você atualmente não possui vagas registradas, registre uma vaga que ela aparecerá aqui!</h2>`)
    }
    else {
        for (i = 0; i < result.length; i++) {
            $('.myJobs-main').append(`
        <div class="myJobs-card" data-bs-toggle="modal" data-bs-target="#modalTeste${i}">
        <h7 class="myJobs-card-title">${result[i].name}</h7>
        <p>Modalidade: ${result[i].modality}<br>
        Descrição: ${result[i].description}
        </p>
    </div>
    <div class="modal fade" id="modalTeste${i}" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Modal Titulo</h5>
                <button type="button" class="close" data-bs-dismiss="modal">
                    <span>&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <p>Texto texto
                </p>
            </div>

            <div class="modal-footer">
                <a class="btn btn-light" href="#" role="button">Editar Vaga</a>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Deletar Vaga</button>
            </div>

        </div>
    </div>
</div>
    `)
        }
    }
}

$(document).ready
