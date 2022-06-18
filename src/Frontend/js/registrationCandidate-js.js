// // variável que pega todos os botões que ficam em formato de array
// var botao = document.querySelectorAll(".registrationCandidates-button-tag");
// // loop que passa por cada botão e adciona propriedades em cada um deles
// // visto que quando o evento é disparado o botão que foi clicado se ve com propriedades novas
// for (let i = 0; i < botao.length; i++) {
//   botao[i].addEventListener("click", function (e) {
//     if (botao[i].className == "registrationCandidates-button-tag false") {
//       e.preventDefault();
//       botao[i].style.backgroundColor = "#530084";
//       botao[i].style.color = "#FFFFFF";
//       botao[i].className = "registrationCandidates-button-tag true";
//     } else if (botao[i].className == "registrationCandidates-button-tag true") {
//       e.preventDefault();
//       botao[i].style.borderStyle = "solid";
//       botao[i].style.borderStyle = "#530084";
//       botao[i].style.backgroundColor = "#FFFFFF";
//       botao[i].style.color = "#530084";
//       botao[i].className = "registrationCandidates-button-tag false";
//     }
//   });
// }
var softSkills = [];
var hardSkills = [];
//executa a função ao iniciar a pagina adicionando os botões de hard e softskills
function onload() {
  //carrega os botões de softskill e os adiciona na página
  $.get("http://localhost:3000/api/softskills", function (softskills) {
    console.log(softskills)
    for (i = 0; i < softskills.length; i++) {
      $('#registrationCandidates-content-obligation').append(`<button class="registrationCandidates-button-tag-unclicked" onclick="selectSoftSkill(${softskills[i].id})" id="s${softskills[i].id}">` + softskills[i].name + `</button>`)
    }
  })


  $.get('http://localhost:3000/api/hardskills', function (hardskills) {
    //carrega os botões de hardskill e os adiciona na página
    for (i = 0; i < hardskills.length; i++) {
      $('#registrationCandidates-content-obligation-1').append(`<button class="registrationCandidates-button-tag-unclicked" onclick="selectHardSkill(${hardskills[i].id})" id="h${hardskills[i].id}">` + hardskills[i].name + `</button>`)
    }
  })
}

function selectSoftSkill(id) {
    //busca se o id já exise no array
    if (softSkills.indexOf(id)>=0) {
      //se existe, ele romeve do array o id
      softSkills.splice(softSkills.indexOf(id), 1);
      //e retira a classe de clicado
      document.getElementById("s"+id).classList.remove("registrationCandidates-button-tag-clicked");
    }else{
      //se não existe, adiciona ao array
      softSkills.push(id);
      //e adiciona a classe clicada
      document.getElementById("s"+id).classList.add("registrationCandidates-button-tag-clicked");
    }
  
}

function selectHardSkill(id) {
  //busca se o id já exise no array
  if (hardSkills.indexOf(id)>=0) {
    //se existe, ele romeve do array o id
    hardSkills.splice(hardSkills.indexOf(id), 1);
    //e retira a classe de clicado
    document.getElementById("h"+id).classList.remove("registrationCandidates-button-tag-clicked");
  }else{
    //se não existe, adiciona ao array
    hardSkills.push(id);
    //e adiciona a classe clicada
    document.getElementById("h"+id).classList.add("registrationCandidates-button-tag-clicked");
  }

}