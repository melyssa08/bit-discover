// variável que pega todos os botões que ficam em formato de array
var botao = document.querySelectorAll(".myProfile-button-tag");
for (item of botao) {
  item.className = "myProfile-button-tag false";
}
// loop que passa por cada botão e adciona propriedades em cada um deles
// visto que quando o evento é disparado o botão que foi clicado se ve com propriedades novas
for (let i = 0; i < botao.length; i++) {
  botao[i].addEventListener("click", function (e) {
    if (botao[i].className == "myProfile-button-tag false") {
      e.preventDefault();
      botao[i].style.backgroundColor = "#530084";
      botao[i].style.color = "#FFFFFF";
      botao[i].className = "myProfile-button-tag true";
    } else if (botao[i].className == "myProfile-button-tag true") {
      e.preventDefault();
      botao[i].style.borderStyle = "solid";
      botao[i].style.borderStyle = "#530084";
      botao[i].style.backgroundColor = "#FFFFFF";
      botao[i].style.color = "#530084";
      botao[i].className = "myProfile-button-tag false";
    }
  });
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

$.ajax({
  url: "http://127.0.0.1:3000/api/candidates/?id=1",
  type: "GET",
  success: function (data) {
    console.log(data)
    console.log(data[0]["name"])
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
    url: "http://127.0.0.1:3000/api/candidates/1",
    type: "PUT",
    data: `name=${$("#myProfile-input-name").val()}&email=${$("#myProfile-input-email").val()}&age=${$("#myProfile-input-age").val()}&CPF=${$("#myProfile-input-CPF").val()}&password=${$("#myProfile-input-password").val()}&postal_code=${$("#myProfile-input-cp").val()}&scholarship=${$("#myProfile-select-scholarity").val()}&graduation=${$("#myProfile-input-course").val()}&likes=${$("#myProfile-experience").val()}&description=${$("#myProfile-textarea").val()}`,
    success: function (data) {
      alert("Mudanças registradas! :D")
    }
  })
}