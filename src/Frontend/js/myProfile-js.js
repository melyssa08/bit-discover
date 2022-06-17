// faz os botões de hard e soft skill funcionar
function botao(id) {
  if (id.getAttribute("class") == "myProfile-button-tag-unclicked" ){
 id.setAttribute("class","myProfile-button-tag-clicked")
  }
  else {
    id.setAttribute("class","myProfile-button-tag-unclicked")
  }
}
function pencilbutton() {
  var inputs = document.querySelectorAll("input")
  var selects = document.querySelectorAll("select")
  var buttons = document.querySelectorAll(".myProfile-button-tag")
  var textarea = document.querySelectorAll("textarea")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false
    inputs[i].classList.remove("myProfile-disabled")
  }
  for (let g = 0; g < selects.length; g++) {
    selects[g].disabled = false
    selects[g].classList.remove("myProfile-disabled")
  }
  for (let j = 0; j < textarea.length; j++) {
    textarea[j].disabled = false
    textarea[j].classList.remove("myProfile-disabled")
  }
  for (let h = 0; h < buttons.length; h++) {
    buttons[h].disabled = false
  }
}
gn 
$.ajax({
  url: "http://127.0.0.1:3000/api/candidates/?id=1",
  type: "GET",
  success: function (data) {
    $("#myProfile-input-name").val(data[0]["name"])
    $("#myProfile-input-email").val(data[0]["email"])
    $("#myProfile-input-confirm-email").val(data[0]["email"])
    $("#myProfile-input-age").val(data[0]["age"])
    $("#myProfile-input-CPF").val(data[0]["CPF"])
    $("#myProfile-input-password").val(data[0]["password"])
    $("#myProfile-input-confirm-password").val(data[0]["password"])
    $("#myProfile-input-cp").val(data[0]["postal_code"])
    $("#myProfile-select-scholarity").val(data[0]["scholarship"]).change()
    $("#myProfile-input-course").val(data[0]["graduation"]).change()
    $("#myProfile-experience").val(data[0]["likes"]).change()
    $("#myProfile-textarea").val(data[0]["description"]);

  }
})
function update_profile() {
  if (!($("#myProfile-input-email").val() == $("#myProfile-input-confirm-email").val())) {
    return alert("Os emails não coincidem!")
  }
  if (!($("#myProfile-input-password").val() == $("#myProfile-input-confirm-password").val())) {
    return alert("As senhas não coincidem!")
  }

  $.ajax({

  })
  $.ajax({
    url: "http://127.0.0.1:3000/api/candidates/1",
    type: "PUT",
    data: `name=${$("#myProfile-input-name").val()}&email=${$("#myProfile-input-email").val()}&age=${$("#myProfile-input-age").val()}&CPF=${$("#myProfile-input-CPF").val()}&password=${$("#myProfile-input-password").val()}&postal_code=${$("#myProfile-input-cp").val()}&scholarship=${$("#myProfile-select-scholarity").val()}&graduation=${$("#myProfile-input-course").val()}&likes=${$("#myProfile-experience").val()}&description=${$("#myProfile-textarea").val()}`,
    success: function (data) {
      alert("Mudanças registradas! :D")
    }
  })
}

//executa a função ao iniciar a pagina adicionando os botões de hard e softskills
function onload() {
 //carrega os botões de softskill e os adiciona na página
  $.get("http://localhost:3000/api/softskills", function(softskills) {
    console.log(softskills)
    for (i=0;i<softskills.length;i++) {
      $('#myProfile-content-obligation').append(`<button class="myProfile-button-tag-unclicked" id="s${softskills[i].id}"  onclick="botao(s${softskills[i].id})">` + softskills[i].name + `</button>`)
    }
  }) 

  
  $.get('http://localhost:3000/api/hardskills', function(hardskills) {
     //carrega os botões de hardskill e os adiciona na página
    for (i=0;i<hardskills.length;i++) {
      $('#myProfile-content-obligation-1').append(`<button class="myProfile-button-tag-unclicked" id="h${hardskills[i].id}" onclick="botao(h${hardskills[i].id})">` + hardskills[i].name + `</button>`)
    }
  })
   }
