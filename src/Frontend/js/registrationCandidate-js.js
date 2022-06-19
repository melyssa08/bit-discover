// faz os botões de hard e soft skill funcionar
function botao(id) {
  if (id.getAttribute("class") == "registrationCandidates-button-tag-unclicked" ){
 id.setAttribute("class","registrationCandidates-button-tag-clicked")
  }
  else {
    id.setAttribute("class","registrationCandidates-button-tag-unclicked")
  }
}
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

// atualiza os dados da usuária e vê se os campos esão preechidos corretamente
function create_profile() {
  // os if abaixo garantem que os dados estejam sendo inseridos de froma correta no formulário
  if ( $("#registrationCandidates-input-name").val().length ==0 || $("#registrationCandidates-input-email").val().length == 0 || $("#registrationCandidates-input-confirm-email").val().length ==0 || $("#registrationCandidates-input-age").val().length ==0 || $("#registrationCandidates-input-CPF").val().length == 0|| $("#registrationCandidates-input-password").val().length == 0 ||  $("#registrationCandidates-input-confirm-password").val().length == 0 ||$("#registrationCandidates-input-cp").val().length == 0 ||$("#registrationCandidates-textarea").val().length ==0){
    alert("não deixe nenhum campo em branco")
    return false
  }

  if (!($("#registrationCandidates-input-email").val() == $("#registrationCandidates-input-confirm-email").val())) {
    alert("Os emails não coincidem!")
    return false
  }
  if (!($("#registrationCandidates-input-password").val() == $("#registrationCandidates-input-confirm-password").val())) {
    alert("As senhas não coincidem!")
    return false
  }
  //salva as mudanças no perfil do usário
  $.ajax({
    url: "http://127.0.0.1:3000/api/candidates/1",
    type: "PUT",
    data: `name=${$("#registrationCandidates-input-name").val()}&email=${$("#registrationCandidates-input-email").val()}&age=${$("#registrationCandidates-input-age").val()}&CPF=${$("#registrationCandidates-input-CPF").val()}&password=${$("#registrationCandidates-input-password").val()}&postal_code=${$("#registrationCandidates-input-cp").val()}&scholarship=${$("#registrationCandidates-select-scholarity").val()}&graduation=${$("#registrationCandidates-input-course").val()}&likes=${$("#registrationCandidates-experience").val()}&description=${$("#registrationCandidates-textarea").val()}`,
    success: function (data) {
      alert("Perfil Criado com sucesso! :D")
    }
  })
  window.location.href = "../jobs_visualization/index.html"
}
//carrega ao iniciar pagina 
function onload() {
  //carrega os botões de softskill e os adiciona na página
   $.get("http://localhost:3000/api/softskills", function(softskills) {
     console.log(softskills)
     for (i=0;i<softskills.length;i++) {
       $('#registrationCandidates-content-obligation').append(`<button class="registrationCandidates-button-tag-unclicked" id="s${softskills[i].id}"  onclick="botao(s${softskills[i].id})">` + softskills[i].name + `</button>`)
     }
   }) 
 
   
   $.get('http://localhost:3000/api/hardskills', function(hardskills) {
      //carrega os botões de hardskill e os adiciona na página
     for (i=0;i<hardskills.length;i++) {
       $('#registrationCandidates-content-obligation-1').append(`<button class="registrationCandidates-button-tag-unclicked" id="h${hardskills[i].id}" onclick="botao(h${hardskills[i].id})">` + hardskills[i].name + `</button>`)
     }
   })
    }
 