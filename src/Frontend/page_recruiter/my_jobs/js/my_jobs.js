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
    console.log('teste')
    // $("#answerQuestions").html('');
    $.get("http://localhost:3003/myjobsCard", function(resultado){
        console.log(resultado)
        var count = 0
        console.log(resultado.length)
        while (count < resultado.length) {
            $("myJobs-main").append(
                'Nome: ', resultado[count].name, 
                ', Empresa: "', resultado[count].company_name, '" <br>');
            count++
            }
        // resultado.map((resul) => {
        //     $("#nome").append(resul.name, resul.age);
        // })
        
    });
}